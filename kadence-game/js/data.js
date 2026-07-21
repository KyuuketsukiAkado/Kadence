// ============================================================
// KADENCE - Game Database
// All items, clients, dialogues, and game configuration
// ============================================================

const CATEGORIES = {
  FRAME: 'frame',
  DRIVETRAIN: 'drivetrain',
  BRAKES: 'brakes',
  WHEELS: 'wheels',
  SADDLE: 'saddle'
};

const CATEGORY_LABELS = {
  frame: { en: 'Frame', ru: 'Рама' },
  drivetrain: { en: 'Drivetrain', ru: 'Трансмиссия' },
  brakes: { en: 'Brakes', ru: 'Тормоза' },
  wheels: { en: 'Wheels & Tires', ru: 'Колёса и покрышки' },
  saddle: { en: 'Saddle & Extras', ru: 'Седло и аксессуары' }
};

const CATEGORY_ICONS = {
  frame: '🚲',
  drivetrain: '⚙️',
  brakes: '🛑',
  wheels: '🛞',
  saddle: '💺'
};

// ============================================================
// ITEM DATABASE
// ============================================================
const ITEMS = {
  // --- FRAMES ---
  frames: [
    {
      id: 'heavy_steel_mtb', name: 'Heavy Steel MTB',
      desc: { en: 'Cheap, indestructible, heavy as a tank.', ru: 'Дешёвая, неубиваемая, тяжёлая как танк.' },
      category: CATEGORIES.FRAME, tier: 'budget',
      cost: 50, speed: -20, comfort: -10, durability: 40, style: -10,
      tags: ['Indestructible', 'Heavyweight'],
      image: 'assets/products/frames/heavy_steel_mtb.jpeg'
    },
    {
      id: 'alu_city_hybrid', name: 'Alu City Hybrid',
      desc: { en: 'Lightweight, great for commuting. Very practical.', ru: 'Лёгкая, отлична для города. Очень практичная.' },
      category: CATEGORIES.FRAME, tier: 'mid',
      cost: 120, speed: 20, comfort: 20, durability: 10, style: 10,
      tags: ['Fast Rolling', 'Ergonomic'],
      image: 'assets/products/frames/alu_city_hybrid.jpeg'
    },
    {
      id: 'track_fixie_frame', name: 'Track/Fixie Frame',
      desc: { en: 'Aggressive geometry. Fast, stiff, hurts your back.', ru: 'Агрессивная геометрия. Быстрая, жёсткая, ломает спину.' },
      category: CATEGORIES.FRAME, tier: 'mid',
      cost: 150, speed: 40, comfort: -30, durability: 0, style: 40,
      tags: ['Lightweight', 'Premium'],
      image: 'assets/products/frames/track_fixie_frame.jpeg'
    },
    {
      id: 'retro_cruiser', name: 'Retro Cruiser',
      desc: { en: 'Step-through frame. Upright posture for grandpas.', ru: 'Рама с низкой посадкой. Прямая осанка для дедушек.' },
      category: CATEGORIES.FRAME, tier: 'budget',
      cost: 90, speed: -10, comfort: 50, durability: 20, style: 30,
      tags: ['Cloud Nine', 'Vintage Vibe'],
      image: 'assets/products/frames/retro_cruiser.jpeg'
    },
    {
      id: 'e_fatbike_alu', name: 'E-Fatbike Alu',
      desc: { en: 'Reinforced for 150kg+. Basically a tractor frame.', ru: 'Усилена для 150кг+. По сути тракторная рама.' },
      category: CATEGORIES.FRAME, tier: 'premium',
      cost: 200, speed: 0, comfort: 10, durability: 50, style: 20,
      tags: ['Indestructible', 'Vintage Vibe'],
      image: 'assets/products/frames/efatbike_alu.jpeg'
    },
    {
      id: 'cro_mo_touring', name: 'Cro-Mo Touring',
      desc: { en: 'Steel is real. Heavy, but rides like a Cadillac.', ru: 'Сталь — это реально. Тяжёлая, но едет как Кадиллак.' },
      category: CATEGORIES.FRAME, tier: 'premium',
      cost: 180, speed: 10, comfort: 40, durability: 50, style: 30,
      tags: ['Indestructible', 'Cloud Nine'],
      image: 'assets/products/frames/cro_mo_touring.jpeg'
    },
    {
      id: 'carbon_aero_frame', name: 'Carbon Aero Frame',
      desc: { en: 'Stiff, ultra-light, extremely expensive. Don\'t crash.', ru: 'Жёсткая, ультралёгкая, очень дорогая. Не падайте.' },
      category: CATEGORIES.FRAME, tier: 'luxury',
      cost: 400, speed: 60, comfort: -20, durability: -30, style: 50,
      tags: ['Lightweight', 'Premium'],
      image: 'assets/products/frames/crabon_aero_frame.jpeg'
    },
    {
      id: 'vintage_restored', name: 'Vintage Restored',
      desc: { en: 'Paint is chipped, but the hipster vibe is immaculate.', ru: 'Краска облупилась, но хипстерская атмосфера непревзойдённая.' },
      category: CATEGORIES.FRAME, tier: 'mid',
      cost: 110, speed: 10, comfort: 0, durability: 10, style: 40,
      tags: ['Premium', 'Fast Rolling'],
      image: 'assets/products/frames/vintage_restored.jpeg'
    }
  ],

  // --- DRIVETRAIN ---
  drivetrains: [
    {
      id: 'vtwoo_3x7', name: 'V-Twoo 3x7',
      desc: { en: 'It shifts... sometimes. Makes terrible plastic noises.', ru: 'Переключается... иногда. Издаёт жуткие пластиковые звуки.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'budget',
      cost: 20, speed: -10, comfort: -20, durability: -10, style: -20,
      tags: ['Aggressive', 'Ugly Duckling'],
      image: 'assets/products/drivetrain/V_TWOO.png'
    },
    {
      id: 'shamano_clara_2x9', name: 'Shamano Clara 2x9',
      desc: { en: 'The ultimate "just okay" drivetrain. Works fine.', ru: 'Абсредненько. Работает нормально.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'mid',
      cost: 50, speed: 10, comfort: 10, durability: 10, style: 0,
      tags: ['Fast Rolling', 'Reliable'],
      image: 'assets/products/drivetrain/shamano_clara.png'
    },
    {
      id: 'shamano_core_1x10', name: 'Shamano CORE 1x10',
      desc: { en: 'Modern, smooth, reliable. No front derailleur fuss.', ru: 'Современная, плавная, надёжная. Без переднего переключателя.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'mid',
      cost: 90, speed: 20, comfort: 30, durability: 30, style: 10,
      tags: ['Cloud Nine', 'Indestructible'],
      image: 'assets/products/drivetrain/shamano_core.png'
    },
    {
      id: 'fixed_gear_cog', name: 'Fixed Gear Cog',
      desc: { en: 'No freewheel. You stop pedaling, you die.', ru: 'Нет свободного хода. Остановил педали — умер.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'budget',
      cost: 30, speed: 30, comfort: -40, durability: 10, style: 40,
      tags: ['Premium', 'Aggressive'],
      image: 'assets/products/drivetrain/fixed_gear_cog.jpeg'
    },
    {
      id: 'hexa_3speed_hub', name: 'Hexa 3-Speed Hub',
      desc: { en: 'Internal gears. Zero maintenance, super clean look.', ru: 'Внутренние передачи. Ноль обслуживания, суперчистый вид.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'mid',
      cost: 80, speed: -10, comfort: 40, durability: 40, style: 20,
      tags: ['Cloud Nine', 'Indestructible'],
      image: 'assets/products/drivetrain/hexa_3_speed_hub.jpeg'
    },
    {
      id: 'carbon_belt_drive', name: 'Carbon Belt Drive',
      desc: { en: 'No chain, no grease, total silence. A mechanic\'s dream.', ru: 'Нет цепи, нет смазки, тишина. Мечта механика.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'premium',
      cost: 150, speed: 20, comfort: 30, durability: 50, style: 40,
      tags: ['Indestructible', 'Premium'],
      image: 'assets/products/drivetrain/carbon_belt_drive.jpeg'
    },
    {
      id: 'bram_eshift_2x12', name: 'BRAM e-Shift 2x12',
      desc: { en: 'Bzz-bzz. Shifts electronically. Costs a kidney.', ru: 'Бзз-бзз. Переключается электронно. Стоит как почка.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'luxury',
      cost: 300, speed: 50, comfort: 20, durability: 0, style: 50,
      tags: ['Lightweight', 'Premium'],
      image: 'assets/products/drivetrain/bram_eshift.jpeg'
    },
    {
      id: 'gfang_750w_motor', name: 'G-Fang 750W Motor',
      desc: { en: 'Cheating? Yes. Fast? Absolutely.', ru: 'Жульничество? Да. Быстро? Absolutely.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'premium',
      cost: 250, speed: 50, comfort: 20, durability: -10, style: 10,
      tags: ['Lightweight', 'Ergonomic'],
      image: 'assets/products/drivetrain/gfang_motor.jpeg'
    }
  ],

  // --- BRAKES ---
  brakes: [
    {
      id: 'brakeless', name: 'Brakeless (None)',
      desc: { en: 'Brakes are death. We die like men.', ru: 'Тормоза — это смерть. Умрём как мужики.' },
      category: CATEGORIES.BRAKES, tier: 'free',
      cost: 0, speed: 10, comfort: -50, durability: -50, style: 50,
      tags: ['Aggressive', 'Fragile'],
      image: 'assets/products/brakes/brakeless.jpeg'
    },
    {
      id: 'cheap_vbrakes', name: 'Cheap V-Brakes',
      desc: { en: 'Screams in the rain. Budget friendly.', ru: 'Визжит в дождь. Бюджетный вариант.' },
      category: CATEGORIES.BRAKES, tier: 'budget',
      cost: 15, speed: 0, comfort: -10, durability: -10, style: -10,
      tags: [],
      image: 'assets/products/brakes/cheap_v_breaks.jpeg'
    },
    {
      id: 'coaster_brake', name: 'Coaster Brake',
      desc: { en: 'Pedal backward to stop. Classic grandpa tech.', ru: 'Крути педали назад чтобы остановиться. Классика дедушки.' },
      category: CATEGORIES.BRAKES, tier: 'budget',
      cost: 25, speed: -10, comfort: 20, durability: 30, style: 10,
      tags: ['Indestructible', 'Ergonomic'],
      image: 'assets/products/brakes/coaster_brake.jpeg'
    },
    {
      id: 'mech_disc_160', name: 'Mech Disc (160mm)',
      desc: { en: 'Good ol\' mechanical discs. Balanced stopping.', ru: 'Хорошие старые механические диски. Сбалансированное торможение.' },
      category: CATEGORIES.BRAKES, tier: 'mid',
      cost: 40, speed: 0, comfort: 10, durability: 20, style: 0,
      tags: ['Reliable', 'Ergonomic'],
      image: 'assets/products/brakes/mech_disc.jpeg'
    },
    {
      id: 'pro_caliper', name: 'Pro Caliper Brakes',
      desc: { en: 'Lightweight, aero. For those who shave their legs.', ru: 'Лёгкие, аэро. Для тех, кто бреет ноги.' },
      category: CATEGORIES.BRAKES, tier: 'mid',
      cost: 80, speed: 20, comfort: 0, durability: 0, style: 30,
      tags: ['Premium', 'Fast Rolling'],
      image: 'assets/products/brakes/pro_caliper_brakes.jpeg'
    },
    {
      id: 'hydro_disc_203', name: 'Hydro Disc (203mm)',
      desc: { en: 'Massive rotors. Will stop a freight train.', ru: 'Огромные роторы. Остановят даже грузовой поезд.' },
      category: CATEGORIES.BRAKES, tier: 'premium',
      cost: 100, speed: -10, comfort: 20, durability: 50, style: 20,
      tags: ['Indestructible', 'Ergonomic'],
      image: 'assets/products/brakes/hydro_disc.jpeg'
    }
  ],

  // --- WHEELS & TIRES ---
  wheels: [
    {
      id: 'basic_knobby_26', name: '26" Basic Knobby',
      desc: { en: 'Standard cheap mountain bike tires.', ru: 'Стандартные дешёвые горные покрышки.' },
      category: CATEGORIES.WHEELS, tier: 'budget',
      cost: 30, speed: -10, comfort: 10, durability: 10, style: -10,
      tags: ['Reliable'],
      image: 'assets/products/wheels/26_basic_knobby.jpeg'
    },
    {
      id: 'retro_whitewall', name: 'Retro Whitewall',
      desc: { en: 'Brown sidewalls. Makes any bike look instantly expensive.', ru: 'Коричневые боковины. Любой байк сразу выглядит дороже.' },
      category: CATEGORIES.WHEELS, tier: 'budget',
      cost: 45, speed: 10, comfort: 10, durability: 0, style: 40,
      tags: ['Premium', 'Fast Rolling'],
      image: 'assets/products/wheels/retro_whitewall.jpeg'
    },
    {
      id: 'antipuncture_city', name: 'Anti-Puncture City',
      desc: { en: 'Heavy, but you can ride over broken glass safely.', ru: 'Тяжёлые, но по битому стеклу можно ездить спокойно.' },
      category: CATEGORIES.WHEELS, tier: 'mid',
      cost: 50, speed: -20, comfort: 10, durability: 50, style: -10,
      tags: ['Indestructible', 'Heavyweight'],
      image: 'assets/products/wheels/anti_puncture_city.png'
    },
    {
      id: 'skinny_slicks_28', name: '28" Skinny Slicks',
      desc: { en: 'Fast on asphalt, terrifying on sand.', ru: 'Быстрые на асфальте, ужасные на песке.' },
      category: CATEGORIES.WHEELS, tier: 'mid',
      cost: 60, speed: 40, comfort: -20, durability: -10, style: 20,
      tags: ['Lightweight', 'Aggressive'],
      image: 'assets/products/wheels/28_skinny_slicks.jpeg'
    },
    {
      id: 'gravel_700c', name: '700c Gravel Tires',
      desc: { en: 'The golden middle. Eats bumps, keeps rolling.', ru: 'Золотая середина. Ест неровности, продолжает катить.' },
      category: CATEGORIES.WHEELS, tier: 'mid',
      cost: 70, speed: 20, comfort: 20, durability: 20, style: 20,
      tags: ['Fast Rolling', 'Ergonomic'],
      image: 'assets/products/wheels/700c_gravel_tires.jpeg'
    },
    {
      id: 'fat_mud_26x4', name: '26x4.0" Fat Mud',
      desc: { en: 'Monster truck tires. Sand doesn\'t stand a chance.', ru: 'Покрышки монстр-трака. Песок не имеет шансов.' },
      category: CATEGORIES.WHEELS, tier: 'premium',
      cost: 90, speed: -30, comfort: 30, durability: 50, style: 30,
      tags: ['Indestructible', 'Heavyweight'],
      image: 'assets/products/wheels/26_4_fat_mud.png'
    },
    {
      id: 'deep_carbon_rims', name: 'Deep Carbon Rims',
      desc: { en: 'Makes that cool "whoosh" sound. Crosswinds hurt.', ru: 'Издает крутое "вжжж". Боковой вредит.' },
      category: CATEGORIES.WHEELS, tier: 'luxury',
      cost: 200, speed: 50, comfort: -20, durability: -20, style: 50,
      tags: ['Lightweight', 'Premium']
    }
  ],

  // --- SADDLES & EXTRAS ---
  saddles: [
    {
      id: 'plastic_stock', name: 'Plastic Stock Saddle',
      desc: { en: 'Feels like sitting on a literal brick.', ru: 'Ощущение как от сидения на кирпиче.' },
      category: CATEGORIES.SADDLE, tier: 'budget',
      cost: 10, speed: 0, comfort: -40, durability: 0, style: -20,
      tags: ['Aggressive', 'Ugly Duckling'],
      image: 'assets/products/saddles/plastic_stock_saddle.jpeg'
    },
    {
      id: 'loud_clown_horn', name: 'Loud Clown Horn',
      desc: { en: 'HONK! Annoying, but effectively prevents accidents.', ru: 'ГАМК! Раздражает, но эффективно предотвращает аварии.' },
      category: CATEGORIES.SADDLE, tier: 'budget',
      cost: 5, speed: 0, comfort: 10, durability: 10, style: -30,
      tags: ['Ugly Duckling', 'Ergonomic'],
      image: 'assets/products/saddles/loud_clown_horn.jpeg'
    },
    {
      id: 'front_basket', name: 'Front Basket',
      desc: { en: 'Cute, practical, ruins aerodynamics completely.', ru: 'Милая, практичная, полностью убивает аэродинамику.' },
      category: CATEGORIES.SADDLE, tier: 'budget',
      cost: 20, speed: -20, comfort: 30, durability: 10, style: 20,
      tags: ['Cloud Nine', 'Heavyweight'],
      image: 'assets/products/saddles/front_basket.jpeg'
    },
    {
      id: 'full_mud_fenders', name: 'Full Mud Fenders',
      desc: { en: 'Keeps the dirt and manure off your face.', ru: 'Защищает от грязи и навоза на лице.' },
      category: CATEGORIES.SADDLE, tier: 'budget',
      cost: 25, speed: -10, comfort: 20, durability: 10, style: -20,
      tags: ['Ergonomic', 'Ugly Duckling'],
      image: 'assets/products/saddles/full_mud_fenders.png'
    },
    {
      id: 'sofa_spring_saddle', name: 'Sofa Spring Saddle',
      desc: { en: 'Huge, soft, heavy. Grandpa\'s absolute favorite.', ru: 'Огромное, мягкое, тяжёлое. Абсолютный фаворит дедушки.' },
      category: CATEGORIES.SADDLE, tier: 'budget',
      cost: 35, speed: -20, comfort: 50, durability: 20, style: -10,
      tags: ['Cloud Nine', 'Heavyweight'],
      image: 'assets/products/saddles/sofa_spring_saddle.jpeg'
    },
    {
      id: 'aero_tt_bars', name: 'Aero TT Bars',
      desc: { en: 'Look like a praying mantis. Go fast. Hate your back.', ru: 'Выглядишь как богомол. Летишь ненавидишь свою спину.' },
      category: CATEGORIES.SADDLE, tier: 'mid',
      cost: 40, speed: 40, comfort: -40, durability: -10, style: 10,
      tags: ['Lightweight', 'Aggressive'],
      image: 'assets/products/saddles/aero_tt_bars.png'
    },
    {
      id: 'aero_sport_saddle', name: 'Aero Sport Saddle',
      desc: { en: 'Lightweight, looks pro, slightly numb after 10km.', ru: 'Лёгкое, выглядит про, немного немеет после 10км.' },
      category: CATEGORIES.SADDLE, tier: 'mid',
      cost: 50, speed: 20, comfort: -10, durability: 10, style: 30,
      tags: ['Premium', 'Fast Rolling'],
      image: 'assets/products/saddles/aero_sport_saddle.jpeg'
    },
    {
      id: 'clipless_pedals', name: 'Clipless Pedals',
      desc: { en: 'Shoes lock in. Maximum pedaling efficiency.', ru: 'Обувь фиксируется. Максимальная эффективность педалирования.' },
      category: CATEGORIES.SADDLE, tier: 'mid',
      cost: 60, speed: 30, comfort: -20, durability: 0, style: 30,
      tags: ['Lightweight', 'Premium'],
      image: 'assets/products/saddles/clipless_pedals.jpeg'
    },
    {
      id: 'roots_heritage_leather', name: 'Roots Heritage Leather',
      desc: { en: 'Takes 500km to break in, then lasts a lifetime.', ru: 'Нужно 500км чтобы разносить, потом служит всю жизнь.' },
      category: CATEGORIES.SADDLE, tier: 'premium',
      cost: 120, speed: -10, comfort: 40, durability: 50, style: 50,
      tags: ['Indestructible', 'Premium'],
      image: 'assets/products/saddles/roots_heritage_leather.jpeg'
    }
  ]
};

// Flat list of all items
const ALL_ITEMS = [
  ...ITEMS.frames, ...ITEMS.drivetrains, ...ITEMS.brakes, ...ITEMS.wheels, ...ITEMS.saddles
];

// ============================================================
// TAG MODIFIERS (applied when calculating final score)
// ============================================================
const TAG_MODIFIERS = {
  'Lightweight':      { speed: 30, durability: -10 },
  'Fast Rolling':     { speed: 15, comfort: -5 },
  'Heavyweight':      { speed: -30, durability: 20 },
  'Cloud Nine':       { comfort: 30, speed: -10 },
  'Ergonomic':        { comfort: 15, style: 0 },
  'Aggressive':       { comfort: -30, speed: 20 },
  'Indestructible':   { durability: 30, speed: -20 },
  'Reliable':         { durability: 15 },
  'Fragile':          { durability: -30, style: 20 },
  'Premium':          { style: 30 },
  'Vintage Vibe':     { style: 20, speed: -10 },
  'Ugly Duckling':    { style: -30, comfort: 10 }
};

// ============================================================
// CLIENT DATA & TARGETS
// ============================================================
const CLIENTS = [
  {
    id: 'hanna',
    name: 'Hanna',
    nameRu: 'Ханна',
    title: { en: 'The Tutorial Client', ru: 'Обучающий клиент' },
    sprite: 'assets/sprites/Hanna/Hanna.png',
    day: 1,
    maxBudget: 350,
    targets: { speed: 40, comfort: 30, durability: 10, style: null },
    ignoredStats: ['style'],
    failConditions: [
      { type: 'tag', tag: 'Heavyweight', message: { en: 'Hanna hates heavy bikes!', ru: 'Ханна ненавидит тяжёлые байки!' } }
    ]
  },
  {
    id: 'tony',
    name: 'Tony',
    nameRu: 'Тони',
    title: { en: 'The E-Fatbike Monster', ru: 'Монстр на электробайке' },
    sprite: 'assets/sprites/Tony/Tony.png',
    day: 2,
    maxBudget: 800,
    targets: { speed: 40, comfort: 40, durability: 100, style: null },
    ignoredStats: ['style'],
    failConditions: []
  },
  {
    id: 'dzed',
    name: 'Dzed',
    nameRu: 'Дед',
    title: { en: 'Retro Pensioner', ru: 'Ретро-пенсионер' },
    sprite: 'assets/sprites/Dzed/Dzed.png',
    day: 3,
    maxBudget: 200,
    targets: { speed: null, comfort: 80, durability: 40, style: 30 },
    maxTargets: { speed: 10 },
    ignoredStats: [],
    failConditions: []
  },
  {
    id: 'vitalya',
    name: 'Vitalya',
    nameRu: 'Виталя',
    title: { en: 'Mad Fixie', ru: 'Безумный фиксер' },
    sprite: 'assets/sprites/Vitalya/Vitalya.png',
    day: 4,
    maxBudget: 400,
    targets: { speed: 100, durability: null, style: 80 },
    maxTargets: { comfort: 0 },
    ignoredStats: ['comfort', 'durability'],
    failConditions: [
      { type: 'has_brakes', message: { en: 'Vitalya doesn\'t want brakes! Brakeless only!', ru: 'Виталя не хочет тормоза! Только без тормозов!' } }
    ]
  },
  {
    id: 'ewa',
    name: 'Ewa',
    nameRu: 'Ева',
    title: { en: 'Factory Girl', ru: 'Заводская девушка' },
    sprite: 'assets/sprites/Ewa/Ewa.png',
    day: 5,
    maxBudget: 130,
    targets: { speed: -40, comfort: -80, durability: 10, style: null },
    ignoredStats: ['style'],
    failConditions: []
  },
  {
    id: 'syalyanych',
    name: 'Syalyanych',
    nameRu: 'Селяныч',
    title: { en: 'Village Tuner', ru: 'Деревенский тюнер' },
    sprite: 'assets/sprites/Syalyanych/Syalyanych.png',
    day: 6,
    maxBudget: 300,
    targets: { speed: 0, comfort: 10, durability: 80, style: null },
    maxTargets: { style: -20 },
    ignoredStats: [],
    failConditions: [
      { type: 'has_item', itemId: 'full_mud_fenders', message: { en: 'Syalyanych needs mud fenders!', ru: 'Селянычу нужны крылья!' } }
    ]
  }
];

// ============================================================
// DIALOGUE SCRIPTS (EN + RU)
// ============================================================
const DIALOGUES = {
  hanna: {
    intro: {
      en: [
        { speaker: 'narrator', text: 'The bell rings. Hanna walks in, looking completely defeated, holding a notepad.' },
        { speaker: 'hanna', text: 'Hi... Are you the mechanic?' },
        { speaker: 'ash', text: 'That\'s what the sign on the door says. Welcome to Kadence. Rough day?' },
        { speaker: 'hanna', text: 'Rough week. I just bought a bike off the local marketplace. I wanted to start commuting to work, but it\'s a disaster. Every time I turn, my toe hits the front wheel! And it\'s so heavy I can barely carry it up to my apartment.' },
        { speaker: 'ash', text: 'Toe overlap and a heavy frame. Classic.' }
      ],
      ru: [
        { speaker: 'narrator', text: 'Звенит звонок. Ханна заходит, выглядит совершенно разбитой, держит блокнот.' },
        { speaker: 'hanna', text: 'Привет... Вы механик?' },
        { speaker: 'ash', text: 'Так написано на табличке. Добро пожаловать в Kadence. Тяжёлый день?' },
        { speaker: 'hanna', text: 'Тяжёлая неделя. Я только что купила велосипед на местной барахолке. Хотела начать ездить на работу, но это катастрофа. Каждый раз, когда я поворачиваю, носок бьётся о переднее колесо! И он такой тяжёлый, что я едва могу затащить его в квартиру.' },
        { speaker: 'ash', text: 'Наложение носка и тяжёлая рама. Классика.' }
      ]
    },
    choices: [
      {
        id: 'hanna_c1',
        question: { en: 'How to fix her bike problem?', ru: 'Как решить проблему с её велосипедом?' },
        options: [
          {
            id: 'hanna_c1_a',
            text: { en: '"Sounds like you bought a steel mountain bike. We need to switch you to a lightweight aluminum frame."', ru: '"Похоже, ты купила стальной горный велосипед. Нужно пересадить тебя на лёгкую алюминиевую раму."' },
            response: {
              en: [
                { speaker: 'hanna', text: 'Steel? I didn\'t even check the specs, I just bought it because it was matte black! But yes, a lighter frame sounds amazing.' },
                { speaker: 'ash', text: 'Rule number one: never buy a bike just because it looks cool.' }
              ],
              ru: [
                { speaker: 'hanna', text: 'Сталь? Я даже не смотрела характеристики, купила потому что матово-чёрный! Но да, полегше звучит отлично.' },
                { speaker: 'ash', text: 'Правило номер один: никогда не покупай велосипед только потому что он круто выглядит.' }
              ]
            },
            reveal: { stat: 'speed', value: 40 }
          },
          {
            id: 'hanna_c1_b',
            text: { en: '"Toe overlap? How tall are you? The frame size is probably completely wrong."', ru: '"Наложение носка? Какой у тебя рост? Размер рамы скорее всего вообще не тот."' },
            response: {
              en: [
                { speaker: 'hanna', text: 'I\'m 158 cm. The seller told me "one size fits all"! Was he lying?' },
                { speaker: 'ash', text: '"One size fits all" is the biggest lie in the cycling industry.' }
              ],
              ru: [
                { speaker: 'hanna', text: 'Мне 158 см. Продавец сказал "универсальный размер"! Он врал?' },
                { speaker: 'ash', text: '"Универсальный размер" — самая большая ложь в веломире.' }
              ]
            },
            reveal: { stat: 'speed', value: 40 }
          }
        ]
      },
      {
        id: 'hanna_c2',
        question: { en: 'What about her drivetrain issues?', ru: 'А что насчёт проблем с трансмиссией?' },
        options: [
          {
            id: 'hanna_c2_a',
            text: { en: '"You don\'t need suspension for city commuting. A rigid fork will save your energy."', ru: '"Тебе не нужна подвеска для города. Жёсткая вилка сбережёт твою энергию."' },
            response: {
              en: [
                { speaker: 'hanna', text: 'A rigid fork? Won\'t that be bumpy? Honestly, I don\'t care, as long as it helps me actually get up the hill without dying.' },
                { speaker: 'ash', text: 'Smart choice. Fake suspension on cheap bikes just steals your pedaling power.' }
              ],
              ru: [
                { speaker: 'hanna', text: 'Жёсткая вилка? Не будет ли трясти? Честно, мне всё равно, лишь бы помогло забраться на холм без смерти.' },
                { speaker: 'ash', text: 'Умный выбор. Фальшивая подвеска на дешёвых байках только крадёт твою энергию педалирования.' }
              ]
            },
            reveal: { stat: 'comfort', value: 30 }
          },
          {
            id: 'hanna_c2_b',
            text: { en: '"You probably have too many gears. Let\'s simplify your drivetrain."', ru: '"У тебя наверное слишком много передач. Давай упростим трансмиссию."' },
            response: {
              en: [
                { speaker: 'hanna', text: 'Yes! My current bike has like 21 gears, and the chain keeps falling off when I switch the left lever. It\'s a nightmare.' },
                { speaker: 'ash', text: 'A simple 1x drivetrain is what she needs. No front derailleur, no dropped chains.' }
              ],
              ru: [
                { speaker: 'hanna', text: 'Да! У моего нынешнего велосипеда аж 21 передача, и цепь постоянно слетает когда я переключаю левый рычаг. Кошмар.' },
                { speaker: 'ash', text: 'Простая 1x трансмиссия — то что ей нужно. Нет переднего переключателя, нет слетающей цепи.' }
              ]
            },
            reveal: { stat: 'comfort', value: 30 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: 'hanna', text: 'So... can you build me something light, simple, and actually my size? My budget is pretty tight, around $350 max.' },
        { speaker: 'ash', text: 'Leave it to us. You won\'t be fighting your bike anymore.' }
      ],
      ru: [
        { speaker: 'hanna', text: 'Так... можешь собрать мне что-то лёгкое, простое и подходящего размера? Бюджет небольшой, около $350 максимум.' },
        { speaker: 'ash', text: 'Оставь это нам. Ты больше не будешь бороться со своим велосипедом.' }
      ],
      reveal: { stat: 'budget', value: 350 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: 'hanna', text: 'Is it ready? Tell me it doesn\'t weigh 20 kilos!' },
          { speaker: 'ash', text: 'Here. Try lifting it.' },
          { speaker: 'hanna', text: 'Oh wow... It\'s so light! And the gears look so simple to use! Thank you so much, I can actually look forward to my commute now!' },
          { speaker: 'ash', text: 'Another pair of knees saved. We\'re basically doctors, but with wrenches.' }
        ],
        ru: [
          { speaker: 'hanna', text: 'Готово? Скажи мне что он не весит 20 килограмм!' },
          { speaker: 'ash', text: 'Вот. Попробуй поднять.' },
          { speaker: 'hanna', text: 'Ого... Он такой лёгкий! И передачи выглядят такими простыми! Спасибо огромное, теперь я даже жду поездку на работу!' },
          { speaker: 'ash', text: 'Ещё одни колени спасены. Мы basically врачи, но с гаечными ключами.' }
        ]
      },
      bad: {
        en: [
          { speaker: 'hanna', text: 'Wait... this is just as heavy as my old one! And why does it have suspension? I told you I just ride on asphalt!' },
          { speaker: 'ash', text: 'We just sold a tractor to someone who needed a scooter. Not our best work.' }
        ],
        ru: [
          { speaker: 'hanna', text: 'Подождите... он такой же тяжёлый как мой старый! И почему тут подвеска? Я же говорила что езжу только по асфальту!' },
          { speaker: 'ash', text: 'Мы только что продали трактор тому, кому нужен был скутер. Не наша лучшая работа.' }
        ]
      }
    }
  },

  tony: {
    intro: {
      en: [
        { speaker: 'narrator', text: 'Tony bursts through the door, covered in sand.' },
        { speaker: 'tony', text: 'Meh, screw this! I was rushing home and there was that old man in his stupid brown jacket and that damn cane! There was no space to overtake him properly and I was given a choice: either I go offroad through that grass on the left, or I go to the right through a sand pit.' },
        { speaker: 'tony', text: 'It looked really tiny and I thought it would not make any difference... I could have just waited but my ego pushed me to increase speed and go through sand. As you can clearly see, it did not end well.' }
      ],
      ru: [
        { speaker: 'narrator', text: 'Тони врывается в дверь, весь в песке.' },
        { speaker: 'tony', text: 'Да пошло всё! Ехал домой, а впереди дед в своей дурацкой коричневой куртке с тростью! Не было возможности нормально обогнуть, и передо мной выбор: либо через траву налево, либо через песчаную яму направо.' },
        { speaker: 'tony', text: 'Выглядело совсем маленьким, и я подумал что разницы не будет... Мог бы просто подождать, но моё эго подтолкнуло разогнаться и проехать через песок. Как видишь, всё закончилось плохо.' }
      ]
    },
    choices: [
      {
        id: 'tony_c1',
        question: { en: 'How to approach Tony\'s request?', ru: 'Как подойти к просьбе Тони?' },
        options: [
          {
            id: 'tony_c1_a',
            text: { en: '"What are your physical parameters?"', ru: '"Какие у тебя физические параметры?"' },
            response: {
              en: [
                { speaker: 'ash', text: 'Well, shit happens, mate. What are your physical parameters?' },
                { speaker: 'tony', text: '190/125. I\'m a heavy ass man.' },
                { speaker: 'ash', text: 'We\'re talking e-bikes at this point unless you want to break your ankles.' }
              ],
              ru: [
                { speaker: 'ash', text: 'Ну бывает, чувак. Какие у тебя физические параметры?' },
                { speaker: 'tony', text: '190/125. Я тяжёлый мужик.' },
                { speaker: 'ash', text: 'Тут уже разговор об электровелосипедах, если не хочешь сломать лодыжки.' }
              ]
            },
            reveal: { stat: 'durability', value: 100 }
          },
          {
            id: 'tony_c1_b',
            text: { en: '"Silently agree to build the bike."', ru: '"Молча согласиться собрать байк."' },
            response: {
              en: [
                { speaker: 'ash', text: '...' },
                { speaker: 'tony', text: 'Well? You gonna say something or just stare at me?' },
                { speaker: 'ash', text: '(That was a mistake. I should have asked about his weight first.)' }
              ],
              ru: [
                { speaker: 'ash', text: '...' },
                { speaker: 'tony', text: 'Ну? Будешь что-то говорить или просто пялиться?' },
                { speaker: 'ash', text: '(Это была ошибка. Надо было сначала спросить про вес.)' }
              ]
            },
            reveal: null
          }
        ]
      },
      {
        id: 'tony_c2',
        question: { en: 'What about the bike model he wants?', ru: 'А что насчёт модели велосипеда?' },
        options: [
          {
            id: 'tony_c2_a',
            text: { en: '"Place an order for the Kaigu Ronin V8."', ru: '"Заказать Kaigu Ronin V8."' },
            response: {
              en: [
                { speaker: 'ash', text: 'Sure, let me just...' },
                { speaker: 'tony', text: 'Great!' },
                { speaker: 'ash', text: '(Wait... that bike is tiny. He\'ll destroy it in a week.)' }
              ],
              ru: [
                { speaker: 'ash', text: 'Конечно, дай только...' },
                { speaker: 'tony', text: 'Отлично!' },
                { speaker: 'ash', text: '(Подожди... этот велосипед крошечный. Он его за неделю уничтожит.)' }
              ]
            },
            reveal: null
          },
          {
            id: 'tony_c2_b',
            text: { en: '"Interrupt him! The Kaigu won\'t survive him!"', ru: '"Перебить его! Kaigu его не переживёт!"' },
            response: {
              en: [
                { speaker: 'ash', text: 'MATE NO! That thing is tiny! You\'d look like a circus bear riding a monobike.' },
                { speaker: 'tony', text: 'Aww. It looked much bigger in the pictures. Damn. You do customs?' },
                { speaker: 'ash', text: 'Of course! Anything you can imagine.' }
              ],
              ru: [
                { speaker: 'ash', text: 'ЧУВАК НЕТ! Эта штука крошечная! Ты будешь выглядеть как цирковой мишка на моноцикле.' },
                { speaker: 'tony', text: 'Ой. На картинках выглядело намного больше. Чтоб его. Вы делаете на заказ?' },
                { speaker: 'ash', text: 'Конечно! Всё что можешь представить.' }
              ]
            },
            reveal: { stat: 'speed', value: 40 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: 'tony', text: 'Build something that would be fast, comfortable, electric and not too expensive. Now I gotta leave and wash that jacket. Goddamn old man... Cya tomorrow.' },
        { speaker: 'ash', text: 'See you tomorrow, big guy.' }
      ],
      ru: [
        { speaker: 'tony', text: 'Собери что-то быстрое, комфортное, электрическое и не слишком дорогое. Мне пора помыть куртку. Чёртов дед... До завтра.' },
        { speaker: 'ash', text: 'Увидимся завтра, здоровяк.' }
      ],
      reveal: { stat: 'budget', value: 800 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: 'tony', text: 'Hey there, dog! What\'s up with that bike?' },
          { speaker: 'ash', text: 'Yooo! There it is.' },
          { speaker: 'tony', text: 'Here\'s the money. If I never come back, I\'m either dead or happy. Thanks!' },
          { speaker: 'ash', text: 'You are totally welcome.' }
        ],
        ru: [
          { speaker: 'tony', text: 'Привет, пёс! Что с байком?' },
          { speaker: 'ash', text: 'Йоу! Вот он.' },
          { speaker: 'tony', text: 'Вот деньги. Если я не вернусь — значит либо сдох, либо доволен. Спасибо!' },
          { speaker: 'ash', text: 'Пожалуйста, братан.' }
        ]
      },
      bad: {
        en: [
          { speaker: 'tony', text: 'This looks... flimsy. Are you sure this can handle my weight?' },
          { speaker: 'ash', text: 'Well... it was supposed to...' },
          { speaker: 'tony', text: 'I\'m not paying full price for this death trap.' }
        ],
        ru: [
          { speaker: 'tony', text: 'Это выглядит... хлипко. Ты уверен что это выдержит мой вес?' },
          { speaker: 'ash', text: 'Ну... должно было...' },
          { speaker: 'tony', text: 'Я не буду платить полную цену за эту ловушку смерти.' }
        ]
      }
    }
  },

  dzed: {
    intro: {
      en: [
        { speaker: 'narrator', text: 'An elderly man slowly walks in, leaning on a cane. He looks around the shop with kind, tired eyes.' },
        { speaker: 'dzed', text: 'Good day, young man. I need... how do you say... a bicycle. Like the one I had in 1983.' }
      ],
      ru: [
        { speaker: 'narrator', text: 'Пожилой мужчина медленно заходит, опираясь на трость. Он осматривает магазин добрыми, усталыми глазами.' },
        { speaker: 'dzed', text: 'Добрый день, молодой человек. Мне нужен... как это сказать... велосипед. Такой же как у меня был в 1983-м.' }
      ]
    },
    choices: [
      {
        id: 'dzed_c1',
        question: { en: 'What does Dzed need?', ru: 'Что нужно Деду?' },
        options: [
          {
            id: 'dzed_c1_a',
            text: { en: '"Tell me about your old bike. What was special about it?"', ru: 'Расскажите про ваш старый велосипед. Что в нём было особенного?"' },
            response: {
              en: [
                { speaker: 'dzed', text: 'Ah... it was heavy, yes. But so soft! Like riding on a cloud. And it had that beautiful brown leather seat...' },
                { speaker: 'ash', text: 'He wants comfort above everything. And vintage aesthetics.' }
              ],
              ru: [
                { speaker: 'dzed', text: 'Ах... он был тяжёлый, да. Но такой мягкий! Как езда на облаке. И у него было красивое коричневое кожаное седло...' },
                { speaker: 'ash', text: 'Ему нужен комфорт прежде всего. И винтажная эстетика.' }
              ]
            },
            reveal: { stat: 'comfort', value: 80 }
          },
          {
            id: 'dzed_c1_b',
            text: { en: '"How fast do you need to go?"', ru: '"Как быстро вам нужно ездить?"' },
            response: {
              en: [
                { speaker: 'dzed', text: 'Fast? Ha! At my age, speed is the enemy. I just want to pedal gently to the market and back without my back killing me.' },
                { speaker: 'ash', text: 'Slow and comfortable. Got it.' }
              ],
              ru: [
                { speaker: 'dzed', text: 'Быстро? Ха! В моём возрасте скорость — враг. Я просто хочу мягко педалировать до магазина и обратно, чтобы спина не убивала.' },
                { speaker: 'ash', text: 'Медленно и комфортно. Понял.' }
              ]
            },
            reveal: { stat: 'speed_max', value: 10 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: 'dzed', text: 'I don\'t have much money, I\'m afraid. Pension is small. Maybe... $200? Is that enough for something decent?' },
        { speaker: 'ash', text: 'Don\'t worry, grandpa. We\'ll take care of you.' }
      ],
      ru: [
        { speaker: 'dzed', text: 'Денег, к сожалению, немного. Пенсия маленькая. Может... $200? Этого хватит на что-то приличное?' },
        { speaker: 'ash', text: 'Не переживайте, дедуля. Мы о вас позаботимся.' }
      ],
      reveal: { stat: 'budget', value: 200 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: 'dzed', text: 'Oh my... this is beautiful. It reminds me of my youth. Thank you, son.' },
          { speaker: 'ash', text: 'Ride safe, grandpa. And take the scenic route.' }
        ],
        ru: [
          { speaker: 'dzed', text: 'Боже мой... Это прекрасно. Напоминает мне мою молодость. Спасибо, сынок.' },
          { speaker: 'ash', text: 'Ездите аккуратно, дедуля. И выберите живописный маршрут.' }
        ]
      },
      bad: {
        en: [
          { speaker: 'dzed', text: 'This... this is too fast for me. And so uncomfortable! My back will never forgive me...' },
          { speaker: 'ash', text: 'We missed the mark on this one. Sorry, grandpa.' }
        ],
        ru: [
          { speaker: 'dzed', text: 'Это... это слишком быстро для меня. И так неудобно! Моя спина мне этого не простит...' },
          { speaker: 'ash', text: 'Мы промахнулись на этом. Извините, дедуля.' }
        ]
      }
    }
  },

  vitalya: {
    intro: {
      en: [
        { speaker: 'narrator', text: 'A young guy in a hoodie rolls in on a skateboard. He\'s wearing earbuds and looks like he hasn\'t slept in 3 days.' },
        { speaker: 'vitalya', text: 'Yo. I need the sickest fixie you can build. No brakes. Brakes are for cowards.' }
      ],
      ru: [
        { speaker: 'narrator', text: 'Молодой парень в худи заезжает на скейте. В наушниках, выглядит как будто не спал 3 дня.' },
        { speaker: 'vitalya', text: 'Йо. Мне нужен самый безумный фиксер, который ты можешь собрать. Без тормозов. Тормоза — для трусов.' }
      ]
    },
    choices: [
      {
        id: 'vitalya_c1',
        question: { en: 'What does Vitalya care about?', ru: 'Что важно Витале?' },
        options: [
          {
            id: 'vitalya_c1_a',
            text: { en: '"Speed and style, got it. But are you sure about no brakes?"', ru: '"Скорость и стиль, понял. Но ты уверен насчёт тормозов?"' },
            response: {
              en: [
                { speaker: 'vitalya', text: 'DID I STUTTER? No. Brakes. Brakes are death. We die like men.' },
                { speaker: 'ash', text: 'Alright, alright! No brakes it is. This kid has a death wish.' }
              ],
              ru: [
                { speaker: 'vitalya', text: 'Я ЧТО, ЗАИКАЛСЯЯ? Нет. Тормозов. Тормоза — это смерть. Умрём как мужики.' },
                { speaker: 'ash', text: 'Ладно, ладно! Без тормозов так без тормозов. Этот пацан суицидник.' }
              ]
            },
            reveal: { stat: 'style', value: 80 }
          },
          {
            id: 'vitalya_c1_b',
            text: { en: '"What about comfort? Your back will thank you..."', ru: '"А что насчёт комфорта? Твоя спина скажет спасибо..."' },
            response: {
              en: [
                { speaker: 'vitalya', text: 'Comfort? COMFORT? I\'m not a grandpa! I ride until my legs give out, then I ride some more!' },
                { speaker: 'ash', text: 'Right. Comfort is not in his vocabulary.' }
              ],
              ru: [
                { speaker: 'vitalya', text: 'Комфорт? КОМФОРТ? Я не дедушка! Я катаю пока ноги не отвалятся, а потом ещё קצת!' },
                { speaker: 'ash', text: 'Понятно. Слово "комфорт" не в его словарном запасе.' }
              ]
            },
            reveal: { stat: 'speed', value: 100 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: 'vitalya', text: 'I got about $400 from my last gig. Make it fast, make it sick, make it BRAKELESS. Later!' },
        { speaker: 'ash', text: 'This is going to be either amazing or a hospital visit. Probably both.' }
      ],
      ru: [
        { speaker: 'vitalya', text: 'У меня около $400 с последнего подработка. Сделай быстрым, крутым и БЕЗ ТОРМОЗОВ. Пока!' },
        { speaker: 'ash', text: 'Это будет либо шедевр, либо визит в больницу. Скорее всего и то, и другое.' }
      ],
      reveal: { stat: 'budget', value: 400 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: 'vitalya', text: 'YO THIS IS FIRE! No brakes, pure speed, pure style! I\'m gonna be the king of the streets!' },
          { speaker: 'ash', text: 'Please wear a helmet. Actually, wear two.' }
        ],
        ru: [
          { speaker: 'vitalya', text: 'ЙОУ ЭТО ОГОНЬ! Без тормозов, чистая скорость, чистый стиль! Я буду королём улиц!' },
          { speaker: 'ash', text: 'Пожалуйста, надень шлем. Хотя нет, надень два.' }
        ]
      },
      bad: {
        en: [
          { speaker: 'vitalya', text: 'Dude... are those BRAKES? I said NO BRAKES! And it\'s so slow! I could walk faster than this!' },
          { speaker: 'ash', text: 'Well, at least he\'ll be alive...' }
        ],
        ru: [
          { speaker: 'vitalya', text: 'Чувак... это ЧТО, ТОРМОЗАЯ? Я сказал БЕЗ ТОРМОЗОВ! И он такой медленный! Я пешком быстрее пойду!' },
          { speaker: 'ash', text: 'Ну, по крайней мере он будет жив...' }
        ]
      }
    }
  },

  ewa: {
    intro: {
      en: [
        { speaker: 'narrator', text: 'A tired woman in work clothes walks in. She looks like she just survived a double shift.' },
        { speaker: 'ewa', text: 'Hey. Got anything that... rolls?' },
        { speaker: 'ash', text: 'Hey. You look like you just survived a zombie apocalypse. Or a double shift.' },
        { speaker: 'ewa', text: 'Double shift. At the factory. And then forty minutes of pure hell in a sweaty, packed bus. I need a way to get to work and back. Faster, and for free.' },
        { speaker: 'ash', text: 'Public transit is the best bike salesman.' }
      ],
      ru: [
        { speaker: 'narrator', text: 'Уставшая женщина в рабочей одежде заходит. Выглядит как будто пережила двойную смену.' },
        { speaker: 'ewa', text: 'Привет. Есть что-нибудь что... ездит?' },
        { speaker: 'ash', text: 'Привет. Ты выглядишь как будто пережила зомби-апокалипсис. Или двойную смену.' },
        { speaker: 'ewa', text: 'Двойную смену. На заводе. А потом сорок минут чистого ада в потном забитом автобусе. Мне нужен способ добраться до работы и обратно. Быстрее и бесплатно.' },
        { speaker: 'ash', text: 'Общественный транспорт — лучший продавец велосипедов.' }
      ]
    },
    choices: [
      {
        id: 'eva_c1',
        question: { en: 'How to approach Eva\'s needs?', ru: 'Как подойти к потребностям Евы?' },
        options: [
          {
            id: 'eva_c1_a',
            text: { en: '"Any preferences? Suspension, gears, brakes?"', ru: '"Есть предпочтения? Подвеска, передачи, тормоза?"' },
            response: {
              en: [
                { speaker: 'ewa', text: 'I don\'t give a damn. It just needs to roll and not fall apart too quickly. But I\'m scraping the bottom of the barrel at this point in terms of cash...' }
              ],
              ru: [
                { speaker: 'ewa', text: 'Мне плевать. Лишь бы ехало и не развалилось слишком быстро. Но денег у меня уже на дне...' }
              ]
            },
            reveal: { stat: 'durability', value: 10 }
          },
          {
            id: 'eva_c1_b',
            text: { en: '"Skip details and ask about budget directly."', ru: '"Пропустить детали и сразу спросить про бюджет."' },
            response: {
              en: [
                { speaker: 'ash', text: 'Got it. Budget\'s tight?' },
                { speaker: 'ewa', text: 'I don\'t give a damn. It just needs to roll and not fall apart too quickly. But I\'m scraping the bottom of the barrel...' }
              ],
              ru: [
                { speaker: 'ash', text: 'Понял. Бюджет маленький?' },
                { speaker: 'ewa', text: 'Мне плевать. Лишь бы ехало и не развалилось. Но денег уже на дне...' }
              ]
            },
            reveal: { stat: 'durability', value: 10 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: 'ewa', text: 'I have $130. That\'s literally all I have until next paycheck. Please, help me out.' },
        { speaker: 'ash', text: 'I\'ll see what I can scrape together from the budget bin.' }
      ],
      ru: [
        { speaker: 'ewa', text: 'У меня $130. Это буквально всё что у меня есть до следующей зарплаты. Пожалуйста, помоги.' },
        { speaker: 'ash', text: 'Посмотрю что можно собрать из бюджетного ящика.' }
      ],
      reveal: { stat: 'budget', value: 130 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: 'ewa', text: 'Looks rough. But it has two wheels and pedals. I\'ll take it. Thanks for helping me out.' },
          { speaker: 'ash', text: 'Safe travels. And seriously, go get some sleep!' },
          { speaker: 'ewa', text: 'Hope I will :)' }
        ],
        ru: [
          { speaker: 'ewa', text: 'Выглядит грубо. Но два колеса и педали есть. Беру. Спасибо что помог.' },
          { speaker: 'ash', text: 'Счастливого пути. И серьёзно, выспись!' },
          { speaker: 'ewa', text: 'Надеюсь :)' }
        ]
      },
      bad: {
        en: [
          { speaker: 'ewa', text: 'This costs more than my rent... and it\'s falling apart. I can\'t afford this mistake.' },
          { speaker: 'ash', text: 'We let her down. That one\'s on us.' }
        ],
        ru: [
          { speaker: 'ewa', text: 'Это стоит больше моей аренды... и оно разваливается. Я не могу позволить себе эту ошибку.' },
          { speaker: 'ash', text: 'Мы её подвели. Это на нас.' }
        ]
      }
    }
  },

  syalyanych: {
    intro: {
      en: [
        { speaker: 'narrator', text: 'A burly man in rubber boots and a dirty vest walks in. He smells like fresh soil and diesel.' },
        { speaker: 'syalyanych', text: 'Oy! I need a bike for the village. Something that can handle mud, gravel, and my mother-in-law\'s driveway.' }
      ],
      ru: [
        { speaker: 'narrator', text: 'Крепкий мужик в резиновых сапогах и грязной майке заходит. Пахнет свежей землёй и соляркой.' },
        { speaker: 'syalyanych', text: 'Ой! Мне нужен велосипед для деревни. Чтобы мог пройти грязь, гравий и подъезд к тёще.' }
      ]
    },
    choices: [
      {
        id: 'syalyanych_c1',
        question: { en: 'What does Syalyanych need?', ru: 'Что нужно Селянычу?' },
        options: [
          {
            id: 'syalyanych_c1_a',
            text: { en: '"Mud and gravel? You need serious durability. And fenders — lots of fenders."', ru: '"Грязь и гравий? Нужна серьёзная прочность. И крылья — много крыльев."' },
            response: {
              en: [
                { speaker: 'syalyanych', text: 'Yes! Fenders! Last time I rode without them, I came home looking like a chocolate cake.' },
                { speaker: 'ash', text: 'Mud fenders it is. And something that won\'t break on the first pothole.' }
              ],
              ru: [
                { speaker: 'syalyanych', text: 'Да! Крылья! В прошлый раз без них приехал домой как шоколадный торт.' },
                { speaker: 'ash', text: 'Крылья от грязи — точно. И что-то что не сломается на первой яме.' }
              ]
            },
            reveal: { stat: 'durability', value: 80 }
          },
          {
            id: 'syalyanych_c1_b',
            text: { en: '"How much are you willing to spend?"', ru: '"Сколько готов потратить?"' },
            response: {
              en: [
                { speaker: 'syalyanych', text: 'Not much, friend. Maybe $300? But it better survive a nuclear winter!' },
                { speaker: 'ash', text: '$300 for a tank. Challenge accepted.' }
              ],
              ru: [
                { speaker: 'syalyanych', text: 'Не много, друг. Может $300? Но чтоб пережил ядерную зиму!' },
                { speaker: 'ash', text: '$300 за танк. Вызов принят.' }
              ]
            },
            reveal: { stat: 'budget', value: 300 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: 'syalyanych', text: 'I got $300. And make sure it has those mud thingies on the wheels. My wife will kill me if I come home dirty again.' },
        { speaker: 'ash', text: 'Say no more. Mud fenders are mandatory.' }
      ],
      ru: [
        { speaker: 'syalyanych', text: 'У меня $300. И чтобы на колёсах были эти грязевые штуки. Жена убьёт если я ещё раз приеду грязный.' },
        { speaker: 'ash', text: 'Больше ничего говорить не надо. Крылья обязательны.' }
      ],
      reveal: { stat: 'budget', value: 300 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: 'syalyanych', text: 'Oy, this is beautiful! Look at those fenders! My wife might actually let me keep it in the house!' },
          { speaker: 'ash', text: 'Tell her it\'s art. Expensive, functional art.' }
        ],
        ru: [
          { speaker: 'syalyanych', text: 'Ой, это красиво! Посмотрите на эти крылья! Жена может даже разрешит держать дома!' },
          { speaker: 'ash', text: 'Скажи ей что это искусство. Дорогое, функциональное искусство.' }
        ]
      },
      bad: {
        en: [
          { speaker: 'syalyanych', text: 'Where are the fenders?! And this thing won\'t survive my driveway! Disappointed, friend.' },
          { speaker: 'ash', text: 'We forgot the most important part. The mud monster needs his armor.' }
        ],
        ru: [
          { speaker: 'syalyanych', text: 'Где крылья?! И эта штука не переживёт мой подъезд! Разочарован, друг.' },
          { speaker: 'ash', text: 'Мы забыли самое важное. Грязевому монстру нужна его броня.' }
        ]
      }
    }
  }
};

// ============================================================
// REVIEWS (Yelp-style)
// ============================================================
const REVIEWS = {
  5: {
    en: '★★★★★ — "Absolutely perfect! Best bike shop in town!"',
    ru: '★★★★★ — "Абсолютно идеально! Лучший веломагазин в городе!"'
  },
  4: {
    en: '★★★★☆ — "Pretty good! A few minor things, but overall great work."',
    ru: '★★★★☆ — "Очень хорошо! Пару мелочей, но в целом отличная работа."'
  },
  3: {
    en: '★★★☆☆ — "It\'s okay, I guess. Could be better."',
    ru: '★★★☆☆ — "Нормально, наверное. Могло быть и лучше."'
  },
  2: {
    en: '★★☆☆☆ — "Not what I asked for. Disappointed."',
    ru: '★★☆☆☆ — "Не то что я просил. Разочарован."'
  },
  1: {
    en: '★☆☆☆☆ — "Terrible. Never coming back."',
    ru: '★☆☆☆☆ — "Ужасно. Больше не вернусь."'
  }
};

// ============================================================
// CHARACTER REVIEWS (per-character, from GitHub scripts)
// ============================================================
const CHARACTER_REVIEWS = {
  hanna: {
    '5': {
      en: 'I AM OBSESSED!!! These guys actually know what they\'re doing! They built me a super lightweight aluminum bike with a 1x drivetrain — no more dropped chains, and I literally fly up the hills now! 10/10 highly recommend!',
      ru: 'Я ПРОСТО В ШОКЕ (в хорошем смысле)!!! Ребята реально шарят за байк-фит! Собрали мне легчайший алюминиевый велик на одной звезде спереди — теперь цепь не слетает, в горку залетаю вообще без напряга. 10/10, всем рекомендую!'
    },
    '3': {
      en: 'Cute shop (the dog behind the counter is adorable), but the bike build was... questionable. The frame size is finally right, but it\'s still pretty heavy and shifting gears is a mess. It\'s okay, but I expected more for my budget.',
      ru: 'Магазин с приятной атмосферой (собака за прилавком топ), но байк подобрали странный. Да, размер теперь мой, но он всё равно тяжеловат, и переключать скорости неудобно. Вроде норм, но за такие деньги ожидала большего.'
    },
    '1': {
      en: 'Absolute nightmare! I literally begged the mechanic for a lightweight bike because I carry it up 4 flights of stairs. What did I get? Another 20kg steel monster with useless suspension! My knees hurt worse than before. Avoid this place!!!',
      ru: 'Ужасный сервис! Я четко объяснила механику, что мне тяжело таскать велик на 4 этаж и я езжу ТОЛЬКО по асфальту. В итоге мне продали очередного стального монстра с бесполезными пружинами! Колени болят еще больше. Обходите стороной!!!'
    }
  },
  tony: {
    '5': {
      en: 'AWESOME! Exactly what the doctor ordered. Great shop, great bikes, great mechanical skills. thx!!!!!!!',
      ru: 'збс! чотко! то, что нужно. не могу нарадоваться - все от души валит и не парит мозги. за элитным лакшери экспириенсом - ТОЛЬКО СЮДА!'
    },
    '3': {
      en: 'idk that dog built me smth mid should have bought a kaigu instead.',
      ru: 'Ну такоооооооооооое...чет не совсем срослось, вроде норм, а вроде и не то, что я хотел. хз даже че тут еще сказать'
    },
    '1': {
      en: 'dfq dat bloke doin\'? better shut down',
      ru: 'Собрали мне какой-то каловик, не понял за что столько денег отдал :('
    }
  },
  dzed: {
    '5': {
      en: 'GOD BLESS THIS STORE!!! they helped an old man with a cheap bike in installments... EXACTLY WHAT THE DOCTOR ORDERED FOR MY ARTHRITIS!!! Thank you Ash young man may God be with you!!! A TRUE PROFESSIONAL!!!!!!',
      ru: 'ДАЙ БОГ ЗДОРОВЬЯ!!! отличный магазин!! Пошли навстречу пенсионеру, дали хороший дешовый ровар в рассрочку! Как раз то что ДОКТОР ПРОПИСАЛ (у меня суставы)!!!! Эш сынок спасибо тебе огромное !!!! НАСТОЯЩИЙ ПРОФЕССИОНАЛ !!!!'
    },
    '3': {
      en: 'Not bad... that young man Ash was very polite. But my old bike was much better... this one is a bit heavy for my old knees... thanks anyway...',
      ru: 'ну в целом нормально.. эш вежливый.. старался помогал. Но канешна мой старый велик Был получше.. этот тяжеловат для моих ног... ну ладно спасибо и на этом…'
    },
    '1': {
      en: 'THAT YOUNG PUNKK sold me a nightmare on two wheels!!! I wanted a dirt cheap bike for my pension... but he tricked me into buying this garbage I cant even ride my back hurts!! Do not trust them!!!',
      ru: 'этот... прохвост всучил старому человеку черти что !!! Я просил дешовый и нормальный велик. А впарили какуюто хреновину двухколесную! ездить невозможно спина болит !! не берите у них ничего !!!'
    }
  },
  vitalya: {
    '5': {
      en: 'RAAAAAAAH!!! THIS IS AN ABSOLUTE ROCKET!!! Flying faster than the bullet train! Ash is a wizard! IF YOU WANNA MEET GOD IN 5 SECONDS BUY HERE!!! 10 OUT OF 10!!!',
      ru: 'ААААААА!!! ЭТО ПРОСТО ПУШКА-ГОНКА!!! Лечу быстрее пули, чуть не разложился три раза за пять минут! Смерть на колесах! Пёсель — гений, засыпал мне адреналина прямо в бензобак!!! ВСЕМ РЕКОМЕНДУЮ КТО ХОЧЕТ ЛЕТАТЬ С ВЕТЕРКОМ!!! 10 ИЗ 10!!!'
    },
    '3': {
      en: 'Well, it\'s alright but nothing crazy. It goes fast, but my face didn\'t melt off. I wanted to fly straight into a black hole, but this is just... quick. Good for a warm-up, I guess. Mid.',
      ru: 'Ну кароче норм, но без фанатизма. Едет неплохо, чуть лучше шоссера, но лицо от ветра не слетает. Хотелось бы побыстрее, чтоб прям в вечность улететь, а тут просто быстро. На троечку с плюсом, чисто для разминки пойдет.'
    },
    '1': {
      en: 'WHAT IS THIS GARBAGE?! BRAKES?! I ASKED FOR ADRENALINE, NOT A STROLLER FOR BABIES!!! THIS TRASH IS SO SLOW!!! BS!!!!',
      ru: 'ЧЕ ЗА ... ВЫ МНЕ ПОДСУНУЛИ?! ТОРМОЗА?! Я ПРОСИЛ СМЕРТЬ И АДРЕНАЛИН, А ПОЛУЧИЛ КОЛЯСКУ ДВУХКОЛЕСНУЮ!!! ОНО ВООБЩЕ НЕ ЕДЕТ!!! ПОЛНАЯ ШНЯГА!!!!'
    }
  },
  ewa: {
    '5': {
      en: 'Absolute lifesaver! Saved me so much time and bus fare. The bike is super basic and heavy, but it is built like a tank! Now I get to sleep 30 minutes longer. Ash is a legend!',
      ru: 'Это просто спасение! Сэкономила кучу времени и денег на проезд. Велик максимально простой, суровый, но прёт как танк через все ямы. Теперь сплю на полчаса дольше. Эш — лучший!'
    },
    '3': {
      en: 'Meh. It squeaks, it\'s heavy as hell, but it gets me to the factory and back home. I guess for this price I couldn\'t expect a Rolls-Royce. At least I don\'t have to smell strangers on the bus.',
      ru: 'Ну, такое. Скрипит, тяжеленный как слон, но до завода и домой доезжает. За такие деньги глупо было ждать чего-то нормального? Ну, хотя бы больше не дышу чужим потом в автобусе.'
    },
    '1': {
      en: 'Bike broke down on day three right before my shift. Had to drag this heavy pile of crap all the way to the gate. Worst purchase ever, should\'ve stuck to the stupid bus.',
      ru: 'Велик развалился на третий день прямо перед проходной. Пришлось пешком тащить эту груду металлолома. Худшая покупка в жизни, лучше бы дальше на этом дурацком автобусе ездила...'
    }
  },
  syalyanych: {
    '5': {
      en: 'HOLY MOLY THIS THING IS A BEAST!!! Rode straight into the deep bog yesterday, thought I\'d need a tow truck! But she clawed her way out like a goddamn alligator! Mudguards kept my face clean, and the girls at the local pub went wild! Ash, you\'re the finest mechanic in here, I\'m bringin\' you a sack of my finest taters!!!',
      ru: 'ЭТО Ж ЧИСТЫЙ ТРАКТОР ЁЛКИ ПАЛКИ!!! Вчера заехал в такую жижу, думал всё, трактористов звать надо! А хрен там — гребет как бешеный! Болотники всю грязь держат, лицо чистое, девки у клуба офигевают от кислотной рамы! Эш, ты лучший, дай бог тебе мешок бульбы!!!'
    },
    '3': {
      en: 'Well, she looks wild, alright. Boys at the store loved the neon paint, heh. But my legs are burnin\' from all that pedalin\', worse than after hay harvesting. Couldn\'t catch Billy\'s tractor, but at least he honked at me. It\'s alright, I guess.',
      ru: 'Ну так-то аппарат прикольный... Покрашен дико, пацаны у магазина заценили, гы. Но педали крутить я запарился, ноги гудят как после сенокоса. Трактор я так и не догнал, но Петро мне хотя бы посигналил. Норм, короче.'
    },
    '1': {
      en: 'Absolute piece of shite! Wouldn\'t sell me the electro, and this pedal-thing got stuck in the first swamp! Mud tires are trash, clogged with clay instantly, fenders fell off!',
      ru: 'Полная херня! Электру мне не дал, а этот ваш педальный ровар в первом же болоте завяз! Грязевая резина говно, протектор забился глиной за секунду, болотники отвалились!'
    }
  }
};

// ============================================================
// UI STRINGS (localization)
// ============================================================
const UI_STRINGS = {
  continue: { en: 'Continue', ru: 'Продолжить' },
  newGame: { en: 'New Game', ru: 'Новая игра' },
  loadGame: { en: 'Load Game', ru: 'Загрузить' },
  settings: { en: 'Settings', ru: 'Настройки' },
  aboutUs: { en: 'About Us', ru: 'О нас' },
  resume: { en: 'Resume', ru: 'Продолжить' },
  saveGame: { en: 'Save Game', ru: 'Сохранить' },
  mainMenu: { en: 'Main Menu', ru: 'Главное меню' },
  quit: { en: 'Quit', ru: 'Выход' },
  pause: { en: 'Pause', ru: 'Пауза' },
  deliver: { en: 'ORDER NOW', ru: 'ЗАКАЗАТЬ' },
  back: { en: 'Back', ru: 'Назад' },
  yes: { en: 'Yes', ru: 'Да' },
  no: { en: 'No', ru: 'Нет' },
  areYouSure: { en: 'Are you sure?', ru: 'Вы уверены?' },
  audio: { en: 'Audio', ru: 'Аудио' },
  musicVolume: { en: 'Music Volume', ru: 'Громкость музыки' },
  sfxVolume: { en: 'SFX Volume', ru: 'Громкость звуков' },
  display: { en: 'Display', ru: 'Дисплей' },
  windowMode: { en: 'Window Mode', ru: 'Режим окна' },
  fullscreen: { en: 'Fullscreen', ru: 'Полный экран' },
  accessibility: { en: 'Accessibility', ru: 'Доступность' },
  textSpeed: { en: 'Text Speed', ru: 'Скорость текста' },
  balance: { en: 'Balance', ru: 'Баланс' },
  totalCost: { en: 'Total Cost', ru: 'Общая стоимость' },
  stats: { en: 'Stats', ru: 'Характеристики' },
  speed: { en: 'Speed', ru: 'Скорость' },
  comfort: { en: 'Comfort', ru: 'Комфорт' },
  durability: { en: 'Durability', ru: 'Прочность' },
  style: { en: 'Style', ru: 'Стиль' },
  clientNote: { en: 'Client Note', ru: 'Заметка о клиенте' },
  budget: { en: 'Budget', ru: 'Бюджет' },
  day: { en: 'Day', ru: 'День' },
  bank: { en: 'Bank', ru: 'Банк' },
  rating: { en: 'Rating', ru: 'Рейтинг' },
  playtime: { en: 'Playtime', ru: 'Время игры' },
  lastClient: { en: 'Last Client', ru: 'Последний клиент' },
  load: { en: 'LOAD', ru: 'ЗАГРУЗИТЬ' },
  file: { en: 'FILE', ru: 'ФАЙЛ' },
  empty: { en: 'Empty', ru: 'Пусто' },
  yelpReview: { en: 'Yelp Review', ru: 'Отзыв' },
  nextClient: { en: 'Next Client →', ru: 'Следующий клиент →' },
  endOfDay: { en: 'End of Day', ru: 'Конец дня' },
  workshopReady: { en: 'All slots filled! Ready to deliver?', ru: 'Все слоты заполнены! Готовы к доставке?' },
  selectPart: { en: 'Select a part', ru: 'Выберите деталь' },
  clickToEquip: { en: 'Click to equip', ru: 'Нажмите чтобы установить' },
  clickToRemove: { en: 'Click to remove', ru: 'Нажмите чтобы снять' },
  target: { en: 'Target', ru: 'Цель' },
  result: { en: 'Result', ru: 'Результат' },
  thanksForPlaying: { en: 'Thanks for playing Kadence!', ru: 'Спасибо что играли в Kadence!' },
  finalScore: { en: 'Final Score', ru: 'Итоговый счёт' },
  averageRating: { en: 'Average Rating', ru: 'Средний рейтинг' },
  totalEarnings: { en: 'Total Earnings', ru: 'Общий заработок' },
  clientsServed: { en: 'Clients Served', ru: 'Клиентов обслужено' },
  replay: { en: 'Play Again', ru: 'Играть снова' },
  close: { en: 'Close', ru: 'Закрыть' },
  default: { en: 'Default', ru: 'По умолчанию' }
};
