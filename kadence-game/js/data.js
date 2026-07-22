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
      id: 'heavy_steel_mtb', name: 'Heavy Steel MTB', nameRu: 'Тяжелая стальная рама MTB',
      desc: { en: 'Cheap, indestructible, heavy as a tank.', ru: 'Дешёвая, неубиваемая, тяжёлая как танк.' },
      category: CATEGORIES.FRAME, tier: 'budget',
      cost: 50, speed: -20, comfort: -10, durability: 40, style: -10,
      tags: ['Indestructible', 'Heavyweight'],
      image: 'assets/products/frames/heavy_steel_mtb.jpeg'
    },
    {
      id: 'alu_city_hybrid', name: 'Alu City Hybrid', nameRu: 'Алюминиевая городская гибридная рама',
      desc: { en: 'Lightweight, great for commuting. Very practical.', ru: 'Лёгкая, отлична для города. Очень практичная.' },
      category: CATEGORIES.FRAME, tier: 'mid',
      cost: 120, speed: 20, comfort: 20, durability: 10, style: 10,
      tags: ['Fast Rolling', 'Ergonomic'],
      image: 'assets/products/frames/alu_city_hybrid.jpeg'
    },
    {
      id: 'track_fixie_frame', name: 'Track/Fixie Frame', nameRu: 'Трековая рама для фикса',
      desc: { en: 'Aggressive geometry. Fast, stiff, hurts your back.', ru: 'Агрессивная геометрия. Быстрая, жёсткая, ломает спину.' },
      category: CATEGORIES.FRAME, tier: 'mid',
      cost: 150, speed: 40, comfort: -30, durability: 0, style: 40,
      tags: ['Lightweight', 'Premium'],
      image: 'assets/products/frames/track_fixie_frame.jpeg'
    },
    {
      id: 'retro_cruiser', name: 'Retro Cruiser', nameRu: 'Рама Ретро-Круизер',
      desc: { en: 'Step-through frame. Upright posture for grandpas.', ru: 'Рама с низкой посадкой. Прямая осанка для дедушек.' },
      category: CATEGORIES.FRAME, tier: 'budget',
      cost: 90, speed: -10, comfort: 50, durability: 20, style: 30,
      tags: ['Cloud Nine', 'Vintage Vibe'],
      image: 'assets/products/frames/retro_cruiser.jpeg'
    },
    {
      id: 'e_fatbike_alu', name: 'E-Fatbike Alu', nameRu: 'Алюминиевая рама электро-фэтбайка',
      desc: { en: 'Reinforced for 150kg+. Basically a tractor frame.', ru: 'Усилена для 150кг+. По сути тракторная рама.' },
      category: CATEGORIES.FRAME, tier: 'premium',
      cost: 200, speed: 0, comfort: 10, durability: 50, style: 20,
      tags: ['Indestructible', 'Vintage Vibe'],
      image: 'assets/products/frames/efatbike_alu.jpeg'
    },
    {
      id: 'cro_mo_touring', name: 'Cro-Mo Touring', nameRu: 'Хром-молибденовая туринговая рама',
      desc: { en: 'Steel is real. Heavy, but rides like a Cadillac.', ru: 'Сталь — это реально. Тяжёлая, но едет как Кадиллак.' },
      category: CATEGORIES.FRAME, tier: 'premium',
      cost: 180, speed: 10, comfort: 40, durability: 50, style: 30,
      tags: ['Indestructible', 'Cloud Nine'],
      image: 'assets/products/frames/cro_mo_touring.jpeg'
    },
    {
      id: 'carbon_aero_frame', name: 'Carbon Aero Frame', nameRu: 'Карбоновая аэродинамическая рама',
      desc: { en: 'Stiff, ultra-light, extremely expensive. Don\'t crash.', ru: 'Жёсткая, ультралёгкая, очень дорогая. Не падайте.' },
      category: CATEGORIES.FRAME, tier: 'luxury',
      cost: 400, speed: 60, comfort: -20, durability: -30, style: 50,
      tags: ['Lightweight', 'Premium'],
      image: 'assets/products/frames/crabon_aero_frame.jpeg'
    },
    {
      id: 'vintage_restored', name: 'Vintage Restored', nameRu: 'Винтажная отреставрированная рама',
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
      id: 'vtwoo_3x7', name: 'V-Twoo 3x7', nameRu: 'Бюджетная трансмиссия V-Twoo 3x7',
      desc: { en: 'It shifts... sometimes. Makes terrible plastic noises.', ru: 'Переключается... иногда. Издаёт жуткие пластиковые звуки.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'budget',
      cost: 20, speed: -10, comfort: -20, durability: -10, style: -20,
      tags: ['Aggressive', 'Ugly Duckling'],
      image: 'assets/products/drivetrain/V_TWOO.png'
    },
    {
      id: 'shamano_clara_2x9', name: 'Shamano Clara 2x9', nameRu: 'Трансмиссия Shamano Clara 2x9',
      desc: { en: 'The ultimate "just okay" drivetrain. Works fine.', ru: 'Абсредненько. Работает нормально.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'mid',
      cost: 50, speed: 10, comfort: 10, durability: 10, style: 0,
      tags: ['Fast Rolling', 'Reliable'],
      image: 'assets/products/drivetrain/shamano_clara.png'
    },
    {
      id: 'shamano_core_1x10', name: 'Shamano CORE 1x10', nameRu: 'Трансмиссия Shamano CORE 1x10',
      desc: { en: 'Modern, smooth, reliable. No front derailleur fuss.', ru: 'Современная, плавная, надёжная. Без переднего переключателя.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'mid',
      cost: 90, speed: 20, comfort: 30, durability: 30, style: 10,
      tags: ['Cloud Nine', 'Indestructible'],
      image: 'assets/products/drivetrain/shamano_core.png'
    },
    {
      id: 'fixed_gear_cog', name: 'Fixed Gear Cog', nameRu: 'Ког фиксированной передачи',
      desc: { en: 'No freewheel. You stop pedaling, you die.', ru: 'Нет свободного хода. Остановил педали — умер.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'budget',
      cost: 30, speed: 30, comfort: -40, durability: 10, style: 40,
      tags: ['Premium', 'Aggressive'],
      image: 'assets/products/drivetrain/fixed_gear_cog.jpeg'
    },
    {
      id: 'hexa_3speed_hub', name: 'Hexa 3-Speed Hub', nameRu: 'Планетарная втулка Hexa 3-Speed',
      desc: { en: 'Internal gears. Zero maintenance, super clean look.', ru: 'Внутренние передачи. Ноль обслуживания, суперчистый вид.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'mid',
      cost: 80, speed: -10, comfort: 40, durability: 40, style: 20,
      tags: ['Cloud Nine', 'Indestructible'],
      image: 'assets/products/drivetrain/hexa_3_speed_hub.jpeg'
    },
    {
      id: 'carbon_belt_drive', name: 'Carbon Belt Drive', nameRu: 'Ременный привод Carbon Belt Drive',
      desc: { en: 'No chain, no grease, total silence. A mechanic\'s dream.', ru: 'Нет цепи, нет смазки, тишина. Мечта механика.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'premium',
      cost: 150, speed: 20, comfort: 30, durability: 50, style: 40,
      tags: ['Indestructible', 'Premium'],
      image: 'assets/products/drivetrain/carbon_belt_drive.jpeg'
    },
    {
      id: 'bram_eshift_2x12', name: 'BRAM e-Shift 2x12', nameRu: 'Электронная трансмиссия BRAM e-Shift 2x12',
      desc: { en: 'Bzz-bzz. Shifts electronically. Costs a kidney.', ru: 'Бзз-бзз. Переключается электронно. Стоит как почка.' },
      category: CATEGORIES.DRIVETRAIN, tier: 'luxury',
      cost: 300, speed: 50, comfort: 20, durability: 0, style: 50,
      tags: ['Lightweight', 'Premium'],
      image: 'assets/products/drivetrain/bram_eshift.jpeg'
    },
    {
      id: 'gfang_750w_motor', name: 'G-Fang 750W Motor', nameRu: 'Электромотор G-Fang 750Вт',
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
      id: 'brakeless', name: 'Brakeless (None)', nameRu: 'Без тормозов',
      desc: { en: 'Brakes are death. We die like men.', ru: 'Тормоза — это смерть. Умрём как мужики.' },
      category: CATEGORIES.BRAKES, tier: 'free',
      cost: 0, speed: 10, comfort: -50, durability: -50, style: 50,
      tags: ['Aggressive', 'Fragile'],
      image: 'assets/products/brakes/brakeless.jpeg'
    },
    {
      id: 'cheap_vbrakes', name: 'Cheap V-Brakes', nameRu: 'Бюджетные ободные тормоза V-Brakes',
      desc: { en: 'Screams in the rain. Budget friendly.', ru: 'Визжит в дождь. Бюджетный вариант.' },
      category: CATEGORIES.BRAKES, tier: 'budget',
      cost: 15, speed: 0, comfort: -10, durability: -10, style: -10,
      tags: [],
      image: 'assets/products/brakes/cheap_v_breaks.jpeg'
    },
    {
      id: 'coaster_brake', name: 'Coaster Brake', nameRu: 'Ножной педальный тормоз',
      desc: { en: 'Pedal backward to stop. Classic grandpa tech.', ru: 'Крути педали назад чтобы остановиться. Классика дедушки.' },
      category: CATEGORIES.BRAKES, tier: 'budget',
      cost: 25, speed: -10, comfort: 20, durability: 30, style: 10,
      tags: ['Indestructible', 'Ergonomic'],
      image: 'assets/products/brakes/coaster_brake.jpeg'
    },
    {
      id: 'mech_disc_160', name: 'Mech Disc (160mm)', nameRu: 'Механические дисковые тормоза (160мм)',
      desc: { en: 'Good ol\' mechanical discs. Balanced stopping.', ru: 'Хорошие старые механические диски. Сбалансированное торможение.' },
      category: CATEGORIES.BRAKES, tier: 'mid',
      cost: 40, speed: 0, comfort: 10, durability: 20, style: 0,
      tags: ['Reliable', 'Ergonomic'],
      image: 'assets/products/brakes/mech_disc.jpeg'
    },
    {
      id: 'pro_caliper', name: 'Pro Caliper Brakes', nameRu: 'Спортивные клещевые тормоза Pro Caliper',
      desc: { en: 'Lightweight, aero. For those who shave their legs.', ru: 'Лёгкие, аэро. Для тех, кто бреет ноги.' },
      category: CATEGORIES.BRAKES, tier: 'mid',
      cost: 80, speed: 20, comfort: 0, durability: 0, style: 30,
      tags: ['Premium', 'Fast Rolling'],
      image: 'assets/products/brakes/pro_caliper_brakes.jpeg'
    },
    {
      id: 'hydro_disc_203', name: 'Hydro Disc (203mm)', nameRu: 'Гидравлические дисковые тормоза (203мм)',
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
      id: 'basic_knobby_26', name: '26" Basic Knobby', nameRu: '26" Базовые зубастые покрышки',
      desc: { en: 'Standard cheap mountain bike tires.', ru: 'Стандартные дешёвые горные покрышки.' },
      category: CATEGORIES.WHEELS, tier: 'budget',
      cost: 30, speed: -10, comfort: 10, durability: 10, style: -10,
      tags: ['Reliable'],
      image: 'assets/products/wheels/26_basic_knobby.jpeg'
    },
    {
      id: 'retro_whitewall', name: 'Retro Whitewall', nameRu: 'Ретро-покрышки с белой боковиной (Whitewall)',
      desc: { en: 'Brown sidewalls. Makes any bike look instantly expensive.', ru: 'Коричневые боковины. Любой байк сразу выглядит дороже.' },
      category: CATEGORIES.WHEELS, tier: 'budget',
      cost: 45, speed: 10, comfort: 10, durability: 0, style: 40,
      tags: ['Premium', 'Fast Rolling'],
      image: 'assets/products/wheels/retro_whitewall.jpeg'
    },
    {
      id: 'antipuncture_city', name: 'Anti-Puncture City', nameRu: 'Антипрокольные городские покрышки',
      desc: { en: 'Heavy, but you can ride over broken glass safely.', ru: 'Тяжёлые, но по битому стеклу можно ездить спокойно.' },
      category: CATEGORIES.WHEELS, tier: 'mid',
      cost: 50, speed: -20, comfort: 10, durability: 50, style: -10,
      tags: ['Indestructible', 'Heavyweight'],
      image: 'assets/products/wheels/anti_puncture_city.png'
    },
    {
      id: 'skinny_slicks_28', name: '28" Skinny Slicks', nameRu: '28" Узкие слики',
      desc: { en: 'Fast on asphalt, terrifying on sand.', ru: 'Быстрые на асфальте, ужасные на песке.' },
      category: CATEGORIES.WHEELS, tier: 'mid',
      cost: 60, speed: 40, comfort: -20, durability: -10, style: 20,
      tags: ['Lightweight', 'Aggressive'],
      image: 'assets/products/wheels/28_skinny_slicks.jpeg'
    },
    {
      id: 'gravel_700c', name: '700c Gravel Tires', nameRu: '700c Гравийные покрышки',
      desc: { en: 'The golden middle. Eats bumps, keeps rolling.', ru: 'Золотая середина. Ест неровности, продолжает катить.' },
      category: CATEGORIES.WHEELS, tier: 'mid',
      cost: 70, speed: 20, comfort: 20, durability: 20, style: 20,
      tags: ['Fast Rolling', 'Ergonomic'],
      image: 'assets/products/wheels/700c_gravel_tires.jpeg'
    },
    {
      id: 'fat_mud_26x4', name: '26x4.0" Fat Mud', nameRu: '26x4.0" Широкие грязевые покрышки',
      desc: { en: 'Monster truck tires. Sand doesn\'t stand a chance.', ru: 'Покрышки монстр-трака. Песок не имеет шансов.' },
      category: CATEGORIES.WHEELS, tier: 'premium',
      cost: 90, speed: -30, comfort: 30, durability: 50, style: 30,
      tags: ['Indestructible', 'Heavyweight'],
      image: 'assets/products/wheels/26_4_fat_mud.png'
    },
    {
      id: 'deep_carbon_rims', name: 'Deep Carbon Rims', nameRu: 'Высокопрофильные карбоновые обода',
      desc: { en: 'Makes that cool "whoosh" sound. Crosswinds hurt.', ru: 'Издает крутое "вжжж". Боковой вредит.' },
      category: CATEGORIES.WHEELS, tier: 'luxury',
      cost: 200, speed: 50, comfort: -20, durability: -20, style: 50,
      tags: ['Lightweight', 'Premium']
    }
  ],

  // --- SADDLES & EXTRAS ---
  saddles: [
    {
      id: 'plastic_stock', name: 'Plastic Stock Saddle', nameRu: 'Пластиковое стоковое седло',
      desc: { en: 'Feels like sitting on a literal brick.', ru: 'Ощущение как от сидения на кирпиче.' },
      category: CATEGORIES.SADDLE, tier: 'budget',
      cost: 10, speed: 0, comfort: -40, durability: 0, style: -20,
      tags: ['Aggressive', 'Ugly Duckling'],
      image: 'assets/products/saddles/plastic_stock_saddle.jpeg'
    },
    {
      id: 'loud_clown_horn', name: 'Loud Clown Horn', nameRu: 'Громкий клоунский клаксон',
      desc: { en: 'HONK! Annoying, but effectively prevents accidents.', ru: 'ГАМК! Раздражает, но эффективно предотвращает аварии.' },
      category: CATEGORIES.SADDLE, tier: 'budget',
      cost: 5, speed: 0, comfort: 10, durability: 10, style: -30,
      tags: ['Ugly Duckling', 'Ergonomic'],
      image: 'assets/products/saddles/loud_clown_horn.jpeg'
    },
    {
      id: 'front_basket', name: 'Front Basket', nameRu: 'Передняя корзина',
      desc: { en: 'Cute, practical, ruins aerodynamics completely.', ru: 'Милая, практичная, полностью убивает аэродинамику.' },
      category: CATEGORIES.SADDLE, tier: 'budget',
      cost: 20, speed: -20, comfort: 30, durability: 10, style: 20,
      tags: ['Cloud Nine', 'Heavyweight'],
      image: 'assets/products/saddles/front_basket.jpeg'
    },
    {
      id: 'full_mud_fenders', name: 'Full Mud Fenders', nameRu: 'Полноразмерные грязезащитные крылья',
      desc: { en: 'Keeps the dirt and manure off your face.', ru: 'Защищает от грязи и навоза на лице.' },
      category: CATEGORIES.SADDLE, tier: 'budget',
      cost: 25, speed: -10, comfort: 20, durability: 10, style: -20,
      tags: ['Ergonomic', 'Ugly Duckling'],
      image: 'assets/products/saddles/full_mud_fenders.png'
    },
    {
      id: 'sofa_spring_saddle', name: 'Sofa Spring Saddle', nameRu: 'Мягкое подпружиненное седло-диван',
      desc: { en: 'Huge, soft, heavy. Grandpa\'s absolute favorite.', ru: 'Огромное, мягкое, тяжёлое. Абсолютный фаворит дедушки.' },
      category: CATEGORIES.SADDLE, tier: 'budget',
      cost: 35, speed: -20, comfort: 50, durability: 20, style: -10,
      tags: ['Cloud Nine', 'Heavyweight'],
      image: 'assets/products/saddles/sofa_spring_saddle.jpeg'
    },
    {
      id: 'aero_tt_bars', name: 'Aero TT Bars', nameRu: 'Аэродинамический лежак (Aero TT)',
      desc: { en: 'Look like a praying mantis. Go fast. Hate your back.', ru: 'Выглядишь как богомол. Летишь ненавидишь свою спину.' },
      category: CATEGORIES.SADDLE, tier: 'mid',
      cost: 40, speed: 40, comfort: -40, durability: -10, style: 10,
      tags: ['Lightweight', 'Aggressive'],
      image: 'assets/products/saddles/aero_tt_bars.png'
    },
    {
      id: 'aero_sport_saddle', name: 'Aero Sport Saddle', nameRu: 'Спортивное узкое седло',
      desc: { en: 'Lightweight, looks pro, slightly numb after 10km.', ru: 'Лёгкое, выглядит про, немного немеет после 10км.' },
      category: CATEGORIES.SADDLE, tier: 'mid',
      cost: 50, speed: 20, comfort: -10, durability: 10, style: 30,
      tags: ['Premium', 'Fast Rolling'],
      image: 'assets/products/saddles/aero_sport_saddle.jpeg'
    },
    {
      id: 'clipless_pedals', name: 'Clipless Pedals', nameRu: 'Контактные педали',
      desc: { en: 'Shoes lock in. Maximum pedaling efficiency.', ru: 'Обувь фиксируется. Максимальная эффективность педалирования.' },
      category: CATEGORIES.SADDLE, tier: 'mid',
      cost: 60, speed: 30, comfort: -20, durability: 0, style: 30,
      tags: ['Lightweight', 'Premium'],
      image: 'assets/products/saddles/clipless_pedals.jpeg'
    },
    {
      id: 'roots_heritage_leather', name: 'Roots Heritage Leather', nameRu: 'Кожаное седло Roots Heritage',
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
        { speaker: "narrator", text: "The bell rings. Hanna walks in, looking completely defeated, holding a notepad." },
        { speaker: "hanna", text: "Hi... Are you the mechanic?" },
        { speaker: "ash", text: "That's what the sign on the door says. Welcome to Kadence. Rough day?" },
        { speaker: "hanna", text: "Rough week. I just bought a bike off the local marketplace. I wanted to start commuting to work, but it's a disaster. Every time I turn, my toe hits the front wheel! And it's so heavy I can barely carry it up to my apartment." },
        { speaker: "ash", text: "Toe overlap and a heavy frame. Classic." }
      ],
      ru: [
        { speaker: 'narrator', text: 'Звенит дверной колокольчик. Заходит Ханна, выглядит абсолютно измученной, в руках блокнот.' },
        { speaker: 'hanna', text: 'Привет... Вы механик?' },
        { speaker: 'ash', text: 'Так написано на двери. Добро пожаловать в Kadence. Тяжелый день?' },
        { speaker: 'hanna', text: 'Тяжелая неделя. Я тут купила велик с рук на барахолке. Хотела ездить на работу, но это просто катастрофа. Каждый раз, когда я поворачиваю руль, колесо цепляет мой кроссовок! А еще он настолько тяжелый, что я еле затаскиваю его на свой этаж.' },
        { speaker: 'ash', text: 'Цепляет носок ботинка... Классический оверлап. И рама весит тонну. Дайте угадаю, вы купили дешевый стальной горник, который вам велик на три размера.' }
      ]
    },
    choices: [
      {
        id: 'hanna_c1',
        question: { en: "How to fix her bike problem?", ru: "Как решить проблему с её велосипедом?" },
        options: [
          {
            id: 'hanna_c1_a',
            text: { en: "Sounds like you bought a steel mountain bike. We need to switch you to a lightweight aluminum frame.", ru: '"Звучит так, будто вы купили стальной горник. Вам нужно переходить на легкую алюминиевую раму".' },
            response: {
              en: [
                { speaker: "hanna", text: "Steel? I didn't even check the specs, I just bought it because it was matte black! But yes, a lighter frame sounds amazing." },
                { speaker: "ash", text: "Rule number one: never buy a bike just because it looks cool." }
              ],
              ru: [
                { speaker: 'hanna', text: 'Сталь? Я даже не читала характеристики, просто купила, потому что он был матово-черный! Но да, легкая рама — это звучит как мечта.' },
                { speaker: 'ash', text: 'Правило номер один: никогда не покупай велик только потому, что он красивый. Нам точно нужен алюминий.' }
              ]
            },
            reveal: { stat: 'speed', value: 40 }
          },
          {
            id: 'hanna_c1_b',
            text: { en: "Toe overlap? How tall are you? The frame size is probably completely wrong.", ru: '"Цепляете колесо? А какой у вас рост? Скорее всего, вам продали раму совершенно чужого размера".' },
            response: {
              en: [
                { speaker: "hanna", text: "I'm 158 cm. The seller told me 'one size fits all'! Was he lying?" },
                { speaker: "ash", text: "'One size fits all' is the biggest lie in the cycling industry." }
              ],
              ru: [
                { speaker: 'hanna', text: 'Мой рост 158 см. А продавец сказал мне, что этот велик "универсальный, подходит всем"! Он мне врал?' },
                { speaker: 'ash', text: '"Подходит всем" — это самая наглая ложь в велоиндустрии. Вам срочно нужна рама размера S или XS.' }
              ]
            },
            reveal: { stat: 'speed', value: 40 }
          }
        ]
      },
      {
        id: 'hanna_c2',
        question: { en: "What about her drivetrain issues?", ru: "А что насчёт проблем с амортизацией и переключениями?" },
        options: [
          {
            id: 'hanna_c2_a',
            text: { en: "You don't need suspension for city commuting. A rigid fork will save your energy.", ru: '"Вам не нужны амортизаторы для езды по городу. Жесткая вилка сэкономит вашу энергию".' },
            response: {
              en: [
                { speaker: "hanna", text: "A rigid fork? Won't that be bumpy? Honestly, I don't care, as long as it helps me actually get up the hill without dying." },
                { speaker: "ash", text: "Smart choice. Fake suspension on cheap bikes just steals your pedaling power." }
              ],
              ru: [
                { speaker: 'hanna', text: 'Жесткая вилка? А трясти не будет? Хотя, честно говоря, мне уже плевать, лишь бы я могла заехать в эту проклятую горку и не умереть.' },
                { speaker: 'ash', text: 'Мудрое решение. Фейковые амортизаторы на дешевых байках просто съедают вашу энергию при педалировании.' }
              ]
            },
            reveal: { stat: 'comfort', value: 30 }
          },
          {
            id: 'hanna_c2_b',
            text: { en: "You probably have too many gears. Let's simplify your drivetrain.", ru: '"Скорее всего, у вас слишком много передач. Давайте поставим простую и надежную трансмиссию".' },
            response: {
              en: [
                { speaker: "hanna", text: "Yes! My current bike has like 21 gears, and the chain keeps falling off when I switch the left lever. It's a nightmare." },
                { speaker: "ash", text: "A simple 1x drivetrain is what she needs. No front derailleur, no dropped chains." }
              ],
              ru: [
                { speaker: 'hanna', text: 'Да! На моем велике что-то около 21 скорости, и цепь постоянно слетает, когда я щелкаю левым переключателем. Это кошмар.' },
                { speaker: 'ash', text: 'Простая система 1x (одна звезда спереди) — это то, что доктор прописал. Никакого переднего переключателя, никаких слетевших цепей.' }
              ]
            },
            reveal: { stat: 'comfort', value: 30 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: "hanna", text: "So... can you build me something light, simple, and actually my size? My budget is pretty tight, around $350 max." },
        { speaker: "ash", text: "Leave it to us. You won't be fighting your bike anymore." }
      ],
      ru: [
        { speaker: 'hanna', text: 'В общем... вы сможете собрать мне что-то легкое, простое и моего размера? Мой бюджет сильно ограничен, максимум 350 баксов.' },
        { speaker: 'ash', text: 'Предоставьте это нам. Вы больше не будете воевать со своим велосипедом.' }
      ],
      reveal: { stat: 'budget', value: 350 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: "hanna", text: "Is it ready? Tell me it doesn't weigh 20 kilos!" },
          { speaker: "ash", text: "Here. Try lifting it." },
          { speaker: "hanna", text: "Oh wow... It's so light! And the gears look so simple to use! Thank you so much, I can actually look forward to my commute now!" },
          { speaker: "ash", text: "Another pair of knees saved. We're basically doctors, but with wrenches." }
        ],
        ru: [
          { speaker: 'hanna', text: 'Готово? Скажите мне, что он не весит 20 килограмм!' },
          { speaker: 'ash', text: 'Держи. Попробуй поднять.' },
          { speaker: 'hanna', text: 'Ого... Он такой легкий! И переключать скорости теперь так просто! Спасибо вам огромное, теперь я реально жду завтрашней поездки на работу!' },
          { speaker: 'ash', text: 'Еще одна пара спасенных коленей. Мы тут по сути врачи, просто с гаечными ключами.' }
        ]
      },
      bad: {
        en: [
          { speaker: "hanna", text: "Wait... this is just as heavy as my old one! And why does it have suspension? I told you I just ride on asphalt!" },
          { speaker: "ash", text: "We just sold a tractor to someone who needed a scooter. Not our best work." }
        ],
        ru: [
          { speaker: 'hanna', text: 'Погодите... он такой же тяжелый, как мой старый! И зачем тут амортизаторы? Я же говорила, что езжу только по асфальту! Я не думаю, что могу позволить себе тратить деньги на это...' },
          { speaker: 'ash', text: 'Мы упустили суть. Продали тяжеленный трактор тому, кому нужен легкий самокат.' }
        ]
      }
    }
  },

  tony: {
    intro: {
      en: [
        { speaker: "tony", text: "Meh, screw this! I was rushing home and there was that old man in his stupid brown jacket and that damn cane! There was no space to overtake him properly and I was given a choice: either I go offroad through that grass on the left, or I go to the right through a sand pit." },
        { speaker: "tony", text: "It looked really tiny and I thought it would not make any difference... I could have just waited but my ego pushed me to increase speed and go through sand. As you can clearly see, it did not end well." }
      ],
      ru: [
        { speaker: 'tony', text: 'Ля, да пошло оно все! Я летел домой и там по дорожке дед шел хромающий в своей всратой коричневой курточке и с тростью. Он все место занял и я не мог его объехать как-нибудь нормально. Было два варианта: налево на траву или направо в песочек.' },
        { speaker: 'tony', text: 'Его было визуально немного и я подумал пофиг, проеду... Рационально я думал, что можно просто подождать, пока он пройдет, но что-то заставило меня втопить через песок. В общем, как видишь, закончилось это так себе. И теперь мне, дебилу, нужен какой-нибудь велик, на котором я бы смог либо переехать этого деда, либо проехать через что угодно, включая песок.' }
      ]
    },
    choices: [
      {
        id: 'tony_c1',
        question: { en: "How to approach Tony's request?", ru: 'Как подойти к расспросу Тони?' },
        options: [
          {
            id: 'tony_c1_a',
            text: { en: "What are your physical parameters?", ru: 'Узнать его габариты, чтобы понять масштаб разрушений.' },
            response: {
              en: [
                { speaker: "ash", text: "Well, shit happens, mate. What are your physical parameters?" },
                { speaker: "tony", text: "190/125. I'm a heavy ass man." },
                { speaker: "ash", text: "We're talking e-bikes at this point unless you want to break your ankles." }
              ],
              ru: [
                { speaker: 'ash', text: 'Охх, блин. Ну, бывает. Ерунда случается. Какие у тебя физические параметры? Типа, рост и вес.' },
                { speaker: 'tony', text: '190/125, я конкретный такой кабанчик.' },
                { speaker: 'ash', text: 'Заметно. Тут нужен крепкий электробайк, если ты не хочешь себе колени поломать.' }
              ]
            },
            reveal: { stat: 'durability', value: 100 }
          },
          {
            id: 'tony_c1_b',
            text: { en: "Silently agree to build the bike.", ru: 'Молча согласиться собрать байк.' },
            response: {
              en: [
                { speaker: "ash", text: "..." },
                { speaker: "tony", text: "Well? You gonna say something or just stare at me?" },
                { speaker: "ash", text: "(That was a mistake. I should have asked about his weight first.)" }
              ],
              ru: [
                { speaker: 'ash', text: '...' },
                { speaker: 'tony', text: 'Ну? Будешь что-то говорить или просто пялиться на меня?' },
                { speaker: 'ash', text: '(Это была ошибка. Надо было сначала спросить про его габариты.)' }
              ]
            },
            reveal: null
          }
        ]
      },
      {
        id: 'tony_c2',
        question: { en: "What about the bike model he wants?", ru: 'А что насчёт модели велосипеда?' },
        options: [
          {
            id: 'tony_c2_a',
            text: { en: "Place an order for the Kaigu Ronin V8.", ru: 'Оформить заказ на Kaigu Ronin V8.' },
            response: {
              en: [
                { speaker: "ash", text: "Sure, let me just..." },
                { speaker: "tony", text: "Great!" },
                { speaker: "ash", text: "(Wait... that bike is tiny. He'll destroy it in a week.)" }
              ],
              ru: [
                { speaker: 'ash', text: 'Конечно, давай-ка я оформлю...' },
                { speaker: 'tony', text: 'Отлично!' },
                { speaker: 'ash', text: '(Подожди... этот велосипед крошечный. Он же его под своим весом за неделю уничтожит.)' }
              ]
            },
            reveal: null
          },
          {
            id: 'tony_c2_b',
            text: { en: "Interrupt him! The Kaigu won't survive him!", ru: 'Жёстко перебить его! Kaigu его не выдержит!' },
            response: {
              en: [
                { speaker: "ash", text: "MATE NO! That thing is tiny! You'd look like a circus bear riding a monobike." },
                { speaker: "tony", text: "Aww. It looked much bigger in the pictures. Damn. You do customs?" },
                { speaker: "ash", text: "Of course! Anything you can imagine." }
              ],
              ru: [
                { speaker: 'ash', text: 'ЧУВАК, НЕТ! Эта штука просто крохотная. Вот, посмотри на улицу, стоит в углу чей-то. Если ты на нее сядешь, тебя с цирковым медведем на моноколесе путать будут.' },
                { speaker: 'tony', text: 'Блин. На фотках в интернете заметно больше выглядел. Задний аморт выглядит вообще ненадежно. А кастом слабо собрать?' },
                { speaker: 'ash', text: 'Как два пальца об асфальт. Сделаем в лучшем виде.' }
              ]
            },
            reveal: { stat: 'speed', value: 40 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: "tony", text: "Build something that would be fast, comfortable, electric and not too expensive. Now I gotta leave and wash that jacket. Goddamn old man... Cya tomorrow." },
        { speaker: "ash", text: "See you tomorrow, big guy." }
      ],
      ru: [
        { speaker: 'tony', text: 'Собери что-то быстрое, комфортное, электрическое и не слишком дорогое. Мне пора пойти отстирать эту куртку от песка. Чёртов дед... Давай, до завтра.' },
        { speaker: 'ash', text: 'Увидимся завтра, здоровяк.' }
      ],
      reveal: { stat: 'budget', value: 800 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: "tony", text: "Hey there, dog! What's up with that bike?" },
          { speaker: "ash", text: "Yooo! There it is." },
          { speaker: "tony", text: "Here's the money. If I never come back, I'm either dead or happy. Thanks!" },
          { speaker: "ash", text: "You are totally welcome." }
        ],
        ru: [
          { speaker: 'tony', text: 'Здорово, пёсель! Как там мой бронепоезд на колёсах?' },
          { speaker: 'ash', text: 'Привет! Вот он, готов принимать на борт кабанчиков.' },
          { speaker: 'tony', text: 'Огонь! Вот деньги. Если я больше не вернусь — значит, я либо разбился от счастья, либо улетел в закат. Спасибо!' },
          { speaker: 'ash', text: 'Всегда пожалуйста, береги себя на дорогах.' }
        ]
      },
      bad: {
        en: [
          { speaker: "tony", text: "This looks... flimsy. Are you sure this can handle my weight?" },
          { speaker: "ash", text: "Well... it was supposed to..." },
          { speaker: "tony", text: "I'm not paying full price for this death trap." }
        ],
        ru: [
          { speaker: 'tony', text: 'Это выглядит... как-то хлипко. Ты уверен, что эта зубочистка выдержит мои 125 кг?' },
          { speaker: 'ash', text: 'Ну... вообще-то по расчётам...' },
          { speaker: 'tony', text: 'Я не собираюсь платить за эту ловушку смерти. Я на ней на первом же бордюре разложусь.' }
        ]
      }
    }
  },

  dzed: {
    intro: {
      en: [
        { speaker: "dzed", text: "Good day, young man. I need... how do you say... a bicycle. Like the one I had in 1983." }
      ],
      ru: [
        { speaker: 'dzed', text: 'Здорово, молодой. Че тут у тебя... Спекуляцией молодежной занимаешься?' },
        { speaker: 'ash', text: 'Здравия желаю! Велосипеды собираю, чиню. Чем-то могу помочь?' },
        { speaker: 'dzed', text: 'Да вот, мой старый «Аист» совсем заржавел, царствие ему небесное, с восьмидесятого года верой и правдой служил. А мне двигаться надо, суставы разминать. Спина уже не та, ноги болят, старый я уже. Нужен ровар нормальный! Простой, чтоб без этих ваших технологий инопланетных. Зашел в соседний магазин, а там черти что, скорости какие-то, передачи, диски... Это чтоб дискотеку крутить на ходу, что ли?' },
        { speaker: 'ash', text: 'Ну, можно и так... В принципе, я могу собрать вам "ровар" на замену и ничем не хуже.' }
      ]
    },
    choices: [
      {
        id: 'dzed_c1',
        question: { en: "What does Dzed need?", ru: 'Как поступим со сборкой для дедушки?' },
        options: [
          {
            id: 'dzed_c1_a',
            text: { en: "Tell me about your old bike. What was special about it?", ru: 'Предложить сделать как было — без передач, тормоз педалью назад.' },
            response: {
              en: [
                { speaker: "dzed", text: "Ah... it was heavy, yes. But so soft! Like riding on a cloud. And it had that beautiful brown leather seat..." },
                { speaker: "ash", text: "He wants comfort above everything. And vintage aesthetics." }
              ],
              ru: [
                { speaker: 'dzed', text: 'А давай! Но чтоб никаких передач этих дурацких! Сел и поехал. И чтоб тормоз нормальный был, педалью назад! Как при союзе было. А то нажмешь случайно рукой на руле, и через руль улетишь головой в кал. Смогёшь?' },
                { speaker: 'ash', text: 'Сделаем в лучшем виде! Только сразу скажу, что детали современные уже давно не в СССР делаются, такой надежности ждать не приходится, но и ломаться там нечему...' }
              ]
            },
            reveal: { stat: 'comfort', value: 80 }
          },
          {
            id: 'dzed_c1_b',
            text: { en: "How fast do you need to go?", ru: 'Убедить взять современный вариант с простым ручным тормозом.' },
            response: {
              en: [
                { speaker: "dzed", text: "Fast? Ha! At my age, speed is the enemy. I just want to pedal gently to the market and back without my back killing me." },
                { speaker: "ash", text: "Slow and comfortable. Got it." }
              ],
              ru: [
                { speaker: 'ash', text: 'Можно сделать проще: одна скорость, но тормоз уже ручной — безопаснее для суставов, чем резкое торможение назад.' },
                { speaker: 'dzed', text: 'Ручные? Да я на них нажму со страху со всей дури и улечу через руль головой в кал! Нет, сынок, мне ноги роднее. Давай как на моем старом «Аисте» педаль назад.' },
                { speaker: 'ash', text: 'Ладно-ладно, будет вам проверенный временем педальный тормоз.' }
              ]
            },
            reveal: { stat: 'speed_max', value: 10 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: "dzed", text: "I don't have much money, I'm afraid. Pension is small. Maybe... $200? Is that enough for something decent?" },
        { speaker: "ash", text: "Don't worry, grandpa. We'll take care of you." }
      ],
      ru: [
        { speaker: 'dzed', text: 'Эх... если ломаться нечему, давай попробуем. Но пенсия не резиновая, сынок, а вы тут, небось, миллионы за свои железки просите. Может... рублей 200 нашими? Хватит на нормальный ровар?' },
        { speaker: 'ash', text: 'Не переживайте, отец. Впишемся в бюджет, еще и на хлеб останется. Всё подберём.' }
      ],
      reveal: { stat: 'budget', value: 200 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: "dzed", text: "Oh my... this is beautiful. It reminds me of my youth. Thank you, son." },
          { speaker: "ash", text: "Ride safe, grandpa. And take the scenic route." }
        ],
        ru: [
          { speaker: 'dzed', text: 'Ох ты ж батюшки... Какая красота! Прямо как мой первый ровар в молодости! И покрашен красиво, по-человечески. Спасибо тебе, сынок, дай бог здоровья тебе и твоему мохнатому помощнику!' },
          { speaker: 'ash', text: 'Катайтесь на здоровье, дедуля. И не гоняйте сильно по лужам!' }
        ]
      },
      bad: {
        en: [
          { speaker: "dzed", text: "This... this is too fast for me. And so uncomfortable! My back will never forgive me..." },
          { speaker: "ash", text: "We missed the mark on this one. Sorry, grandpa." }
        ],
        ru: [
          { speaker: 'dzed', text: 'Это... это что за чудище лесное? Зачем мне эти ручки на руле? И сиденье жесткое как кирпич, я ж себе все суставы отобью! Нет, сынок, на таком я ездить не смогу, спина сразу откажет...' },
          { speaker: 'ash', text: 'Да уж, деду дали гоночный болид вместо прогулочной коляски. Наш косяк, извините, отец.' }
        ]
      }
    }
  },

  vitalya: {
    intro: {
      en: [
        { speaker: "vitalya", text: "Yo. I need the sickest fixie you can build. No brakes. Brakes are for cowards." }
      ],
      ru: [
        { speaker: 'vitalya', text: 'Здарова! Чё вы тут, велики продаете еще?' },
        { speaker: 'ash', text: 'Приветствую. Как видишь, пока не закрылись. Чем могу помочь?' },
        { speaker: 'vitalya', text: 'Смотри. У меня есть шоссер. Он дорогущий и едет отлично, но мне все равно не хватает скорости и острых ощущений. Я хочу такой драйв, чтобы кровь кипела. Есть идеи?' },
        { speaker: 'ash', text: 'Хмм... Дорогой шоссер — это уже быстро. Что же ему посоветовать? Фикс? Или электромотор? Да нет, этот парень явно хочет крутить педали до потери пульса. Я чувствую это.' }
      ]
    },
    choices: [
      {
        id: 'vitalya_c1',
        question: { en: "What does Vitalya care about?", ru: 'Куда сделаем фокус в разговоре?' },
        options: [
          {
            id: 'vitalya_c1_a',
            text: { en: "Speed and style, got it. But are you sure about no brakes?", ru: '«Мы можем сделать его еще быстрее, но на плохих дорогах будет очень некомфортно».' },
            response: {
              en: [
                { speaker: "vitalya", text: "DID I STUTTER? No. Brakes. Brakes are death. We die like men." },
                { speaker: "ash", text: "Alright, alright! No brakes it is. This kid has a death wish." }
              ],
              ru: [
                { speaker: 'vitalya', text: 'Комфорт?! Да мне плевать, если моя спина сломается пополам, я просто хочу обгонять тачки! Сделай, чтобы он выглядел агрессивно.' },
                { speaker: 'ash', text: 'Ну вот, и отпала идея с тяжелой амортизационной вилкой. Только жесткая геометрия!' }
              ]
            },
            reveal: { stat: 'style', value: 80 }
          },
          {
            id: 'vitalya_c1_b',
            text: { en: "What about comfort? Your back will thank you...", ru: '«Если хочешь чистый адреналин, нужно выкинуть вообще всё лишнее».' },
            response: {
              en: [
                { speaker: "vitalya", text: "Comfort? COMFORT? I'm not a grandpa! I ride until my legs give out, then I ride some more!" },
                { speaker: "ash", text: "Right. Comfort is not in his vocabulary." }
              ],
              ru: [
                { speaker: 'vitalya', text: 'Вот именно! Меньше веса — больше скорости! Я хочу летать между машин как ракета. И чтоб выглядел дерзко, понимаешь? Стрит-стайл!' },
                { speaker: 'ash', text: 'А мне нравится его полное пренебрежение собственной безопасностью. Будет пушка.' }
              ]
            },
            reveal: { stat: 'speed', value: 100 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: "vitalya", text: "I got about $400 from my last gig. Make it fast, make it sick, make it BRAKELESS. Later!" },
        { speaker: "ash", text: "This is going to be either amazing or a hospital visit. Probably both." }
      ],
      ru: [
        { speaker: 'vitalya', text: 'Я поднял около 400 баксов с последнего фриланса. Сделай мне его максимально быстрым, злым и главное — БЕЗ ТОРМОЗОВ. Тормоза для слабаков! Давай, на связи!' },
        { speaker: 'ash', text: 'Это будет либо шедевр стрит-культуры, либо визит в реанимацию. Скорее всего, и то, и другое.' }
      ],
      reveal: { stat: 'budget', value: 400 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: "vitalya", text: "YO THIS IS FIRE! No brakes, pure speed, pure style! I'm gonna be the king of the streets!" },
          { speaker: "ash", text: "Please wear a helmet. Actually, wear two." }
        ],
        ru: [
          { speaker: 'vitalya', text: 'ЙОУ, ЭТО ПРОСТО СЕКС! Никаких тормозов, чистая скорость, дикий стрит-арт! Я буду королем трафика на этом снаряде!' },
          { speaker: 'ash', text: 'Пожалуйста, надень шлем. А лучше — надень два шлема сразу.' }
        ]
      },
      bad: {
        en: [
          { speaker: "vitalya", text: "Dude... are those BRAKES? I said NO BRAKES! And it's so slow! I could walk faster than this!" },
          { speaker: "ash", text: "Well, at least he'll be alive..." }
        ],
        ru: [
          { speaker: 'vitalya', text: 'Чувак... это что, ТОРМОЗА? Я же чётки сказал: НИКАКИХ ТОРМОЗОВ! И почему он такой тяжелый и медленный? Я пешком быстрее ходить буду!' },
          { speaker: 'ash', text: 'Ну... зато на этом он точно останется жив. Хотя лицо у него недовольное.' }
        ]
      }
    }
  },

  ewa: {
    intro: {
      en: [
        { speaker: "ewa", text: "Hey. Got anything that... rolls?" }
      ],
      ru: [
        { speaker: 'ewa', text: 'Привет. Хочу купить два колеса с педалями.' },
        { speaker: 'ash', text: 'Привет! Ты по адресу. Выглядишь так, будто три смены подряд на конвейере отпахала.' },
        { speaker: 'ewa', text: 'Две, на местном заводе. А потом ещё сорок минут ада в душном забитом автобусе. Мне нужно как-то добираться на работу и обратно. Быстрее и бесплатно.' },
        { speaker: 'ash', text: 'Логично. Общественный транспорт — лучший стимул пересесть на два колеса.' }
      ]
    },
    choices: [
      {
        id: 'eva_c1',
        question: { en: "How to approach Eva's needs?", ru: 'Как расспросим Еву о велосипеде?' },
        options: [
          {
            id: 'eva_c1_a',
            text: { en: "Any preferences? Suspension, gears, brakes?", ru: 'Спросить про особые предпочтения (амортизаторы, скорости, тормоза).' },
            response: {
              en: [
                { speaker: "ewa", text: "I don't give a damn. It just needs to roll and not fall apart too quickly. But I'm scraping the bottom of the barrel at this point in terms of cash..." }
              ],
              ru: [
                { speaker: 'ewa', text: 'Да все равно, хоть из советских водопроводных труб свари. Главное — чтобы колеса крутились и он не развалился на пятом километре пробега. Но по бюджету у меня буквально три копейки.' }
              ]
            },
            reveal: { stat: 'durability', value: 10 }
          },
          {
            id: 'eva_c1_b',
            text: { en: "Skip details and ask about budget directly.", ru: 'Пропустить детали и переходить сразу к бюджету.' },
            response: {
              en: [
                { speaker: "ash", text: "Got it. Budget's tight?" },
                { speaker: "ewa", text: "I don't give a damn. It just needs to roll and not fall apart too quickly. But I'm scraping the bottom of the barrel..." }
              ],
              ru: [
                { speaker: 'ash', text: 'Понял. Бюджет, видимо, спартанский?' },
                { speaker: 'ewa', text: 'Да все равно, хоть из советских водопроводных труб свари. Главное — чтобы колеса крутились и он не развалился на пятом километре пробега. Но по деньгам у меня совсем пусто.' }
              ]
            },
            reveal: { stat: 'durability', value: 10 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: "ewa", text: "I have $130. That's literally all I have until next paycheck. Please, help me out." },
        { speaker: "ash", text: "I'll see what I can scrape together from the budget bin." }
      ],
      ru: [
        { speaker: 'ewa', text: 'У меня есть ровно 130 баксов. Это буквально всё, что осталось до следующей получки. Пожалуйста, выручи.' },
        { speaker: 'ash', text: 'М-да, спартанский... Но ладно, посиди пока на диванчике, я попробую собрать тебе колесницу из всем известной субстанции и палок.' }
      ],
      reveal: { stat: 'budget', value: 130 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: "ewa", text: "Looks rough. But it has two wheels and pedals. I'll take it. Thanks for helping me out." },
          { speaker: "ash", text: "Safe travels. And seriously, go get some sleep!" }
        ],
        ru: [
          { speaker: 'ewa', text: 'Ну вот, колеса на месте, педали крутятся. Проще некуда, но мне большего и не надо. Забираю. Вот деньги. Спасибо.' },
          { speaker: 'ash', text: 'Удачи на дорогах. И поспи наконец!' }
        ]
      },
      bad: {
        en: [
          { speaker: "ewa", text: "This costs more than my rent... and it's falling apart. I can't afford this mistake." },
          { speaker: "ash", text: "We let her down. That one's on us." }
        ],
        ru: [
          { speaker: 'ewa', text: 'Это... это стоит больше, чем моя аренда комнаты. Да и выглядит так, будто рассыпется на первой же кочке. Нет, я не могу так рисковать своими крохами...' },
          { speaker: 'ash', text: 'Мы её подвели. Собрали слишком дорогой и ненадёжный хлам для рабочего человека.' }
        ]
      }
    }
  },

  syalyanych: {
    intro: {
      en: [
        { speaker: "syalyanych", text: "Oy! I need a bike for the village. Something that can handle mud, gravel, and my mother-in-law's driveway." }
      ],
      ru: [
        { speaker: 'syalyanych', text: 'Здарова, хозяин! Гы. Слышь, мне это... электру надо! Самую мощную, чтоб аж искры из глаз!' },
        { speaker: 'ash', text: 'Здорова... Слушай, я не хотел бы задавать лишних вопросов, но тут прям просится. Ты нафига поросенка-то в веломагазин притащил?' },
        { speaker: 'syalyanych', text: 'Да его дома одного хрен оставишь, скучает, завывает и обои грызёт, зараза. Да и вообще, мы с ним везде вместе, он у меня штурманом будет, в корзине! Гы! Так че там по электре?' },
        { speaker: 'ash', text: 'Понятно... Ну, привет, штурман. А электра-то тебе в деревне зачем?' }
      ]
    },
    choices: [
      {
        id: 'syalyanych_c1',
        question: { en: "What does Syalyanych need?", ru: 'Как убедим Селяныча насчёт типа байка?' },
        options: [
          {
            id: 'syalyanych_c1_a',
            text: { en: "Mud and gravel? You need serious durability. And fenders — lots of fenders.", ru: 'Спросить про гонки с тракторами (хочет догнать Петро в болоте).' },
            response: {
              en: [
                { speaker: "syalyanych", text: "Yes! Fenders! Last time I rode without them, I came home looking like a chocolate cake." },
                { speaker: "ash", text: "Mud fenders it is. And something that won't break on the first pothole." }
              ],
              ru: [
                { speaker: 'syalyanych', text: 'Какая дискотека, ёлки-палки! Мне за тракторами по пахоте гонять надо! Наш Петро на "Беларусе" как втопит по грязище после дождя, а я за ним на дыбы — и у-у-у-ух! Бабки есть, не боись, не обижу!' },
                { speaker: 'ash', text: 'Погоди-ка, парень. Какая электра в болоте? Ты ее в первой же луже утопишь. Вода попадет в мотор, аккум закоротит — и всё, хана твоей ракете, потащишь 50 кг дуру на хребте до хаты. Тебе нужен суровый педальный грязевик. И крылья обязательно!' }
              ]
            },
            reveal: { stat: 'durability', value: 80 }
          },
          {
            id: 'syalyanych_c1_b',
            text: { en: "How much are you willing to spend?", ru: 'Предупредить, что тяжелая электра в болоте сразу сгорит.' },
            response: {
              en: [
                { speaker: "syalyanych", text: "Not much, friend. Maybe $300? But it better survive a nuclear winter!" },
                { speaker: "ash", text: "$300 for a tank. Challenge accepted." }
              ],
              ru: [
                { speaker: 'ash', text: 'Погоди-ка. Электра в болоте? Ты ее в первой же луже утопишь. Вода в мотор — аккум закоротит, хана. Будешь 50 кг на хребте тащить до хаты. Тебе педальный грязевик нужен.' },
                { speaker: 'syalyanych', text: 'Педали крутить?.. Дак это ж работать надо, я на работе и так упахиваюсь... Хотя... Если электра в жиже сгорит... Не, сгореть не надо, картоха тяжело досталась. Ладно, давай без батарейки! Но чтоб тюнинг был самый злой! Колхозный! Покрышки тракторные и крылья!' }
              ]
            },
            reveal: { stat: 'budget', value: 300 }
          }
        ]
      }
    ],
    budgetReveal: {
      en: [
        { speaker: "syalyanych", text: "I got $300. And make sure it has those mud thingies on the wheels. My wife will kill me if I come home dirty again." },
        { speaker: "ash", text: "Say no more. Mud fenders are mandatory." }
      ],
      ru: [
        { speaker: 'syalyanych', text: 'Вот, держи 300 баксов. Картоху в город сдал, бабки чистые. Главное — поставь эти болотники на колеса, а то жена домой грязного не пустит!' },
        { speaker: 'ash', text: 'Договорились. Полноразмерные крылья — обязательный пункт нашей программы.' }
      ],
      reveal: { stat: 'budget', value: 300 }
    },
    delivery: {
      perfect: {
        en: [
          { speaker: "syalyanych", text: "Oy, this is beautiful! Look at those fenders! My wife might actually let me keep it in the house!" },
          { speaker: "ash", text: "Tell her it's art. Expensive, functional art." }
        ],
        ru: [
          { speaker: 'syalyanych', text: 'Ого-го! Ну и агрегат! Чистый трактор, ёлки-палки! Грязевая резина злейшая, а крылья какие — жена точно разрешит его в сени закатить! Спасибо, Эш, ты лучший мастер в округе! С меня мешок лучшей отборной бульбы!' },
          { speaker: 'ash', text: 'Катайся на здоровье, Селяныч. Передавай привет Петро на тракторе!' }
        ]
      },
      bad: {
        en: [
          { speaker: "syalyanych", text: "Where are the fenders?! And this thing won't survive my driveway! Disappointed, friend." },
          { speaker: "ash", text: "We forgot the most important part. The mud monster needs his armor." }
        ],
        ru: [
          { speaker: 'syalyanych', text: 'Слышь, друг... А где болотники?! И рама какая-то хлипкая, я ж её на первой же пахоте пополам сломаю! И штурмана некуда посадить... Не, картофельные бабки за такое отдавать жалко.' },
          { speaker: 'ash', text: 'Эх, забыли про крылья. Оставили грязевого монстра без его главного щита.' }
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
