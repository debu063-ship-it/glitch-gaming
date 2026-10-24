import React from 'react'

interface RatesProps {
  onOpenBooking: () => void
}

export default function RatesAndMemberships({ onOpenBooking }: RatesProps) {
  return (
    <section id="rates-membership" className="py-24 px-4 sm:px-6 lg:px-12 bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span>🎟️ TRANSPARENT GAMING TIERS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
            RATES &amp; PASSES
          </h2>
          <p className="text-slate-400 font-body text-sm sm:text-base mt-2">
            No sign-up fee. Instant seat allocation, cloud save sync, and complimentary high-speed fiber WiFi on all plans.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Hourly Drop-In */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col justify-between group">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                CASUAL DROP-IN
              </span>
              <div className="flex items-baseline gap-1 my-3">
                <span className="font-display font-black text-4xl text-white">$7</span>
                <span className="text-slate-400 font-mono text-xs">/ HOUR</span>
              </div>
              <p className="text-xs text-slate-400 font-body mb-6">
                Perfect for quick sessions, lunch breaks, or 1v1 grudge matches with friends.
              </p>
              <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Any available station
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Full 200+ game library
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Free keyboard sanitizing
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="mt-8 w-full py-2.5 rounded-xl border border-white/20 text-xs font-mono font-bold tracking-wider uppercase text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer"
            >
              BOOK HOURLY
            </button>
          </div>

          {/* 4-Hour Grind Pass */}
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-amber-500/40 hover:border-amber-400 transition-all flex flex-col justify-between relative shadow-[0_0_30px_rgba(245,158,11,0.12)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-black font-mono font-bold text-[10px] tracking-wider uppercase">
              POPULAR GRIND
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                4-HOUR BATTLE PASS
              </span>
              <div className="flex items-baseline gap-1 my-3">
                <span className="font-display font-black text-4xl text-white">$24</span>
                <span className="text-slate-400 font-mono text-xs">/ 4 HOURS</span>
              </div>
              <p className="text-xs text-slate-400 font-body mb-6">
                Ranked grind session. Includes 1 complimentary craft coffee or energy elixir.
              </p>
              <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> 4 consecutive hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Free Signature Drink
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Priority RTX 4090 Pod
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="mt-8 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] cursor-pointer"
            >
              CLAIM GRIND PASS
            </button>
          </div>

          {/* All-Night Owl Pass */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-400 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                ALL-NIGHT OWL PASS
              </span>
              <div className="flex items-baseline gap-1 my-3">
                <span className="font-display font-black text-4xl text-white">$36</span>
                <span className="text-slate-400 font-mono text-xs">/ MIDNIGHT–8 AM</span>
              </div>
              <p className="text-xs text-slate-400 font-body mb-6">
                Lock in for the entire overnight shift. Ultra-quiet atmosphere and late-night kitchen service.
              </p>
              <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> 8 Full Overnight Hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Midnight Snack &amp; Red Bull
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Curtained VIP Pod Option
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="mt-8 w-full py-2.5 rounded-xl border border-cyan-500/40 text-xs font-mono font-bold tracking-wider uppercase text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all cursor-pointer"
            >
              BOOK ALL-NIGHT
            </button>
          </div>

          {/* Monthly Pro Member */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-purple-500/30 hover:border-purple-400 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                MONTHLY PRO PASS
              </span>
              <div className="flex items-baseline gap-1 my-3">
                <span className="font-display font-black text-4xl text-white">$149</span>
                <span className="text-slate-400 font-mono text-xs">/ MONTH</span>
              </div>
              <p className="text-xs text-slate-400 font-body mb-6">
                For the dedicated daily esports athlete and regular cafe resident.
              </p>
              <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span> 35 Hours/month included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span> 20% Off All Cafe Orders
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span> Weekly Tournament Access
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="mt-8 w-full py-2.5 rounded-xl border border-purple-500/40 text-xs font-mono font-bold tracking-wider uppercase text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all cursor-pointer"
            >
              JOIN PRO LOUNGE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
