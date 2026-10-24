import { useState, useEffect, useRef } from 'react'

interface WukongFeatureSectionProps {
  onReserve?: (zoneTitle: string) => void
}

interface FeatureCard {
  id: string
  stat: string
  title: string
  desc: string
  side: 'left' | 'right'
}

const WUKONG_CARDS: FeatureCard[] = [
  {
    id: 'ps5',
    stat: 'PS5',
    title: 'CONSOLE GAMING',
    desc: 'Immersive multiplayer and exclusive console experiences.',
    side: 'left',
  },
  {
    id: 'refresh',
    stat: '144 Hz',
    title: 'HIGH-REFRESH DISPLAYS',
    desc: 'Fluid gameplay for competitive matches.',
    side: 'right',
  },
  {
    id: 'speed',
    stat: '1 Gbps',
    title: 'HIGH-SPEED INTERNET',
    desc: 'Fast downloads and online multiplayer connectivity.',
    side: 'left',
  },
  {
    id: 'access',
    stat: '24/7',
    title: 'GAMING ACCESS',
    desc: 'Your next gaming session, whenever you want.',
    side: 'right',
  },
]

// Interactive 3D Liquid Glass Card Component with sliding animation and cursor specular glare
function InteractiveLiquidCard({
  card,
  slideX,
  opacity,
  onReserve,
}: {
  card: FeatureCard
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

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    setRotate({ x: rotateX, y: rotateY })
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.32,
    })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <div
      ref={cardRef}
      onClick={() => onReserve?.(card.title)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="liquid-glass-card p-3.5 sm:p-7 md:p-8 rounded-2xl sm:rounded-[28px] flex flex-col justify-between group cursor-pointer transition-transform duration-100 ease-out"
      style={{
        transform: `perspective(1000px) translateX(${slideX}px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${
          rotate.x !== 0 || rotate.y !== 0 ? 1.03 : 1
        })`,
        opacity: opacity,
        pointerEvents: opacity < 0.2 ? 'none' : 'auto',
      }}
    >
      {/* Specular glare following mouse cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.32) 0%, transparent 65%)`,
          opacity: glare.opacity,
        }}
      />

      <div className="relative z-10">
        {/* Pulsing Cyber Cyan Number/Stat */}
        <div className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-cyan-400 tracking-tight mb-1 sm:mb-3 drop-shadow-[0_0_22px_rgba(0,229,255,0.8)] group-hover:text-cyan-300 transition-colors animate-glow-pulse">
          {card.stat}
        </div>

        {/* Uppercase Bold Headline */}
        <h3 className="font-display font-black text-xs sm:text-lg md:text-2xl text-white tracking-wide uppercase leading-tight mb-1 sm:mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          {card.title}
        </h3>
      </div>

      {/* Clean Subtitle Description */}
      <p className="relative z-10 font-body text-[10px] sm:text-sm md:text-base text-slate-200/90 leading-tight sm:leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mt-1 sm:mt-2 line-clamp-3 sm:line-clamp-none">
        {card.desc}
      </p>
    </div>
  )
}

export default function WukongFeatureSection({ onReserve }: WukongFeatureSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  // Track scroll progress through this pinned experience (identical to ScrollingShowcase)
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

  // Scroll Sliding Mechanics (Matches previous segment):
  // - Phase 1 (progress 0 -> 0.30): Cards slide in from Left & Right towards center
  // - Phase 2 (progress 0.30 -> 0.70): Stable resting zone, cards locked at center (translateX = 0, opacity = 1)
  // - Phase 3 (progress 0.70 -> 1.0): Cards smoothly slide out to Left & Right as next segment arrives
  let leftSlideX = 0
  let rightSlideX = 0
  let cardOpacity = 1

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const slideDistance = isMobile ? 60 : 160

  if (progress < 0.30) {
    const t = Math.max(0, progress / 0.30)
    const ease = 1 - Math.pow(1 - t, 3) // smooth cubic ease out
    leftSlideX = -(1 - ease) * slideDistance // arrives from -slideDistance to 0
    rightSlideX = (1 - ease) * slideDistance // arrives from +slideDistance to 0
    cardOpacity = Math.max(0, ease)
  } else if (progress > 0.70) {
    const t = Math.min(1, (progress - 0.70) / 0.30)
    const ease = Math.pow(t, 2) // smooth ease in
    leftSlideX = -ease * slideDistance // vanishes to -slideDistance
    rightSlideX = ease * slideDistance // vanishes to +slideDistance
    cardOpacity = Math.max(0, 1 - ease * 1.1)
  } else {
    // Locked in center! 100% visible, fully readable
    leftSlideX = 0
    rightSlideX = 0
    cardOpacity = 1
  }

  // Background Parallax: image glides smoothly on Y
  const bgTranslateY = (progress - 0.5) * 100
  const bgScale = 1.04 + Math.sin(progress * Math.PI) * 0.03

  return (
    <section
      ref={containerRef}
      id="wukong-experience"
      className="relative h-[220vh] md:h-[250vh] bg-black text-white selection:bg-cyan-400 selection:text-black"
    >
      {/* Sticky Fullscreen Stage (Pinned during scroll like previous segment) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* 1. Full-Bleed 16:9 4K Cinematic Wukong Background */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
          style={{
            transform: `translateY(${bgTranslateY}px) scale(${bgScale})`,
            transition: 'transform 0.05s linear',
          }}
        >
          <img
            src="/assets/wukong-hero-cinematic.jpg"
            alt="Sun Wukong Black Myth Arena"
            className="w-full h-full object-cover object-center select-none brightness-105 contrast-105"
            loading="eager"
            onError={(e) => {
              e.currentTarget.src = '/assets/wukong-cinematic-hd.jpg'
            }}
          />

          {/* Atmospheric Floating Embers */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute bottom-16 left-[18%] w-2 h-2 rounded-full bg-cyan-400 blur-[1px] animate-ember shadow-[0_0_10px_#00e5ff]"
              style={{ animationDuration: '4.5s', animationDelay: '0s' }}
            />
            <div
              className="absolute bottom-24 left-[35%] w-1.5 h-1.5 rounded-full bg-amber-400 blur-[1px] animate-ember shadow-[0_0_8px_#fbbf24]"
              style={{ animationDuration: '5.2s', animationDelay: '1.2s' }}
            />
            <div
              className="absolute bottom-12 right-[25%] w-2.5 h-2.5 rounded-full bg-cyan-300 blur-[1px] animate-ember shadow-[0_0_12px_#22d3ee]"
              style={{ animationDuration: '4.8s', animationDelay: '2s' }}
            />
            <div
              className="absolute bottom-20 right-[15%] w-1.5 h-1.5 rounded-full bg-amber-300 blur-[1px] animate-ember shadow-[0_0_8px_#f59e0b]"
              style={{ animationDuration: '6s', animationDelay: '0.7s' }}
            />
            <div
              className="absolute bottom-8 left-[50%] w-2 h-2 rounded-full bg-cyan-400 blur-[1px] animate-ember shadow-[0_0_10px_#00e5ff]"
              style={{ animationDuration: '5.5s', animationDelay: '1.8s' }}
            />
          </div>

          {/* Smooth edge vignettes only - center remains bright & crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent via-50% to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent via-50% to-black/50 pointer-events-none hidden md:block" />
        </div>

        {/* 2. ONLY THE 4 LIQUID FROSTED GLASS CARDS (Sliding in from Left & Right) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8">
            {WUKONG_CARDS.map((card) => {
              const isLeft = card.side === 'left'
              const slideX = isLeft ? leftSlideX : rightSlideX

              return (
                <InteractiveLiquidCard
                  key={card.id}
                  card={card}
                  slideX={slideX}
                  opacity={cardOpacity}
                  onReserve={onReserve}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
