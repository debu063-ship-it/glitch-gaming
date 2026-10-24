import { useCallback, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import ScrollingShowcase from './components/ScrollingShowcase'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import SocialSidebar from './components/SocialSidebar'
import AutoGameMarquee from './components/AutoGameMarquee'
import WukongFeatureSection from './components/WukongFeatureSection'
import ConsolePricingSection from './components/ConsolePricingSection'
import { SlideData } from './data/slidesData'

const LOGO = '/assets/glitch-gaming-lounge-logo-transparent.png'
const ANIMATION_MS = 4200
const REDUCED_MOTION_MS = 450

export default function App() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [selectedZone, setSelectedZone] = useState<string>('Zone 01: Outlaw Sanctuary (RTX 4090)')
  const [selectedStation] = useState<number>(7)
  const timerRef = useRef<number | undefined>(undefined)
  const scrollPosition = useRef(0)

  // Trigger replaying the logo animation
  const play = useCallback(() => {
    if (isPlaying) return

    scrollPosition.current = window.scrollY
    setIsPlaying(true)
  }, [isPlaying])

  const skipIntro = useCallback(() => {
    window.clearTimeout(timerRef.current)
    setIsPlaying(false)
    document.documentElement.classList.remove('intro-active')
  }, [])

  useEffect(() => {
    if (!isPlaying) return

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    document.documentElement.classList.add('intro-active')

    timerRef.current = window.setTimeout(
      () => {
        setIsPlaying(false)
        document.documentElement.classList.remove('intro-active')
        window.scrollTo({ top: scrollPosition.current, behavior: 'instant' })
      },
      reducedMotion ? REDUCED_MOTION_MS : ANIMATION_MS,
    )

    return () => {
      window.clearTimeout(timerRef.current)
      document.documentElement.classList.remove('intro-active')
    }
  }, [isPlaying])

  const handleSelectStationFromShowcase = (slide: SlideData) => {
    setSelectedZone(`${slide.zone} (${slide.specs[0].value.split(' ')[0]})`)
    setBookingOpen(true)
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-400 selection:text-black">
      {/* Fixed Sticky Navbar */}
      <Navbar
        onReplayIntro={play}
        onOpenBooking={() => setBookingOpen(true)}
        isPlaying={isPlaying}
      />

      {/* Vertical Social & Quick Contact Bar Docked on Left */}
      <SocialSidebar onOpenVirtualTour={play} />

      <main className="relative pt-20">
        {/* Centerpiece: Cinematic Scrolling Showcase */}
        <ScrollingShowcase onSelectStation={handleSelectStationFromShowcase} />

        {/* Black Myth: Wukong Liquid Glass Experience Section */}
        <WukongFeatureSection
          onReserve={(zone) => {
            setSelectedZone(zone)
            setBookingOpen(true)
          }}
        />

        {/* Automatic Game Scrolling Marquee (15 PS5 & PC games) */}
        <AutoGameMarquee
          onSelectGame={(gameTitle) => {
            setSelectedZone(`Game: ${gameTitle} (Instant Rig Allocation)`)
            setBookingOpen(true)
          }}
        />

        {/* PlayStation 5 & PlayStation 4 Console Rates Segment (Ghost of Tsushima Background) */}
        <ConsolePricingSection
          onReserve={(tier) => {
            setSelectedZone(tier)
            setBookingOpen(true)
          }}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer onReplayIntro={play} />

      {/* Interactive Reservation Drawer/Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialZone={selectedZone}
        initialStation={selectedStation}
      />

      {/* Cinematic Logo Introduction Overlay */}
      {isPlaying && (
        <div
          className="logo-intro"
          role="dialog"
          aria-modal="true"
          aria-label="Glitch Gaming Lounge logo introduction"
        >
          <div className="ambient-glow" aria-hidden="true" />
          <div className="logo-stage">
            <img className="logo-layer logo-ghost" src={LOGO} alt="" />
            <img className="logo-layer controller-layer" src={LOGO} alt="" />
            <img className="logo-layer word-layer" src={LOGO} alt="" />
            <img className="logo-layer subtitle-layer" src={LOGO} alt="" />
            <img className="logo-layer line-trace" src={LOGO} alt="" />
            {/* Tracing neon light pens */}
            <div className="light-pen pen-controller" aria-hidden="true" />
            <div className="light-pen pen-word" aria-hidden="true" />
            <div className="light-pen pen-subtitle" aria-hidden="true" />
          </div>
          <div className="scanlines" aria-hidden="true" />

          {/* Quick Skip Intro Button */}
          <button
            type="button"
            onClick={skipIntro}
            className="intro-skip-btn"
          >
            <span>Skip Intro</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </div>
  )
}
