import { useState, useEffect, useRef, useCallback } from 'react'
import { SLIDES, SlideData } from '../data/slidesData'

interface ScrollingShowcaseProps {
  onSelectStation: (slide: SlideData) => void
}

export default function ScrollingShowcase({ onSelectStation }: ScrollingShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  // Track scroll progress through the pinned section
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

  const slideFloat = progress * (SLIDES.length - 1)

  return (
    <section
      ref={containerRef}
      id="experience-zone"
      className="relative h-[360vh] md:h-[400vh] bg-black text-white selection:bg-cyan-400 selection:text-black"
    >
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Render each slide layered in the full-bleed viewport */}
        {SLIDES.map((slide, idx) => {
          const diff = slideFloat - idx
          const isVisible = Math.abs(diff) < 1.15

          // Scroll & Vanish Mechanics:
          // - As you scroll down past a slide (diff > 0):
          //   Image scrolls downwards: translateY = diff * 130px, opacity fades out
          //   Typography vanishes: translateX = -diff * 150px, opacity fades out
          // - As you scroll down towards next slide (diff < 0):
          //   Image arrives from above: translateY = diff * 90px, opacity fades in
          //   Typography arrives from left: translateX = diff * 150px (starts at -150px, moves to 0), opacity fades in
          const imageTranslateY = diff >= 0 ? diff * 130 : diff * 90
          const imageScale = diff >= 0 ? 1 + diff * 0.04 : 1 - Math.abs(diff) * 0.04
          const imageOpacity = Math.max(0, 1 - Math.abs(diff) * 1.8)

          const textTranslateX = diff >= 0 ? -diff * 160 : diff * 160
          const textOpacity = Math.max(0, 1 - Math.abs(diff) * 2.2)

          return (
            <div
              key={slide.id}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                display: isVisible ? 'block' : 'none',
              }}
            >
              {/* 1. Full-Bleed 4K Background Game Image (Responsive for mobile & laptop) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  transform: `translateY(${imageTranslateY}px) scale(${imageScale})`,
                  opacity: imageOpacity,
                  transition: 'transform 0.05s linear, opacity 0.05s linear',
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.franchise}
                  className="w-full h-full object-cover object-[72%_center] md:object-right select-none"
                  loading="eager"
                />

                {/* Left Dark Gradient Overlay for Laptop / Desktop */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 via-42% to-transparent hidden md:block pointer-events-none" />

                {/* Vertical & Tint Dark Gradient Overlay for Mobile Phones */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 via-60% to-black/35 md:hidden pointer-events-none" />
                <div className="absolute inset-0 bg-black/20 md:hidden pointer-events-none" />

                {/* Top and Bottom Vignette for seamless navbar & stage edge integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent via-35% to-black/70 pointer-events-none" />

                {/* Giant Faint Background Stencil Watermark (e.g. WEST) */}
                <div className="absolute right-4 bottom-14 sm:bottom-4 lg:right-20 lg:bottom-12 select-none pointer-events-none">
                  <span className="font-bebas font-black text-[26vw] sm:text-[22vw] text-white/[0.04] tracking-tighter uppercase leading-none block">
                    {slide.watermark}
                  </span>
                </div>
              </div>

              {/* 2. Hero Typography Content on the Left (Responsive on Phone & Laptop) */}
              <div
                className="relative z-20 h-full w-full max-w-7xl mx-auto px-6 sm:px-12 md:pl-20 lg:pl-24 pr-6 sm:pr-12 lg:pr-16 flex flex-col justify-center pointer-events-auto"
                style={{
                  transform: `translateX(${textTranslateX}px)`,
                  opacity: textOpacity,
                  transition: 'transform 0.05s linear, opacity 0.05s linear',
                }}
              >
                <div className="max-w-2xl pt-20 sm:pt-0">
                  {/* Category Indicator Badge */}
                  <div className="mb-3 sm:mb-6">
                    <span className="font-display font-semibold text-xs sm:text-sm tracking-[0.22em] text-white/90 uppercase">
                      {slide.categoryTitle}
                    </span>
                  </div>

                  {/* Mammoth Headline */}
                  <h1 className="font-bebas font-black text-[13vw] sm:text-[11vw] md:text-[8.8vw] lg:text-[7.4vw] xl:text-[6.8vw] leading-[0.88] tracking-[0.02em] uppercase select-none mb-4 sm:mb-6">
                    {/* Solid White Words: 'RIDE', 'BEYOND' */}
                    {slide.solidWords.map((word, wIdx) => (
                      <span key={`solid-${wIdx}`} className="block text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                        {word}
                      </span>
                    ))}

                    {/* Hollow Stroked Words: 'THE', 'HORIZON.' */}
                    {slide.strokeWords.map((word, sIdx) => (
                      <span key={`stroke-${sIdx}`} className="block text-stroke drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                        {word}
                      </span>
                    ))}
                  </h1>

                  {/* Subtitle Description */}
                  <p className="font-body text-slate-300 text-xs sm:text-base md:text-lg max-w-sm sm:max-w-lg leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {slide.subtitle}
                  </p>

                  {/* Rounded Corner Blurred Rectangle Card Button */}
                  <div>
                    <button
                      type="button"
                      onClick={() => onSelectStation(slide)}
                      className="inline-flex items-center gap-3.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-black/45 hover:bg-black/70 border border-white/20 hover:border-cyan-400/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] text-white hover:text-cyan-300 transition-all duration-300 cursor-pointer group hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="font-display font-bold text-xs sm:text-sm tracking-[0.22em] uppercase">
                        {slide.ctaText}
                      </span>
                      <span className="w-7 h-7 rounded-lg bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center text-xs transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                        ↗
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}


      </div>
    </section>
  )
}
