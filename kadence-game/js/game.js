// ============================================================
// KADENCE — Main Game Engine v2 (all 19 fixes)
// ============================================================

class Game {
  constructor() {
    this.state = {
      lang: 'en', day: 1, bank: 0, totalRating: 0, clientsServed: 0,
      clientIndex: 0, playtimeSeconds: 0, phase: 'menu',
      currentClient: null, builtBike: {}, revealedStats: {},
      dialogueStep: 0, choiceMade: {}, settings: { musicVolume: 38, sfxVolume: 64, textSpeed: 'default' }
    };
    this.playtimeInterval = null;
    this.textSpeedMs = { slow: 50, default: 28, fast: 12, instant: 0 };
    this.typewriterTimer = null;
    this.typewriterResolve = null;
    this.currentInventoryCategory = 'frame';
    this.selectedSlot = null;
    this._confirmCallback = null;
    this._inChoiceResponse = false;
    this._choiceResponseLines = null;
    this._choiceResponseIndex = 0;
    this._choiceReveal = null;
    this._currentSaveMode = 'load';
    this._returnScreen = 'main-menu'; // #1: Track where "Back" should go
    this.init();
  }

  init() {
    this._musicStarted = false;
    this._soundOn = true;
    this.bindEvents();
    this.applyLanguage();
    this.updateContinueButton();
    // Try to start music immediately (may be blocked by browser)
    this._tryStartMusic();
  }

  _tryStartMusic() {
    if (this._soundOn) {
      audio.playMusic('main_menu');
    }
    const handler = () => {
      if (this._soundOn) {
        audio.playMusic('main_menu');
      }
      document.removeEventListener('click', handler);
      document.removeEventListener('keydown', handler);
    };
    document.addEventListener('click', handler);
    document.addEventListener('keydown', handler);
  }

  bindEvents() {
    // All data-action buttons
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (btn) { this.handleAction(btn.dataset.action); return; }
    });

    // #7: Dialogue advance — click on the dialogue BOX specifically
    const dialogueBox = document.getElementById('dialogue-box');
    dialogueBox.addEventListener('click', (e) => {
      if (this.state.phase !== 'dialogue') return;
      e.stopPropagation();
      this.advanceDialogue();
    });

    // Pause buttons
    document.getElementById('pause-btn').addEventListener('click', (e) => { e.stopPropagation(); this.showPause(); });
    const wsPauseBtn = document.getElementById('workshop-pause-btn');
    if (wsPauseBtn) {
      wsPauseBtn.addEventListener('click', (e) => { e.stopPropagation(); this.showPause(); });
    }

    // Sound toggle button (main menu)
    document.getElementById('sound-toggle').addEventListener('click', (e) => {
      e.stopPropagation();
      this._soundOn = !this._soundOn;
      const icon = document.getElementById('sound-icon');
      if (this._soundOn) {
        icon.src = 'assets/ui/volume_on.png';
        audio.enabled = true;
        if (this._musicStarted) audio.playMusic('main_menu');
      } else {
        icon.src = 'assets/ui/volume_off.png';
        audio.enabled = false;
        audio.stopMusic();
      }
    });

    // Settings sliders
    document.getElementById('music-volume').addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      document.getElementById('music-volume-val').textContent = val + '%';
      this.state.settings.musicVolume = val;
      audio.setMusicVolume(val);
    });
    document.getElementById('sfx-volume').addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      document.getElementById('sfx-volume-val').textContent = val + '%';
      this.state.settings.sfxVolume = val;
      audio.setSfxVolume(val);
    });
    document.getElementById('text-speed').addEventListener('change', (e) => {
      this.state.settings.textSpeed = e.target.value;
    });
    document.getElementById('language-select').addEventListener('change', (e) => {
      this.state.lang = e.target.value;
      this.applyLanguage();
      if (this.state.phase === 'workshop') {
        this.renderWorkshop();
      } else if (this.state.phase === 'dialogue') {
        this.renderDialogueStep();
      } else if (this.state.phase === 'result' && this.state.lastResult) {
        this.showResult(this.state.lastResult.score, this.state.lastResult.earnings, this.state.lastResult.failMessage);
      }
    });

    // Deliver button
    document.getElementById('deliver-btn').addEventListener('click', () => {
      // #19: Submit confirmation before delivering
      this.showConfirm('Are you sure?', () => {
        audio.playSfx('money');
        this.deliverBike();
      });
    });

    // #19: Confirm dialog No button
    document.getElementById('confirm-no').addEventListener('click', () => {
      document.getElementById('confirm-overlay').classList.remove('active');
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (document.getElementById('confirm-overlay').classList.contains('active')) {
          document.getElementById('confirm-overlay').classList.remove('active');
          return;
        }
        if (document.getElementById('pause-screen').classList.contains('active')) { this.resumeGame(); return; }
        if (this.state.phase === 'dialogue' || this.state.phase === 'workshop') { this.showPause(); return; }
      }
      if (e.key === ' ' || e.key === 'Enter') {
        if (this.state.phase === 'dialogue' && document.getElementById('choices-container').classList.contains('hidden')) {
          this.advanceDialogue();
        }
      }
    });

    // Music is started by _tryStartMusic() in init()
  }

  handleAction(action) {
    switch (action) {
      case 'continue': this.continueGame(); break;
      case 'new-game': this.newGame(); break;
      // #1: From main menu → set return to menu
      case 'load-game': this._returnScreen = 'main-menu'; this.showScreen('load-screen'); this.renderSaveSlots('load'); break;
      case 'settings': this._returnScreen = 'main-menu'; this.showScreen('settings-screen'); break;
      case 'about-us': this._returnScreen = 'main-menu'; this.showScreen('about-screen'); break;
      // #1: Back button returns to where we came from
      case 'settings-back': case 'about-back': case 'load-back': this.showScreen(this._returnScreen); break;
      case 'save-back': this.showScreen(this._returnScreen); break;
      case 'resume': this.resumeGame(); break;
      // #1: From pause → set return to pause
      case 'pause-settings': this._returnScreen = 'pause-screen'; this.showScreen('settings-screen'); break;
      case 'pause-save': this._returnScreen = 'pause-screen'; this.showScreen('save-screen'); this.renderSaveSlots('save'); break;
      case 'pause-load': this._returnScreen = 'pause-screen'; this.showScreen('load-screen'); this.renderSaveSlots('load'); break;
      case 'pause-main-menu':
        this.showConfirm('Are you sure?', () => {
          this.stopPlaytime(); this.state.phase = 'menu';
          this.showScreen('main-menu'); audio.playMusic('main_menu');
          this.updateContinueButton();
        });
        break;
      case 'pause-quit':
        this.showConfirm('Are you sure?', () => {
          this.stopPlaytime(); this.state.phase = 'menu';
          this.showScreen('main-menu'); audio.playMusic('main_menu');
        });
        break;
      case 'end-main-menu':
        this.stopPlaytime(); this.state.phase = 'menu';
        this.showScreen('main-menu'); audio.playMusic('main_menu');
        this.updateContinueButton();
        break;
    }
  }

  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id)?.classList.add('active');
  }

  // #19: Submit confirmation popup
  showConfirm(text, callback) {
    this._confirmCallback = callback;
    document.querySelector('.confirm-text').textContent = text;
    document.getElementById('confirm-overlay').classList.add('active');
    document.getElementById('confirm-yes').onclick = () => {
      document.getElementById('confirm-overlay').classList.remove('active');
      if (this._confirmCallback) this._confirmCallback();
      this._confirmCallback = null;
    };
  }

  // ============================================================
  // GAME FLOW
  // ============================================================
  newGame() {
    this.state = {
      lang: this.state.lang, day: 1, bank: 1000, totalRating: 0,
      clientsServed: 0, clientIndex: 0, playtimeSeconds: 0, phase: 'dialogue',
      currentClient: null, builtBike: {}, revealedStats: {},
      dialogueStep: 0, choiceMade: {}, settings: this.state.settings
    };
    this._inChoiceResponse = false;
    this.startPlaytime();
    this.loadClient(0);
  }

  continueGame() {
    const save = this.getAutoSave();
    if (save) {
      this.loadState(save);
      this.startPlaytime();
      if (this.state.phase === 'workshop') this.enterWorkshop();
      else this.loadClient(this.state.clientIndex);
    }
  }

  updateContinueButton() {
    const btn = document.getElementById('continue-btn');
    if (this.getAutoSave()) btn.classList.remove('hidden');
    else btn.classList.add('hidden');
  }

  // ============================================================
  // CLIENT LOADING
  // ============================================================
  loadClient(index) {
    if (index >= CLIENTS.length) { this.endGame(); return; }
    this.state.clientIndex = index;
    this.state.currentClient = CLIENTS[index];
    this.state.builtBike = {};
    this.state.revealedStats = {};
    this.state.dialogueStep = 0;
    this.state.choiceMade = {};
    this.state.phase = 'dialogue';
    this._inChoiceResponse = false;

    const client = this.state.currentClient;
    document.getElementById('info-day').textContent = this.state.day;
    document.getElementById('info-bank').textContent = this.state.bank;
    document.getElementById('info-rating').textContent =
      this.state.clientsServed > 0 ? (this.state.totalRating / this.state.clientsServed).toFixed(1) : '0.0';

    const sprite = document.getElementById('character-sprite');
    sprite.src = client.sprite;
    sprite.onerror = () => { sprite.style.display = 'none'; };
    sprite.onload = () => { sprite.style.display = 'block'; };

    this.showScreen('game-screen');
    audio.playMusic('shop');
    audio.playSfx('door_open');

    this.renderDialogueStep();
  }

  // ============================================================
  // DIALOGUE SYSTEM — Updated choice logic
  // ============================================================
  renderDialogueStep() {
    const client = this.state.currentClient;
    const dialogue = DIALOGUES[client.id];
    const lang = this.state.lang;
    const step = this.state.dialogueStep;

    document.getElementById('choices-container').classList.add('hidden');
    document.getElementById('dialogue-container').classList.remove('hidden');

    const introLines = dialogue.intro[lang];
    if (step < introLines.length) {
      this.showDialogueLine(introLines[step]);
      return;
    }

    // After intro — show choices
    const allChoicesDone = dialogue.choices.every(c => this.state.choiceMade[c.id]);
    if (!allChoicesDone) {
      const nextChoice = dialogue.choices.find(c => !this.state.choiceMade[c.id]);
      if (nextChoice) { this.showChoice(nextChoice); return; }
    }

    // After all choices — show budget reveal
    const afterIntroAndChoices = introLines.length + dialogue.choices.length;
    const budgetStep = step - afterIntroAndChoices;
    const budgetLines = dialogue.budgetReveal[lang];
    if (budgetStep < budgetLines.length) {
      if (budgetStep === 0 && dialogue.budgetReveal.reveal) {
        this.applyReveal(dialogue.budgetReveal.reveal);
      }
      const line = budgetLines[budgetStep];
      if (line.reveal) this.applyReveal(line.reveal);
      this.showDialogueLine(line);
      return;
    }

    // After budget — show "Build the bike" button
    this.showBuildBikeButton();
  }

  showDialogueLine(line) {
    const speakerEl = document.getElementById('dialogue-speaker');
    const textEl = document.getElementById('dialogue-text');
    const continueEl = document.getElementById('dialogue-continue');

    if (line.speaker === 'narrator') {
      speakerEl.textContent = '';
      speakerEl.className = 'dialogue-speaker narrator';
    } else {
      speakerEl.textContent = line.speaker.charAt(0).toUpperCase() + line.speaker.slice(1);
      speakerEl.className = 'dialogue-speaker ' + line.speaker;
    }

    this._cancelTypewriter();
    const speed = this.textSpeedMs[this.state.settings.textSpeed];

    if (speed === 0) {
      textEl.textContent = line.text;
      continueEl.style.display = 'block';
      this._typewriterDone = true;
    } else {
      textEl.textContent = '';
      continueEl.style.display = 'none';
      this._typewriterDone = false;
      this._fullText = line.text;
      this._charIndex = 0;

      const type = () => {
        if (this._charIndex < this._fullText.length) {
          textEl.textContent += this._fullText.charAt(this._charIndex);
          this._charIndex++;
          this.typewriterTimer = setTimeout(type, speed);
        } else {
          this._typewriterDone = true;
          continueEl.style.display = 'block';
        }
      };
      type();
    }
  }

  _cancelTypewriter() {
    if (this.typewriterTimer) { clearTimeout(this.typewriterTimer); this.typewriterTimer = null; }
  }

  advanceDialogue() {
    if (!this._typewriterDone) {
      this._cancelTypewriter();
      document.getElementById('dialogue-text').textContent = this._fullText;
      document.getElementById('dialogue-continue').style.display = 'block';
      this._typewriterDone = true;
      return;
    }

    if (this._inChoiceResponse) {
      this._choiceResponseIndex++;
      if (this._choiceResponseIndex < this._choiceResponseLines.length) {
        this.showDialogueLine(this._choiceResponseLines[this._choiceResponseIndex]);
      } else {
        this._inChoiceResponse = false;
        if (this._choiceReveal) { this.applyReveal(this._choiceReveal); this._choiceReveal = null; }
        this.state.dialogueStep++;
        this.renderDialogueStep();
      }
      return;
    }

    this.state.dialogueStep++;
    this.renderDialogueStep();
  }

  showChoice(choice) {
    const lang = this.state.lang;
    const dialogue = DIALOGUES[this.state.currentClient.id];
    document.getElementById('dialogue-container').classList.add('hidden');
    const container = document.getElementById('choices-container');
    container.classList.remove('hidden');
    container.innerHTML = '';

    // Regular dialogue options
    choice.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = opt.text[lang];
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.playSfx('click');
        this.makeChoice(choice.id, opt);
      });
      container.appendChild(btn);
    });

    // "More options" button — only if there are unmade choices after this one
    const remainingChoices = dialogue.choices.filter(c => !this.state.choiceMade[c.id] && c.id !== choice.id);
    if (remainingChoices.length > 0) {
      const moreBtn = document.createElement('button');
      moreBtn.className = 'choice-btn choice-btn-system';
      moreBtn.textContent = lang === 'ru' ? 'Ещё варианты' : 'More options';
      moreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.playSfx('click');
        // Skip this choice, mark as skipped (no reveal)
        this.state.choiceMade[choice.id] = '__skipped__';
        this.state.dialogueStep++;
        this.renderDialogueStep();
      });
      container.appendChild(moreBtn);
    }
  }

  // "Build the bike" button — appears after all dialogue is done
  showBuildBikeButton() {
    const lang = this.state.lang;
    document.getElementById('dialogue-container').classList.add('hidden');
    const container = document.getElementById('choices-container');
    container.classList.remove('hidden');
    container.innerHTML = '';

    const btn = document.createElement('button');
    btn.className = 'choice-btn choice-btn-system';
    btn.textContent = lang === 'ru' ? 'Собрать велосипед' : 'Build the bike';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      audio.playSfx('click');
      this.enterWorkshop();
    });
    container.appendChild(btn);
  }

  makeChoice(choiceId, option) {
    this.state.choiceMade[choiceId] = option.id;
    const lang = this.state.lang;

    document.getElementById('choices-container').classList.add('hidden');
    document.getElementById('dialogue-container').classList.remove('hidden');

    if (option.response && option.response[lang]) {
      this._choiceResponseLines = option.response[lang];
      this._choiceResponseIndex = 0;
      this._choiceReveal = option.reveal;
      this._inChoiceResponse = true;
      this.showDialogueLine(this._choiceResponseLines[0]);
    } else {
      if (option.reveal) this.applyReveal(option.reveal);
      this.state.dialogueStep++;
      this.renderDialogueStep();
    }
  }

  applyReveal(reveal) {
    if (reveal.stat === 'budget') this.state.revealedStats.budget = reveal.value;
    else this.state.revealedStats[reveal.stat] = reveal.value;
  }

  // ============================================================
  // WORKSHOP — Pixel-perfect Figma handoff
  // ============================================================
  enterWorkshop() {
    this.state.phase = 'workshop';
    this.state.builtBike = {};
    this._openShopCategory = null;
    this.showScreen('workshop-screen');
    audio.playMusic('workshop');
    audio.playSfx('inventory_open');
    this.renderWorkshop();
    this._bindWorkshopEvents();
  }

  _bindWorkshopEvents() {
    // Back button → return to dialogue
    document.getElementById('ws-back-btn').onclick = () => {
      audio.playSfx('click');
      // Go back to dialogue (re-enter current client)
      this.loadClient(this.state.clientIndex);
    };
    // Close button → return to main menu
    document.getElementById('ws-close-btn').onclick = () => {
      audio.playSfx('click');
      this.showConfirm('Are you sure?', () => {
        this.stopPlaytime();
        this.state.phase = 'menu';
        this.showScreen('main-menu');
        audio.playMusic('main_menu');
        this.updateContinueButton();
      });
    };
    // Shop close
    document.getElementById('ws-shop-close').onclick = () => {
      audio.playSfx('inventory_close');
      this._closeShop();
    };
    // Click outside shop panel to close
    document.getElementById('ws-shop-overlay').onclick = (e) => {
      if (e.target.id === 'ws-shop-overlay') {
        audio.playSfx('inventory_close');
        this._closeShop();
      }
    };
    // Interactive labels
    document.querySelectorAll('.ws-label').forEach(label => {
      label.onclick = () => {
        const cat = label.dataset.category;
        this.handlePartClick(cat);
      };
    });
    // Deliver
    document.getElementById('deliver-btn').onclick = () => {
      this.showConfirm('Are you sure?', () => {
        audio.playSfx('money');
        this.deliverBike();
      });
    };
  }

  renderWorkshop() {
    this._renderBikeLabels();
    this._renderStats();
    this._renderCosts();
  }

  _renderBikeLabels() {
    const catMap = { frame: 'ws-part-frame', drivetrain: 'ws-part-drivetrain', brakes: 'ws-part-brakes', wheels: 'ws-part-wheels', saddle: 'ws-part-saddle' };
    Object.entries(catMap).forEach(([cat, elId]) => {
      const el = document.getElementById(elId);
      const itemId = this.state.builtBike[cat];
      if (itemId) {
        const item = ALL_ITEMS.find(i => i.id === itemId);
        const name = (this.state.lang === 'ru' && item && item.nameRu) ? item.nameRu : (item ? item.name : '');
        el.textContent = item ? `[${name}]` : '[Select part]';
      } else {
        el.textContent = '[Select part]';
      }
    });
  }

  _renderStats() {
    const totals = this.calculateBikeStats();
    // Normalize: range roughly -100 to 250 → 0 to 100%
    const norm = v => Math.max(0, Math.min(100, ((v + 100) / 350) * 100));
    document.getElementById('ws-bar-speed').style.width = norm(totals.speed) + '%';
    document.getElementById('ws-bar-comfort').style.width = norm(totals.comfort) + '%';
    document.getElementById('ws-bar-durability').style.width = norm(totals.durability) + '%';
    document.getElementById('ws-bar-style').style.width = norm(totals.style) + '%';
  }

  _renderCosts() {
    let totalCost = 0;
    Object.values(this.state.builtBike).forEach(id => {
      const item = ALL_ITEMS.find(i => i.id === id);
      if (item) totalCost += item.cost;
    });
    const budget = this.state.revealedStats.budget || 0;
    const balance = budget - totalCost;

    document.getElementById('ws-balance-val').textContent = '$' + balance.toFixed(2);
    document.getElementById('ws-total-cost-val').textContent = '$' + totalCost.toFixed(2);

    // Color balance red if negative
    document.getElementById('ws-balance-val').style.color = balance < 0 ? '#FF7272' : '#33FF41';

    const allFilled = ['frame', 'drivetrain', 'brakes', 'wheels', 'saddle'].every(c => this.state.builtBike[c]);
    // ORDER NOW disabled only if not all slots are filled
    document.getElementById('deliver-btn').disabled = !allFilled;
  }

  // Called when user clicks a bike part label → opens full store
  handlePartClick(category) {
    audio.playSfx('inventory_open');
    // Map bike category to store filter category
    const catToFilter = { frame: 'frames', drivetrain: 'drivetrain', brakes: 'drivetrain', wheels: 'wheels', saddle: 'accessories' };
    const filterCat = catToFilter[category] || null;
    this.openStore(filterCat, category);
  }

  _closeShop() {
    document.getElementById('ws-shop-overlay').classList.add('hidden');
    this._openShopCategory = null;
  }

  _renderShop(category) {
    const itemsKey = { frame: 'frames', drivetrain: 'drivetrains', brakes: 'brakes', wheels: 'wheels', saddle: 'saddles' }[category];
    const items = ITEMS[itemsKey];
    const catLabels = { frame: 'Frame', drivetrain: 'Drivetrain', brakes: 'Brakes', wheels: 'Wheels & Tires', saddle: 'Saddle & Extras' };
    const brandMap = {
      'Heavy Steel MTB': 'NO-NAME', 'Alu City Hybrid': 'AERODYNE', 'Track/Fixie Frame': 'AERODYNE',
      'Retro Cruiser': 'ROOTS HERITAGE', 'E-Fatbike Alu': 'AERODYNE', 'Cro-Mo Touring': 'ROOTS HERITAGE',
      'Carbon Aero Frame': 'AERODYNE', 'Vintage Restored': 'ROOTS HERITAGE',
      'V-Twoo 3x7': 'V-TWOO', 'Shamano Clara 2x9': 'SHAMANO', 'Shamano CORE 1x10': 'SHAMANO',
      'Fixed Gear Cog': 'NO-NAME', 'Hexa 3-Speed Hub': 'SHAMANO', 'Carbon Belt Drive': 'AERODYNE',
      'BRAM e-Shift 2x12': 'BRAM', 'G-Fang 750W Motor': 'G-FANG',
      'Brakeless (None)': 'NO-NAME', 'Cheap V-Brakes': 'NO-NAME', 'Coaster Brake': 'NO-NAME',
      'Mech Disc (160mm)': 'SHAMANO', 'Pro Caliper Brakes': 'AERODYNE', 'Hydro Disc (203mm)': 'AERODYNE',
      '26" Basic Knobby': 'NO-NAME', 'Retro Whitewall': 'ROOTS HERITAGE', 'Anti-Puncture City': 'NO-NAME',
      '28" Skinny Slicks': 'AERODYNE', '700c Gravel Tires': 'AERODYNE', '26x4.0" Fat Mud': 'AERODYNE',
      'Deep Carbon Rims': 'AERODYNE',
      'Plastic Stock Saddle': 'NO-NAME', 'Loud Clown Horn': 'NO-NAME', 'Front Basket': 'NO-NAME',
      'Full Mud Fenders': 'NO-NAME', 'Sofa Spring Saddle': 'NO-NAME', 'Aero TT Bars': 'AERODYNE',
      'Aero Sport Saddle': 'AERODYNE', 'Clipless Pedals': 'AERODYNE', 'Roots Heritage Leather': 'ROOTS HERITAGE',
    };

    document.getElementById('ws-shop-title').textContent = catLabels[category] || category;
    const list = document.getElementById('ws-shop-list');
    list.innerHTML = '';

    items.forEach(item => {
      const isEquipped = this.state.builtBike[category] === item.id;
      const brand = brandMap[item.name] || 'GENERIC';
      const displayName = (this.state.lang === 'ru' && item.nameRu) ? item.nameRu : item.name;

      const statsHtml = ['speed', 'comfort', 'durability', 'style'].map(s => {
        const v = item[s]; const cls = v > 0 ? 'positive' : v < 0 ? 'negative' : 'zero';
        return `<span class="mini-stat ${cls}">${v > 0 ? '+' : ''}${v}</span>`;
      }).join('');

      const card = document.createElement('div');
      card.className = 'ws-shop-item' + (isEquipped ? ' equipped' : '');
      card.innerHTML = `
        <div class="ws-shop-item-brand">${brand}</div>
        <div class="ws-shop-item-name">${displayName}</div>
        <div class="ws-shop-item-desc">${item.desc[this.state.lang]}</div>
        <div class="ws-shop-item-bottom">
          <div class="ws-shop-item-stats">${statsHtml}</div>
          <span class="ws-shop-item-cost">$${item.cost}</span>
        </div>
        <button class="ws-shop-item-add ${isEquipped ? 'equipped-btn' : ''}">${isEquipped ? '✓ Equipped' : 'Add to Cart'}</button>
      `;

      if (!isEquipped) {
        card.querySelector('.ws-shop-item-add').addEventListener('click', (e) => {
          e.stopPropagation();
          this.state.builtBike[category] = item.id;
          audio.playSfx('equip');
          this.renderWorkshop();
          this._renderShop(category); // Re-render shop
        });
      }
      list.appendChild(card);
    });
  }

  calculateBikeStats() {
    const totals = { speed: 0, comfort: 0, durability: 0, style: 0 };
    Object.values(this.state.builtBike).forEach(id => {
      const item = ALL_ITEMS.find(i => i.id === id);
      if (item) { totals.speed += item.speed; totals.comfort += item.comfort; totals.durability += item.durability; totals.style += item.style; }
    });
    return totals;
  }

  // updateWorkshopCosts removed — replaced by _renderCosts()

  // ============================================================
  // BIKESUPPLY STORE — Full e-commerce with filters
  // ============================================================
  openStore(preselectedCategory, subCategory) {
    this._storeFilters = {
      category: preselectedCategory ? [preselectedCategory] : [],
      subCategory: subCategory || null,
      priceMax: 500,
      stats: [],
      brands: [],
      search: ''
    };
    this._storePage = 1;
    this._storePerPage = 6;
    this._storeSort = 'featured';

    // Reset DOM elements of the store
    document.querySelectorAll('.store-filters input[type="checkbox"]').forEach(cb => cb.checked = false);
    const searchInput = document.getElementById('store-search');
    if (searchInput) searchInput.value = '';
    const priceSlider = document.getElementById('filter-price-slider');
    if (priceSlider) priceSlider.value = 500;
    const priceMaxLabel = document.getElementById('filter-price-max');
    if (priceMaxLabel) priceMaxLabel.textContent = '500';

    this.showScreen('store-screen');
    this._renderStore();
    this._bindStoreEvents(preselectedCategory);
  }

  _bindStoreEvents(preselectedCategory) {
    // Close store → back to workshop
    document.getElementById('store-close-btn').onclick = () => {
      audio.playSfx('inventory_close');
      this.showScreen('workshop-screen');
    };
    // Search
    document.getElementById('store-search').oninput = (e) => {
      this._storeFilters.search = e.target.value.toLowerCase();
      this._storePage = 1;
      this._renderStore();
    };
    // Price slider
    document.getElementById('filter-price-slider').oninput = (e) => {
      this._storeFilters.priceMax = parseInt(e.target.value);
      document.getElementById('filter-price-max').textContent = e.target.value;
      this._storePage = 1;
      this._renderStore();
    };
    // Category checkboxes
    document.querySelectorAll('[data-cat-filter]').forEach(cb => {
      if (preselectedCategory && cb.dataset.catFilter === preselectedCategory) cb.checked = true;
      cb.onchange = () => {
        this._storeFilters.subCategory = null;
        this._storeFilters.category = [...document.querySelectorAll('[data-cat-filter]:checked')].map(c => c.dataset.catFilter);
        this._storePage = 1;
        this._renderStore();
      };
    });
    // Stat checkboxes
    document.querySelectorAll('[data-stat-filter]').forEach(cb => {
      cb.onchange = () => {
        this._storeFilters.stats = [...document.querySelectorAll('[data-stat-filter]:checked')].map(c => c.dataset.statFilter);
        this._storePage = 1;
        this._renderStore();
      };
    });
    // Brand checkboxes
    document.querySelectorAll('[data-brand-filter]').forEach(cb => {
      cb.onchange = () => {
        this._storeFilters.brands = [...document.querySelectorAll('[data-brand-filter]:checked')].map(c => c.dataset.brandFilter);
        this._storePage = 1;
        this._renderStore();
      };
    });
    // Clear all
    document.getElementById('store-filters-clear').onclick = () => {
      document.querySelectorAll('.store-filters input[type="checkbox"]').forEach(cb => cb.checked = false);
      document.getElementById('filter-price-slider').value = 500;
      document.getElementById('filter-price-max').textContent = '500';
      this._storeFilters = { category: [], subCategory: null, priceMax: 500, stats: [], brands: [], search: '' };
      this._storePage = 1;
      this._renderStore();
    };
    // Filter accordion toggle
    document.querySelectorAll('.filter-section-header').forEach(btn => {
      btn.onclick = () => { btn.parentElement.classList.toggle('collapsed'); };
    });
    // Pagination
    document.querySelectorAll('.store-page-btn').forEach(btn => {
      btn.onclick = () => {
        const p = btn.dataset.page;
        if (p === 'prev') this._storePage = Math.max(1, this._storePage - 1);
        else if (p === 'next') this._storePage++;
        else this._storePage = parseInt(p);
        this._renderStore();
      };
    });
    // Load more
    document.getElementById('store-load-more').onclick = () => {
      this._storePerPage += 6;
      this._renderStore();
    };
    // Sort toggle
    document.getElementById('store-sort-btn').onclick = () => {
      const sorts = ['featured', 'price_asc', 'price_desc', 'name'];
      const idx = sorts.indexOf(this._storeSort);
      this._storeSort = sorts[(idx + 1) % sorts.length];
      const labels = { featured: 'Featured', price_asc: 'Price ↑', price_desc: 'Price ↓', name: 'A-Z' };
      document.getElementById('store-sort-btn').innerHTML = labels[this._storeSort] + ' <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round"/></svg>';
      this._renderStore();
    };
  }

  _getFilteredItems() {
    let items = [...ALL_ITEMS];
    const f = this._storeFilters;
    const brandMap = {
      'Heavy Steel MTB': 'NO-NAME', 'Alu City Hybrid': 'AERODYNE', 'Track/Fixie Frame': 'AERODYNE',
      'Retro Cruiser': 'ROOTS HERITAGE', 'E-Fatbike Alu': 'AERODYNE', 'Cro-Mo Touring': 'ROOTS HERITAGE',
      'Carbon Aero Frame': 'AERODYNE', 'Vintage Restored': 'ROOTS HERITAGE',
      'V-Twoo 3x7': 'V-TWOO', 'Shamano Clara 2x9': 'SHAMANO', 'Shamano CORE 1x10': 'SHAMANO',
      'Fixed Gear Cog': 'NO-NAME', 'Hexa 3-Speed Hub': 'SHAMANO', 'Carbon Belt Drive': 'AERODYNE',
      'BRAM e-Shift 2x12': 'BRAM', 'G-Fang 750W Motor': 'G-FANG',
      'Brakeless (None)': 'NO-NAME', 'Cheap V-Brakes': 'NO-NAME', 'Coaster Brake': 'NO-NAME',
      'Mech Disc (160mm)': 'SHAMANO', 'Pro Caliper Brakes': 'AERODYNE', 'Hydro Disc (203mm)': 'AERODYNE',
      '26" Basic Knobby': 'NO-NAME', 'Retro Whitewall': 'ROOTS HERITAGE', 'Anti-Puncture City': 'NO-NAME',
      '28" Skinny Slicks': 'AERODYNE', '700c Gravel Tires': 'AERODYNE', '26x4.0" Fat Mud': 'AERODYNE',
      'Deep Carbon Rims': 'AERODYNE',
      'Plastic Stock Saddle': 'NO-NAME', 'Loud Clown Horn': 'NO-NAME', 'Front Basket': 'NO-NAME',
      'Full Mud Fenders': 'NO-NAME', 'Sofa Spring Saddle': 'NO-NAME', 'Aero TT Bars': 'AERODYNE',
      'Aero Sport Saddle': 'AERODYNE', 'Clipless Pedals': 'AERODYNE', 'Roots Heritage Leather': 'ROOTS HERITAGE',
    };
    const catMap = { frame: 'frames', drivetrain: 'drivetrain', brakes: 'drivetrain', wheels: 'wheels', saddle: 'accessories' };

    // Category filter
    if (f.category.length > 0) {
      items = items.filter(item => {
        const mapped = catMap[item.category] || item.category;
        return f.category.includes(mapped);
      });
    }
    // Sub-category filter (e.g. brakes vs drivetrain) when clicking specifically from workshop labels
    if (f.subCategory) {
      items = items.filter(item => item.category === f.subCategory);
    }
    // Price filter
    items = items.filter(item => item.cost <= f.priceMax);
    // Search
    if (f.search) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(f.search) || 
        (item.nameRu && item.nameRu.toLowerCase().includes(f.search)) || 
        item.desc.en.toLowerCase().includes(f.search) || 
        (item.desc.ru && item.desc.ru.toLowerCase().includes(f.search))
      );
    }
    // Stat filter
    if (f.stats.length > 0) {
      items = items.filter(item => f.stats.some(s => item[s] > 15));
    }
    // Brand filter
    if (f.brands.length > 0) {
      items = items.filter(item => f.brands.includes(brandMap[item.name]));
    }
    // Sort
    if (this._storeSort === 'price_asc') items.sort((a, b) => a.cost - b.cost);
    else if (this._storeSort === 'price_desc') items.sort((a, b) => b.cost - a.cost);
    else if (this._storeSort === 'name') items.sort((a, b) => a.name.localeCompare(b.name));

    return items;
  }

  _renderStore() {
    const allFiltered = this._getFilteredItems();
    const total = allFiltered.length;
    const visible = allFiltered.slice(0, this._storePerPage);

    // Update balance
    const budget = this.state.revealedStats.budget || 0;
    let spent = 0;
    Object.values(this.state.builtBike).forEach(id => { const it = ALL_ITEMS.find(i => i.id === id); if (it) spent += it.cost; });
    document.getElementById('store-balance-val').textContent = '$' + (budget - spent).toFixed(2);

    // Update showing count
    document.getElementById('store-showing').textContent = `Showing ${visible.length} of ${total} items`;

    // Render grid
    const grid = document.getElementById('store-grid');
    grid.innerHTML = '';

    const brandMap = {
      'Heavy Steel MTB': 'NO-NAME', 'Alu City Hybrid': 'AERODYNE', 'Track/Fixie Frame': 'AERODYNE',
      'Retro Cruiser': 'ROOTS HERITAGE', 'E-Fatbike Alu': 'AERODYNE', 'Cro-Mo Touring': 'ROOTS HERITAGE',
      'Carbon Aero Frame': 'AERODYNE', 'Vintage Restored': 'ROOTS HERITAGE',
      'V-Twoo 3x7': 'V-TWOO', 'Shamano Clara 2x9': 'SHAMANO', 'Shamano CORE 1x10': 'SHAMANO',
      'Fixed Gear Cog': 'NO-NAME', 'Hexa 3-Speed Hub': 'SHAMANO', 'Carbon Belt Drive': 'AERODYNE',
      'BRAM e-Shift 2x12': 'BRAM', 'G-Fang 750W Motor': 'G-FANG',
      'Brakeless (None)': 'NO-NAME', 'Cheap V-Brakes': 'NO-NAME', 'Coaster Brake': 'NO-NAME',
      'Mech Disc (160mm)': 'SHAMANO', 'Pro Caliper Brakes': 'AERODYNE', 'Hydro Disc (203mm)': 'AERODYNE',
      '26" Basic Knobby': 'NO-NAME', 'Retro Whitewall': 'ROOTS HERITAGE', 'Anti-Puncture City': 'NO-NAME',
      '28" Skinny Slicks': 'AERODYNE', '700c Gravel Tires': 'AERODYNE', '26x4.0" Fat Mud': 'AERODYNE',
      'Deep Carbon Rims': 'AERODYNE',
      'Plastic Stock Saddle': 'NO-NAME', 'Loud Clown Horn': 'NO-NAME', 'Front Basket': 'NO-NAME',
      'Full Mud Fenders': 'NO-NAME', 'Sofa Spring Saddle': 'NO-NAME', 'Aero TT Bars': 'AERODYNE',
      'Aero Sport Saddle': 'AERODYNE', 'Clipless Pedals': 'AERODYNE', 'Roots Heritage Leather': 'ROOTS HERITAGE',
    };
    const emojiMap = { frame: '🚲', drivetrain: '⚙️', brakes: '🛑', wheels: '🛞', saddle: '💺' };

    visible.forEach(item => {
      const brand = brandMap[item.name] || 'GENERIC';
      const isEquipped = Object.values(this.state.builtBike).includes(item.id);
      const tags = item.tags.slice(0, 2);
      const displayName = (this.state.lang === 'ru' && item.nameRu) ? item.nameRu : item.name;

      const card = document.createElement('div');
      card.className = 'store-card';
      card.innerHTML = `
        <div class="store-card-img">
          ${item.image ? `<img src="${item.image}" alt="${item.name}" class="store-card-img-real" onerror="this.style.display='none'">` : ''}
          <span class="store-card-img-placeholder">${emojiMap[item.category] || '🔧'}</span>
          ${isEquipped ? '<span class="store-card-equipped-badge">Equipped</span>' : ''}
        </div>
        <div class="store-card-body">
          <div class="store-card-tags">${tags.map(t => `<span class="store-card-tag">${t}</span>`).join('')}</div>
          <div class="store-card-name">${displayName}</div>
          <div class="store-card-desc">${item.desc[this.state.lang]}</div>
          <div class="store-card-bottom">
            <span class="store-card-price">$${item.cost}.00</span>
            <button class="store-card-add ${isEquipped ? 'equipped-btn' : ''}">${isEquipped ? 'Equipped' : 'Add to Cart'}</button>
          </div>
        </div>
      `;
      if (!isEquipped) {
        card.querySelector('.store-card-add').addEventListener('click', (e) => {
          e.stopPropagation();
          // Equip to the correct category slot
          this.state.builtBike[item.category] = item.id;
          audio.playSfx('equip');
          this._renderStore(); // Re-render to update equipped state
          this.renderWorkshop(); // Update workshop stats
        });
      }
      grid.appendChild(card);
    });

    // Update pagination
    const totalPages = Math.ceil(total / this._storePerPage) || 1;
    const paginationControls = document.querySelector('.store-pagination-controls');
    if (paginationControls) {
      paginationControls.style.display = totalPages > 1 ? 'flex' : 'none';
    }
    const storePagination = document.querySelector('.store-pagination');
    if (storePagination) {
      storePagination.style.display = totalPages > 1 || visible.length < total ? 'flex' : 'none';
    }
    document.querySelectorAll('.store-page-btn').forEach(btn => {
      const p = btn.dataset.page;
      if (p === 'prev' || p === 'next') return;
      btn.classList.toggle('active', parseInt(p) === this._storePage);
      btn.style.display = parseInt(p) <= totalPages ? '' : 'none';
    });
  }

  // ============================================================
  // DELIVERY & SCORING — #11: Fixed algorithm
  // ============================================================
  deliverBike() {
    const client = this.state.currentClient;
    const totals = this.calculateBikeStats();
    const lang = this.state.lang;

    let totalCost = 0;
    Object.values(this.state.builtBike).forEach(id => {
      const item = ALL_ITEMS.find(i => i.id === id);
      if (item) totalCost += item.cost;
    });

    // Check fail conditions
    let failTriggered = false;
    let failMessage = '';

    for (const cond of client.failConditions) {
      if (cond.type === 'tag') {
        for (const id of Object.values(this.state.builtBike)) {
          const item = ALL_ITEMS.find(i => i.id === id);
          if (item && item.tags.includes(cond.tag)) { failTriggered = true; failMessage = cond.message[lang]; break; }
        }
      } else if (cond.type === 'has_brakes') {
        const brakeId = this.state.builtBike.brakes;
        if (brakeId && brakeId !== 'brakeless') { failTriggered = true; failMessage = cond.message[lang]; }
      } else if (cond.type === 'has_item') {
        if (!Object.values(this.state.builtBike).includes(cond.itemId)) { failTriggered = true; failMessage = cond.message[lang]; }
      }
      if (failTriggered) break;
    }

    // #11: Improved scoring — matches design doc thresholds
    let score = 5;
    if (failTriggered) {
      score = 1;
    } else {
      const statNames = ['speed', 'comfort', 'durability', 'style'];
      let checksPassed = 0;
      let totalChecks = 0;

      statNames.forEach(stat => {
        if (client.ignoredStats.includes(stat)) return;
        const val = totals[stat];
        const target = client.targets[stat];
        const maxTarget = client.maxTargets ? client.maxTargets[stat] : null;

        if (target !== null && target !== undefined) {
          totalChecks++;
          if (val >= target) checksPassed++;
        }
        if (maxTarget !== null && maxTarget !== undefined) {
          totalChecks++;
          if (val <= maxTarget) checksPassed++;
        }
      });

      // Budget check
      if (this.state.revealedStats.budget) {
        totalChecks++;
        if (totalCost <= this.state.revealedStats.budget) checksPassed++;
      }

      if (totalChecks > 0) {
        const pct = checksPassed / totalChecks;
        if (pct >= 0.9) score = 5;
        else if (pct >= 0.7) score = 4;
        else if (pct >= 0.5) score = 3;
        else if (pct >= 0.3) score = 2;
        else score = 1;
      }

      // Explicit penalty for exceeding budget (can go over budget, but negatively impacts rating)
      if (this.state.revealedStats.budget && totalCost > this.state.revealedStats.budget) {
        const excessRatio = (totalCost - this.state.revealedStats.budget) / this.state.revealedStats.budget;
        if (excessRatio > 0.3) {
          score = 1; // 1 star for heavily exceeding the budget (e.g. over 30%)
        } else if (excessRatio > 0.1) {
          score = Math.max(1, score - 2); // -2 stars penalty
        } else {
          score = Math.max(1, score - 1); // Standard -1 star penalty
        }
      }
    }

    const baseEarnings = Math.round(totalCost * 0.3);
    const earnings = Math.round(baseEarnings * (score / 5) + (score * 20));

    this.state.bank += earnings;
    this.state.totalRating += score;
    this.state.clientsServed++;
    this.autoSave();
    this.showResult(score, earnings, failMessage);
  }

  showResult(score, earnings, failMessage) {
    this.state.phase = 'result';
    this.state.lastResult = { score, earnings, failMessage };
    this.showScreen('result-screen');

    const lang = this.state.lang;
    const client = this.state.currentClient;
    const dialogue = DIALOGUES[client.id];

    // Stars
    const starsDiv = document.getElementById('result-stars');
    starsDiv.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      const span = document.createElement('span');
      span.className = 'star-animate';
      span.textContent = i < score ? '⭐' : '☆';
      span.style.animationDelay = (i * 0.2) + 's';
      starsDiv.appendChild(span);
    }

    // Review text — use per-character reviews
    const reviewKey = score >= 5 ? '5' : score >= 3 ? '3' : '1';
    const reviews = CHARACTER_REVIEWS[client.id];
    const reviewText = reviews ? reviews[reviewKey][lang] : REVIEWS[score][lang];
    document.getElementById('result-review').textContent = reviewText;

    document.getElementById('result-earnings').textContent = '+$' + earnings;

    // Delivery dialogue
    const deliveryDiv = document.getElementById('result-delivery-text');
    if (failMessage) {
      deliveryDiv.innerHTML = `<div class="dialogue-speaker narrator" style="color:var(--accent-red);font-size:16px;">⚠ ${failMessage}</div>`;
    } else {
      const lines = score >= 4 ? dialogue.delivery.perfect[lang] : dialogue.delivery.bad[lang];
      deliveryDiv.innerHTML = lines.map(line => {
        const cls = line.speaker === 'narrator' ? 'narrator' : line.speaker;
        return `<div class="dialogue-speaker ${cls}" style="font-size:14px;margin-bottom:2px;">${line.speaker === 'narrator' ? '' : line.speaker.charAt(0).toUpperCase() + line.speaker.slice(1) + ':'}</div>
                <div style="font-size:16px;margin-bottom:10px;color:var(--text-secondary);">${line.text}</div>`;
      }).join('');
    }

    audio.playMusic(score >= 4 ? 'result_good' : 'result_bad');
    audio.playSfx('money');

    const nextBtn = document.getElementById('result-next-btn');
    if (this.state.clientIndex + 1 >= CLIENTS.length) {
      nextBtn.textContent = 'See Results';
      nextBtn.onclick = () => this.endGame();
    } else {
      nextBtn.textContent = 'Next Client →';
      nextBtn.onclick = () => { this.state.day++; this.loadClient(this.state.clientIndex + 1); };
    }
  }

  // ============================================================
  // END GAME — #17: Main Menu button
  // ============================================================
  endGame() {
    this.state.phase = 'end';
    this.stopPlaytime();
    // Clear autosave so Continue button is hidden after game completion
    localStorage.removeItem('kadence_autosave');
    this.showScreen('end-screen');
    audio.playMusic('end');

    const lang = this.state.lang;
    const statsDiv = document.getElementById('end-stats');
    const avgRating = this.state.clientsServed > 0 ? (this.state.totalRating / this.state.clientsServed).toFixed(1) : '0.0';
    const h = Math.floor(this.state.playtimeSeconds / 3600);
    const m = Math.floor((this.state.playtimeSeconds % 3600) / 60);

    const goodbyeText = lang === 'ru' ? 
      `<div class="end-goodbye">🐾 Огромное спасибо за то, что сыграли в прототип Kadence! Эш передает, что ты чертовски хороший механик, а колени наших любимых клиентов спасены от боли раз и навсегда. Крути педали навстречу солнцу, не забывай про шлем, береги свои суставы и до встречи на новых велодорожках! — Команда Ханны и LemiTZ 🚲❤️</div>` :
      `<div class="end-goodbye">🐾 Thank you so much for playing the Kadence demo! Ash says you're an incredibly fine mechanic, and our clients' knees are forever grateful. Keep pedaling towards the sun, remember to wear a helmet, take care of your joints, and see you on the trails! — Hanna & LemiTZ 🚲❤️</div>`;

    statsDiv.innerHTML = `
      <div class="end-stat-row"><span class="end-stat-label">Clients Served</span><span class="end-stat-value">${this.state.clientsServed} / ${CLIENTS.length}</span></div>
      <div class="end-stat-row"><span class="end-stat-label">Average Rating</span><span class="end-stat-value">⭐ ${avgRating}</span></div>
      <div class="end-stat-row"><span class="end-stat-label">Total Earnings</span><span class="end-stat-value">$${this.state.bank}</span></div>
      <div class="end-stat-row"><span class="end-stat-label">Playtime</span><span class="end-stat-value">${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m</span></div>
      ${goodbyeText}
    `;
  }

  // ============================================================
  // PAUSE — #14 fixed
  // ============================================================
  showPause() { this.showScreen('pause-screen'); }

  resumeGame() {
    if (this.state.phase === 'workshop') this.showScreen('workshop-screen');
    else if (this.state.phase === 'dialogue') this.showScreen('game-screen');
    else if (this.state.phase === 'result') this.showScreen('result-screen');
  }

  // ============================================================
  // SAVE / LOAD
  // ============================================================
  saveToSlot(i) {
    const saves = JSON.parse(localStorage.getItem('kadence_saves') || '[]');
    saves[i] = this.getStateSnapshot();
    localStorage.setItem('kadence_saves', JSON.stringify(saves));
    this.renderSaveSlots('save');
  }

  loadFromSlot(i) {
    const saves = JSON.parse(localStorage.getItem('kadence_saves') || '[]');
    if (saves[i]) {
      this.loadState(saves[i]);
      this.startPlaytime();
      if (this.state.phase === 'workshop') this.enterWorkshop();
      else if (this.state.phase === 'result') { this.state.day++; this.loadClient(Math.min(this.state.clientIndex + 1, CLIENTS.length - 1)); }
      else this.loadClient(this.state.clientIndex);
    }
  }

  deleteSlot(i) {
    const saves = JSON.parse(localStorage.getItem('kadence_saves') || '[]');
    saves[i] = null;
    localStorage.setItem('kadence_saves', JSON.stringify(saves));
    this.renderSaveSlots(this._currentSaveMode);
  }

  autoSave() { localStorage.setItem('kadence_autosave', JSON.stringify(this.getStateSnapshot())); }
  getAutoSave() { const d = localStorage.getItem('kadence_autosave'); return d ? JSON.parse(d) : null; }
  getStateSnapshot() { return { ...this.state, savedAt: new Date().toISOString(), version: '0.1' }; }

  loadState(data) {
    this.state = { ...this.state, ...data, settings: data.settings || this.state.settings };
    document.getElementById('music-volume').value = this.state.settings.musicVolume;
    document.getElementById('music-volume-val').textContent = this.state.settings.musicVolume + '%';
    document.getElementById('sfx-volume').value = this.state.settings.sfxVolume;
    document.getElementById('sfx-volume-val').textContent = this.state.settings.sfxVolume + '%';
    document.getElementById('text-speed').value = this.state.settings.textSpeed;
    document.getElementById('language-select').value = this.state.lang;
    audio.setMusicVolume(this.state.settings.musicVolume);
    audio.setSfxVolume(this.state.settings.sfxVolume);
    this.applyLanguage();
  }

  renderSaveSlots(mode) {
    this._currentSaveMode = mode;
    const containerId = mode === 'save' ? 'save-slots' : 'load-slots';
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const saves = JSON.parse(localStorage.getItem('kadence_saves') || '[]');

    for (let i = 0; i < 3; i++) {
      const save = saves[i];
      const slot = document.createElement('div');
      slot.className = 'lg-slot';

      if (save) {
        // OCCUPIED SLOT
        const avg = save.clientsServed > 0 ? (save.totalRating / save.clientsServed).toFixed(1) : '0.0';
        const h = Math.floor((save.playtimeSeconds || 0) / 3600);
        const m = Math.floor(((save.playtimeSeconds || 0) % 3600) / 60);
        const lastC = save.clientIndex < CLIENTS.length ? CLIENTS[save.clientIndex].name : '—';
        const btnText = mode === 'save' ? 'REWRITE' : 'LOAD';

        slot.innerHTML = `
          <div class="lg-slot-header">
            <div class="lg-slot-name">FILE 0${i + 1}</div>
            <div class="lg-slot-playtime">Playtime: ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m</div>
          </div>
          <div class="lg-card">
            <div class="lg-card-stats">
              <div class="lg-card-stat-row"><span>Day ${save.day}</span><span>Bank: $${save.bank}</span></div>
              <div class="lg-card-stat-row"><span>Rating: ${avg}</span><span>Last Client: ${lastC}</span></div>
            </div>
            <div class="lg-card-preview"><div class="lg-card-preview-placeholder">🎮</div></div>
            <button class="lg-card-delete" data-slot="${i}" data-action-slot="delete" title="Delete">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M3 6H5H21" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/><path d="M8 6V4C8 3.4 8.4 3 9 3H15C15.6 3 16 3.4 16 4V6M19 6V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V6" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
            <button class="lg-card-load" data-slot="${i}" data-action-slot="${mode}">${btnText}</button>
          </div>
        `;
      } else {
        // EMPTY SLOT
        if (mode === 'save') {
          slot.innerHTML = `
            <div class="lg-slot-header">
              <div class="lg-slot-name">FILE 0${i + 1}</div>
              <div class="lg-slot-playtime">Playtime: 00h 00m</div>
            </div>
            <div class="lg-card">
              <div class="lg-card-stats">
                <div class="lg-card-stat-row"><span>Day ?</span><span>Bank: $ ???</span></div>
                <div class="lg-card-stat-row"><span>Rating: ?</span><span>Last Client: —</span></div>
              </div>
              <button class="lg-card-load" data-slot="${i}" data-action-slot="save">SAVE</button>
            </div>
          `;
        } else {
          slot.innerHTML = `
            <div class="lg-slot-header">
              <div class="lg-slot-name">FILE 0${i + 1}</div>
              <div class="lg-slot-playtime">Playtime: --h --m</div>
            </div>
            <div class="lg-card">
              <div class="lg-card-empty">Empty Slot</div>
            </div>
          `;
        }
      }

      // Bind action buttons
      slot.querySelectorAll('[data-action-slot]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.dataset.slot);
          const act = btn.dataset.actionSlot;
          if (act === 'load') this.loadFromSlot(idx);
          else if (act === 'save') this.saveToSlot(idx);
          else if (act === 'delete') this.deleteSlot(idx);
        });
      });

      // Click card to load (only in load mode, only if save exists)
      if (mode === 'load' && save) {
        slot.querySelector('.lg-card').addEventListener('click', () => this.loadFromSlot(i));
      }

      container.appendChild(slot);
    }
  }

  startPlaytime() { this.stopPlaytime(); this.playtimeInterval = setInterval(() => { this.state.playtimeSeconds++; }, 1000); }
  stopPlaytime() { if (this.playtimeInterval) { clearInterval(this.playtimeInterval); this.playtimeInterval = null; } }

  applyLanguage() {
    const l = this.state.lang;
    const t = (en, ru) => l === 'ru' ? ru : en;

    // Main Menu
    const continueBtn = document.getElementById('continue-btn');
    if (continueBtn) continueBtn.textContent = t('Continue', 'Продолжить');
    document.querySelectorAll('#main-menu .menu-btn[data-action="new-game"]').forEach(e => e.textContent = t('New Game', 'Новая игра'));
    document.querySelectorAll('#main-menu .menu-btn[data-action="load-game"]').forEach(e => e.textContent = t('Load Game', 'Загрузить'));
    document.querySelectorAll('#main-menu .menu-btn[data-action="settings"]').forEach(e => e.textContent = t('Settings', 'Настройки'));
    document.querySelectorAll('#main-menu .menu-btn[data-action="about-us"]').forEach(e => e.textContent = t('About Us', 'О нас'));

    // Pause
    document.querySelector('.pause-title').textContent = t('Pause', 'Пауза');
    const pauseBtns = document.querySelectorAll('.pause-btn');
    const pauseLabels = [t('Resume','Продолжить'), t('Settings','Настройки'), t('Save Game','Сохранить'), t('Load Game','Загрузить'), t('Main Menu','Главное меню'), t('Quit','Выход')];
    pauseBtns.forEach((btn, i) => { if (pauseLabels[i]) btn.textContent = pauseLabels[i]; });

    // Settings
    document.querySelector('#settings-screen .lg-title').textContent = t('Settings', 'Настройки');
    const stHeaders = document.querySelectorAll('#settings-screen .st-section-header');
    if (stHeaders[0]) stHeaders[0].textContent = t('Audio', 'Аудио');
    if (stHeaders[1]) stHeaders[1].textContent = t('Display', 'Дисплей');
    if (stHeaders[2]) stHeaders[2].textContent = t('Accessibility', 'Доступность');
    const stLabels = document.querySelectorAll('#settings-screen .st-label');
    if (stLabels[0]) stLabels[0].textContent = t('Music Volume', 'Громкость музыки');
    if (stLabels[1]) stLabels[1].textContent = t('SFX Volume', 'Громкость звуков');
    if (stLabels[2]) stLabels[2].textContent = t('Window Mode', 'Режим окна');
    if (stLabels[3]) stLabels[3].textContent = t('Text Speed', 'Скорость текста');
    if (stLabels[4]) stLabels[4].textContent = 'Language / Язык';

    // About Us
    document.querySelector('#about-screen .lg-title, #about-screen .about-title').textContent = t('About us', 'О нас');

    // Load / Save
    document.querySelector('#load-screen .lg-title').textContent = t('Load Game', 'Загрузить');
    document.querySelector('#save-screen .lg-title').textContent = t('Save Game', 'Сохранить');

    // Workshop
    document.querySelector('.ws-stats-title').textContent = t('Stats', 'Характеристики');
    document.querySelector('.ws-order-btn').textContent = t('ORDER NOW', 'ЗАКАЗАТЬ');
    document.querySelectorAll('.ws-label-cat').forEach(el => {
      const key = el.textContent.trim();
      const map = { 'Frame': 'Рама', 'Drivetrain': 'Трансмиссия', 'Brakes': 'Тормоза', 'Wheels & Tires': 'Колёса', 'Saddle': 'Седло' };
      if (l === 'ru' && map[key]) el.textContent = map[key];
    });

    // Result
    document.querySelector('.result-title').textContent = t('Yelp Review', 'Отзыв');

    // End screen
    document.querySelector('.end-title').textContent = t('Thanks for playing Kadence!', 'Спасибо что играли в Kadence!');

    // Store
    document.querySelector('.store-search-input').placeholder = t('Search parts or packs...', 'Поиск деталей...');
    document.querySelector('.store-filters-title').textContent = t('Filters', 'Фильтры');
    document.querySelector('.store-filters-clear').textContent = t('Clear All', 'Очистить');
  }
}

document.addEventListener('DOMContentLoaded', () => { window.game = new Game(); });
