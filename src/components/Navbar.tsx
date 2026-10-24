import React from 'react'

interface NavbarProps {
  onReplayIntro: () => void
  onOpenBooking: () => void
  isPlaying: boolean
}

export default function Navbar({ onReplayIntro, onOpenBooking, isPlaying }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 pt-5 sm:pt-7 pb-3 sm:pb-4 flex items-center justify-between pointer-events-auto">
        {/* Brand Logo (matches screenshot: cyan square box + GLITCH GAMING LOUNGE) */}
        <button
          type="button"
          onClick={onReplayIntro}
          disabled={isPlaying}
          title="Tap to replay the cinematic logo animation"
          className="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none cursor-pointer"
        >
          {/* Official Glitch Gaming Lounge Logo Image (touchable/clickable to replay intro) */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-black/70 border border-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.4)] flex items-center justify-center p-1 group-hover:border-cyan-300 group-hover:scale-105 transition-all overflow-hidden">
            <img
              src="/assets/glitch-gaming-lounge-logo-transparent.png"
              alt="Glitch Gaming Lounge"
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(56,223,255,0.8)] group-hover:brightness-125 transition-all"
            />
          </div>

          {/* Brand Name Typography */}
          <div className="flex flex-col text-left">
            <span className="font-display font-extrabold text-sm sm:text-base tracking-[0.14em] text-white uppercase group-hover:text-cyan-300 transition-colors">
              GLITCH
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] text-slate-400 uppercase font-medium">
              GAMING LOUNGE
            </span>
          </div>
        </button>

        {/* Navigation Items (responsive spacing for mobile & laptop) */}
        <nav className="flex items-center gap-3 sm:gap-7 md:gap-10 text-[11px] sm:text-sm font-display font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase">
          <a
            href="#experience-zone"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer hidden xs:inline"
          >
            HOME
          </a>

          {/* BOOKING outlined button matching screenshot */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-md bg-cyan-950/20 hover:bg-cyan-900/40 border border-cyan-400/50 hover:border-cyan-400 text-cyan-300 hover:text-white transition-all shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer"
          >
            BOOKING
          </button>

          <a
            href="#wukong-experience"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            ABOUT
          </a>

          <a
            href="#footer-section"
            className="text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  )
}
