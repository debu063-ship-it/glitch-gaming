import React from 'react'

interface FooterProps {
  onReplayIntro: () => void
}

export default function Footer({ onReplayIntro }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="footer-section" className="border-t border-cyan-500/20 bg-black text-white py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-cyan-500/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onReplayIntro}
                className="w-10 h-10 rounded-xl bg-black border border-cyan-400/40 p-1 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-[0_0_15px_rgba(56,223,255,0.3)]"
                title="Tap to replay intro animation"
              >
                <img
                  src="/assets/glitch-gaming-lounge-logo-transparent.png"
                  alt="Glitch Logo"
                  className="w-full h-full object-contain"
                />
              </button>
              <div>
                <span className="font-display font-black text-xl tracking-wider text-white uppercase">
                  GLITCH
                </span>
                <span className="text-xs font-mono text-cyan-400 ml-2 tracking-widest">
                  GAMING LOUNGE
                </span>
              </div>
            </div>

            <p className="font-body text-xs text-slate-400 max-w-sm leading-relaxed">
              The premier next-generation esports arena, private PC pods, and artisan gaming lounge. Designed for gamers who demand perfection.
            </p>

            {/* Replay Intro Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onReplayIntro}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 hover:text-white font-mono text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(56,223,255,0.2)] cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>TAP TO REPLAY LOGO INTRO</span>
                <span>↻</span>
              </button>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="font-mono text-xs space-y-2.5">
            <div className="text-white font-bold tracking-widest uppercase mb-3 text-cyan-400">
              LOCATION &amp; HOURS
            </div>
            <p className="text-slate-300">
              404 Cyberway Blvd, Suite 100<br />
              Metropolis Arena District
            </p>
            <p className="text-emerald-400 font-semibold pt-1">
              ● OPEN 24 HOURS / 7 DAYS A WEEK
            </p>
            <p className="text-slate-400">
              Phone: +1 (555) 454-8240<br />
              Email: ops@glitchlounge.gg
            </p>
          </div>

          {/* Zones */}
          <div className="font-mono text-xs space-y-2">
            <div className="text-white font-bold tracking-widest uppercase mb-3 text-cyan-400">
              LOUNGE ZONES
            </div>
            <div>
              <a href="#experience-zone" className="text-slate-400 hover:text-cyan-300 transition-colors">
                Zone 01: Outlaw Sanctuary (RDR2)
              </a>
            </div>
            <div>
              <a href="#experience-zone" className="text-slate-400 hover:text-cyan-300 transition-colors">
                Zone 02: Realm of Valhalla (PS5 Pro)
              </a>
            </div>
            <div>
              <a href="#experience-zone" className="text-slate-400 hover:text-cyan-300 transition-colors">
                Zone 03: Iron Fist Arena (Tekken 8)
              </a>
            </div>
            <div>
              <a href="#wukong-experience" className="text-slate-400 hover:text-cyan-300 transition-colors">
                Wukong VIP Battle Arena
              </a>
            </div>
          </div>

          {/* Arsenal & Amenities */}
          <div className="font-mono text-xs space-y-2">
            <div className="text-white font-bold tracking-widest uppercase mb-3 text-cyan-400">
              AMENITIES
            </div>
            <div className="text-slate-400">NVIDIA RTX 4090 OC Rigs</div>
            <div className="text-slate-400">Sony PS5 Pro VIP Pods</div>
            <div className="text-slate-400">BenQ 360Hz DyAc+ Monitors</div>
            <div className="text-slate-400">Artisan Kitchen &amp; Espresso Bar</div>
            <div className="text-slate-400">10Gbps Dedicated Fiber LAN</div>
          </div>
        </div>

        {/* Bottom copyright and to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            &copy; 2026 GLITCH GAMING LOUNGE. ALL RIGHTS RESERVED.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
