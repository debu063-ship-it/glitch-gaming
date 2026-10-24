import React, { useState } from 'react'

interface MenuItem {
  name: string
  category: 'drinks' | 'food' | 'snacks'
  price: string
  tag: string
  desc: string
  highlight?: boolean
}

const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Frontier Roasted Cold Brew',
    category: 'drinks',
    price: '$5.50',
    tag: 'ZONE 01 PAIRING',
    desc: '18-hour single origin Ethiopian roast with rich maple cold foam.',
    highlight: true,
  },
  {
    name: 'Valhalla Blue Lightning Elixir',
    category: 'drinks',
    price: '$6.00',
    tag: 'ZONE 02 PAIRING',
    desc: 'Electric blue spirulina, yuzu citrus, sparkling botanical tonic & natural ginseng.',
    highlight: true,
  },
  {
    name: 'Dragonfruit Devil Fizz',
    category: 'drinks',
    price: '$6.50',
    tag: 'ZONE 03 PAIRING',
    desc: 'Fresh pink dragonfruit, hibiscus tea, crushed mint, and sparkling electrolyte soda.',
    highlight: true,
  },
  {
    name: 'Cyberpunk Ceremonial Matcha',
    category: 'drinks',
    price: '$6.25',
    tag: 'FOCUS & CLARITY',
    desc: 'Uji Kyoto grade ceremonial matcha whisked with oat milk and Madagascar vanilla.',
  },
  {
    name: 'Glitch Double Smash Burger',
    category: 'food',
    price: '$13.50',
    tag: 'CHEF FAVORITE',
    desc: 'Two 4oz grass-fed beef smash patties, aged cheddar, caramelized shallots, brioche bun.',
    highlight: true,
  },
  {
    name: 'Inferno Korean Fried Bao (2pcs)',
    category: 'food',
    price: '$11.00',
    tag: 'SPICY',
    desc: 'Crispy chili-glazed chicken, house kimchi slaw, pickled cucumber in fluffy steamed bao.',
  },
  {
    name: 'Truffle Parmesan Loaded Fries',
    category: 'food',
    price: '$8.50',
    tag: 'SHAREABLE',
    desc: 'Crisp hand-cut shoestring potatoes tossed in black truffle oil, rosemary & 24-month parmigiano.',
  },
  {
    name: 'Smoked Bacon Mac & Cheese Bites',
    category: 'snacks',
    price: '$7.50',
    tag: 'QUICK FUEL',
    desc: 'Crispy panko-crusted 4-cheese mac bites served with garlic aioli dip.',
  },
  {
    name: 'Molten Nutella Mochi Waffle',
    category: 'snacks',
    price: '$8.00',
    tag: 'DESSERT',
    desc: 'Chewy Belgian-style mochi waffle topped with warm Nutella drizzle and vanilla bean gelato.',
  },
]

export default function CafeMenu() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'drinks' | 'food' | 'snacks'>('all')

  const items = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((i) => i.category === activeCategory)

  return (
    <section id="cafe-fuel" className="py-24 px-4 sm:px-6 lg:px-12 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <span>☕ ARTISAN GAMING KITCHEN &amp; BAR</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
              CAFE &amp; ENERGY FUEL
            </h2>
            <p className="text-slate-400 font-body text-sm sm:text-base mt-2 max-w-xl">
              Order directly to your rig through the on-screen terminal. Crafted for sustained focus, zero grease on keyboards, and pure culinary satisfaction.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-cyan-400 text-black border-cyan-400 font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              ALL MENU ({MENU_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('drinks')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                activeCategory === 'drinks'
                  ? 'bg-cyan-400 text-black border-cyan-400 font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              ELIXIRS &amp; BREW
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('food')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                activeCategory === 'food'
                  ? 'bg-cyan-400 text-black border-cyan-400 font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              BURGERS &amp; MAINS
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('snacks')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                activeCategory === 'snacks'
                  ? 'bg-cyan-400 text-black border-cyan-400 font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              SNACKS &amp; SWEETS
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-black/60 border backdrop-blur-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                item.highlight
                  ? 'border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_20px_rgba(56,223,255,0.08)]'
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                    {item.tag}
                  </span>
                  <span className="font-mono font-bold text-base text-cyan-400">
                    {item.price}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h3>

                <p className="font-body text-xs text-slate-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>DELIVERED TO POD</span>
                <span className="text-cyan-400 font-semibold group-hover:underline">
                  ORDER TO RIG +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
