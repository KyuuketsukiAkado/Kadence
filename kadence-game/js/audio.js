// ============================================================
// KADENCE — Audio Manager
// Handles music and SFX playback
// ============================================================

class AudioManager {
  constructor() {
    this.musicVolume = 0.38;
    this.sfxVolume = 0.64;
    this.currentMusic = null;
    this.musicEl = null;
    this.enabled = true;

    this.tracks = {
      main_menu: 'assets/music/main_music.mp3',
      shop: 'assets/music/spoke_and_sunlight.mp3',
      workshop: 'assets/music/oiling_the_spokes.mp3',
      result_good: 'assets/music/the_sunday_freewheel.mp3',
      result_bad: 'assets/music/strange_request.mp3',
      end: 'assets/music/definitely_not_my_fault.mp3'
    };

    this.sfx = {
      click: 'assets/sfx/choosing.mp3',
      door_open: 'assets/sfx/opening_door.mp3',
      door_close: 'assets/sfx/closing_door.mp3',
      footsteps: 'assets/sfx/footsteps.mp3',
      inventory_open: 'assets/sfx/inventory_open.mp3',
      inventory_close: 'assets/sfx/inventory_close.mp3',
      money: 'assets/sfx/money.mp3',
      equip: 'assets/sfx/putting_details.mp3',
      unequip: 'assets/sfx/removing_details.mp3'
    };
  }

  setMusicVolume(vol) {
    this.musicVolume = vol / 100;
    if (this.musicEl) {
      this.musicEl.volume = this.musicVolume;
    }
  }

  setSfxVolume(vol) {
    this.sfxVolume = vol / 100;
  }

  playMusic(trackKey) {
    if (!this.enabled) return;
    const src = this.tracks[trackKey];
    if (!src) return;

    // Don't restart same track
    if (this.currentMusic === trackKey && this.musicEl && !this.musicEl.paused) return;

    // Fade out current
    if (this.musicEl) {
      const old = this.musicEl;
      const fadeOut = setInterval(() => {
        old.volume = Math.max(0, old.volume - 0.05);
        if (old.volume <= 0) {
          clearInterval(fadeOut);
          old.pause();
          old.remove();
        }
      }, 50);
    }

    this.musicEl = new Audio(src);
    this.musicEl.loop = true;
    this.musicEl.volume = 0;
    this.musicEl.play().catch(() => {});
    this.currentMusic = trackKey;

    // Fade in
    const fadeIn = setInterval(() => {
      if (this.musicEl.volume < this.musicVolume) {
        this.musicEl.volume = Math.min(this.musicVolume, this.musicEl.volume + 0.05);
      } else {
        clearInterval(fadeIn);
      }
    }, 50);
  }

  stopMusic() {
    if (this.musicEl) {
      const old = this.musicEl;
      const fadeOut = setInterval(() => {
        old.volume = Math.max(0, old.volume - 0.05);
        if (old.volume <= 0) {
          clearInterval(fadeOut);
          old.pause();
        }
      }, 50);
      this.musicEl = null;
      this.currentMusic = null;
    }
  }

  playSfx(sfxKey) {
    if (!this.enabled) return;
    const src = this.sfx[sfxKey];
    if (!src) return;
    try {
      const sfx = new Audio(src);
      sfx.volume = this.sfxVolume;
      sfx.play().catch(() => {});
    } catch (e) {}
  }
}

const audio = new AudioManager();
