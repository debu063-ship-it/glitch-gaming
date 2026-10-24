import { useState, useEffect, useRef } from 'react'

interface ConsolePricingSectionProps {
  onReserve?: (tierTitle: string) => void
}

interface ConsoleTier {
  id: 'ps5' | 'ps4'
  name: string
  image: string
  singleRate: string
  extraPlayerRate: string
  side: 'left' | 'right'
}

const CONSOLE_TIERS: ConsoleTier[] = [
  {
    id: 'ps5',
    name: 'PLAYSTATION 5',
    image: '/assets/ps5-console.jpg',
    singleRate: '₹100',
    extraPlayerRate: '₹50',
    side: 'left',
  },
  {
    id: 'ps4',
    name: 'PLAYSTATION 4',
    image: '/assets/ps4-console.jpg',
    singleRate: '₹80',
    extraPlayerRate: '₹50',
    side: 'right',
  },
]

function ConsoleCard({
  tier,
  slideX,
  opacity,
  onReserve,
}: {
  tier: ConsoleTier
  slideX: number
  opacity: number
  onReserve?: (title: string) => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    setRotate({ x: rotateX, y: rotateY })
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.3,
    })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="liquid-glass-card p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-[28px] flex flex-col justify-between group cursor-default transition-transform duration-100 ease-out"
      style={{
        transform: `perspective(1000px) translateX(${slideX}px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${
          rotate.x !== 0 || rotate.y !== 0 ? 1.02 : 1
        })`,
        opacity: opacity,
        pointerEvents: opacity < 0.2 ? 'none' : 'auto',
      }}
    >
      {/* Specular glare following cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
          opacity: glare.opacity,
        }}
      />

      <div className="relative z-10">
        {/* Console Name Header */}
        <div className="mb-3 sm:mb-5 text-center sm:text-left">
          <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white tracking-wider uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            {tier.name}
          </h3>
        </div>

        {/* Console Product Showcase Image */}
        <div className="relative w-full h-44 sm:h-56 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 bg-black/40 border border-white/10 group-hover:border-cyan-400/40 transition-all shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
          <img
            src={tier.image}
            alt={tier.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Bottom Rates Box (Single rate & Extra Player rate) */}
      <div className="relative z-10 mt-auto pt-1 sm:pt-2">
        <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/65 border border-cyan-400/50 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.7),0_0_20px_rgba(0,229,255,0.2)]">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 divide-x divide-white/15 mb-3 sm:mb-4">
            {/* Single Player Rate */}
            <div className="pr-2 sm:pr-3">
              <span className="block font-mono text-[9px] sm:text-xs tracking-widest text-slate-400 uppercase font-semibold">
                SINGLE
              </span>
              <div className="flex items-baseline gap-1 mt-0.5 sm:mt-1">
                <span className="font-display font-black text-xl sm:text-3xl text-cyan-400 tracking-tight drop-shadow-[0_0_16px_rgba(0,229,255,0.7)]">
                  {tier.singleRate}
                </span>
                <span className="font-mono text-[10px] sm:text-sm text-slate-300 font-semibold uppercase">
                  / hr
                </span>
              </div>
            </div>

            {/* Extra Player Rate */}
            <div className="pl-3 sm:pl-4">
              <span className="block font-mono text-[9px] sm:text-xs tracking-widest text-slate-400 uppercase font-semibold">
                EXTRA PLAYER
              </span>
              <div className="flex items-baseline gap-1 mt-0.5 sm:mt-1">
                <span className="font-display font-black text-xl sm:text-3xl text-white tracking-tight drop-shadow-[0_0_14px_rgba(255,255,255,0.6)]">
                  {tier.extraPlayerRate}
                </span>
              </div>
            </div>
          </div>

          {/* Reserve Station Action */}
          <button
            type="button"
            onClick={() => onReserve?.(`${tier.name} Console Station`)}
            className="w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-cyan-400/20 hover:bg-cyan-400 border border-cyan-400/60 hover:border-cyan-300 text-cyan-300 hover:text-black font-display font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.2)] flex items-center justify-center gap-2 group/btn"
          >
            <span>RESERVE {tier.name}</span>
            <span className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ConsolePricingSection({ onReserve }: ConsolePricingSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [mobileTab, setMobileTab] = useState<'ps5' | 'ps4'>('ps5')

  // Track scroll progress through this pinned experience
  useEffect(() => {
    let animId: number

    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalDist = containerRef.current.offsetHeight - window.innerHeight
      if (totalDist <= 0) return

      const scrolled = -rect.top
      const rawProgress = Math.max(0, Math.min(1, scrolled / totalDist))
      setProgress(rawProgress)
    }

    const onScroll = () => {
      cancelAnimationFrame(animId)
      animId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(animId)
    }
  }, [])

  // Scroll Sliding Mechanics
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const slideDistance = isMobile ? 60 : 160

  let leftSlideX = 0
  let rightSlideX = 0
  let cardOpacity = 1

  if (progress < 0.30) {
    const t = Math.max(0, progress / 0.30)
    const ease = 1 - Math.pow(1 - t, 3)
    leftSlideX = -(1 - ease) * slideDistance
    rightSlideX = (1 - ease) * slideDistance
    cardOpacity = Math.max(0, ease)
  } else if (progress > 0.70) {
    const t = Math.min(1, (progress - 0.70) / 0.30)
    const ease = Math.pow(t, 2)
    leftSlideX = -ease * slideDistance
    rightSlideX = ease * slideDistance
    cardOpacity = Math.max(0, 1 - ease * 1.1)
  } else {
    leftSlideX = 0
    rightSlideX = 0
    cardOpacity = 1
  }

  // Background Parallax
  const bgTranslateY = (progress - 0.5) * 100
  const bgScale = 1.04 + Math.sin(progress * Math.PI) * 0.03

  return (
    <section
      ref={containerRef}
      id="console-rates"
      className="relative h-[220vh] md:h-[250vh] bg-black text-white selection:bg-cyan-400 selection:text-black"
    >
      {/* Sticky Fullscreen Stage (Pinned during scroll) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* 1. Ghost of Tsushima Spider Lily Flower Field Background */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
          style={{
            transform: `translateY(${bgTranslateY}px) scale(${bgScale})`,
            transition: 'transform 0.05s linear',
          }}
        >
          <img
            src="/assets/console-pricing-bg.jpg"
            alt="Ghost of Tsushima PS5 Arena"
            className="w-full h-full object-cover object-center select-none brightness-95 contrast-105"
            loading="lazy"
          />

          {/* Ambient Top & Bottom Edge Vignettes for Seamless Blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent via-50% to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent via-50% to-black/60 pointer-events-none hidden md:block" />
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>

        {/* 2. Content Container: Minimal Liquid Frosted Glass Cards (PS5 & PS4) */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Tab Switcher */}
          <div className="flex md:hidden items-center justify-center gap-2 mb-3">
            <button
              type="button"
              onClick={() => setMobileTab('ps5')}
              className={`px-4 py-1.5 rounded-full font-display font-bold text-xs tracking-wider transition-all cursor-pointer ${
                mobileTab === 'ps5'
                  ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,229,255,0.6)]'
                  : 'bg-black/60 text-slate-300 border border-white/20'
              }`}
            >
              PLAYSTATION 5
            </button>
            <button
              type="button"
              onClick={() => setMobileTab('ps4')}
              className={`px-4 py-1.5 rounded-full font-display font-bold text-xs tracking-wider transition-all cursor-pointer ${
                mobileTab === 'ps4'
                  ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,229,255,0.6)]'
                  : 'bg-black/60 text-slate-300 border border-white/20'
              }`}
            >
              PLAYSTATION 4
            </button>
          </div>

          {/* Grid Layout: Single Card on Mobile, 2 Cards on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {CONSOLE_TIERS.map((tier) => {
              const isLeft = tier.side === 'left'
              const slideX = isLeft ? leftSlideX : rightSlideX

              return (
                <div
                  key={tier.id}
                  className={tier.id === mobileTab ? 'block' : 'hidden md:block'}
                >
                  <ConsoleCard
                    tier={tier}
                    slideX={slideX}
                    opacity={cardOpacity}
                    onReserve={onReserve}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
