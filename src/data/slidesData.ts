export interface SlideData {
  id: string
  franchise: string
  categoryNumber: string
  categoryTitle: string
  watermark: string
  solidWords: string[]
  strokeWords: string[]
  subtitle: string
  ctaText: string
  zone: string
  stations: string
  image: string
  accent: {
    color: string
    glow: string
    badgeColor: string
  }
  specs: {
    label: string
    value: string
  }[]
}

export const SLIDES: SlideData[] = [
  {
    id: 'rdr2',
    franchise: 'RED DEAD REDEMPTION II',
    categoryNumber: '01',
    categoryTitle: 'FRONTIER / OPEN WORLD',
    watermark: 'WEST',
    solidWords: ['RIDE', 'BEYOND'],
    strokeWords: ['THE', 'HORIZON.'],
    subtitle: 'Disappear into a world where every choice leaves a mark.',
    ctaText: 'RESERVE YOUR STATION',
    zone: 'ZONE 01 // OUTLAW SANCTUARY',
    stations: 'PODS 01 – 12',
    image: '/assets/game-1-rdr2-hd.jpg',
    accent: {
      color: '#00e5ff',
      glow: 'rgba(0, 229, 255, 0.4)',
      badgeColor: 'text-cyan-400',
    },
    specs: [
      { label: 'GRAPHICS RIG', value: 'NVIDIA GeForce RTX 4090 OC (24GB)' },
      { label: 'PANEL DISPLAY', value: 'Samsung 49" Odyssey OLED G9 (240Hz, 0.03ms)' },
      { label: 'CONTROLS', value: 'Xbox Elite Wireless Series 2 / Hall-Effect' },
      { label: 'SEATING', value: 'Secretlab Titan Evo Napa Leather Pod' },
    ],
  },
  {
    id: 'gow',
    franchise: 'GOD OF WAR RAGNARÖK // VALHALLA',
    categoryNumber: '02',
    categoryTitle: 'VALHALLA / COMBAT REALM',
    watermark: 'VALHALLA',
    solidWords: ['CLAIM', 'YOUR'],
    strokeWords: ['DIVINE', 'POWER.'],
    subtitle: 'Confront the gods. Unleash Spartan fury on 4K 120Hz liquid-cooled PS5 Pro.',
    ctaText: 'RESERVE YOUR STATION',
    zone: 'ZONE 02 // REALM OF VALHALLA',
    stations: 'PODS 13 – 24',
    image: '/assets/game-2-gow-hd.jpg',
    accent: {
      color: '#00e5ff',
      glow: 'rgba(0, 229, 255, 0.4)',
      badgeColor: 'text-cyan-400',
    },
    specs: [
      { label: 'CONSOLE SYSTEM', value: 'PlayStation 5 Pro Liquid-Cooled VIP Lounge' },
      { label: 'PRIMARY SCREEN', value: 'Sony INZONE M9 4K 144Hz + 65" LG G3 OLED' },
      { label: 'CONTROLLER', value: 'DualSense Edge Haptic Pro Tuning' },
      { label: 'AUDIO DOME', value: 'Tempest 3D Audio + Dolby Atmos Vault' },
    ],
  },
  {
    id: 'tekken',
    franchise: 'TEKKEN 8 // IRON FIST TOURNAMENT',
    categoryNumber: '03',
    categoryTitle: 'IRON FIST / ESPORTS ARENA',
    watermark: 'MISHIMA',
    solidWords: ['CLASH', 'OF'],
    strokeWords: ['THE', 'TITANS.'],
    subtitle: 'Fist meets fate. Frame-perfect input on 360Hz esports battle stations.',
    ctaText: 'ENTER THE ARENA',
    zone: 'ZONE 03 // IRON FIST ARENA',
    stations: 'ARENA 25 – 42',
    image: '/assets/game-3-tekken-hd.jpg',
    accent: {
      color: '#00e5ff',
      glow: 'rgba(0, 229, 255, 0.4)',
      badgeColor: 'text-cyan-400',
    },
    specs: [
      { label: 'ESPORTS PC', value: 'Intel Core i9-14900KS + RTX 4090 OC' },
      { label: 'DISPLAY PANEL', value: 'BenQ ZOWIE XL2566K 360Hz DyAc+ 0.5ms' },
      { label: 'ARCADE CONTROLS', value: 'Victrix Pro FS Leverless & Hall-Effect Pads' },
      { label: 'NETWORK', value: '0.2ms Dedicated Fiber LAN Head-to-Head' },
    ],
  },
]
