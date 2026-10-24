import { useState } from 'react'

interface GameMarqueeItem {
  id: string
  title: string
  subtitle: string
  platform: 'PS5 PRO' | 'PC 4K' | 'ESPORTS'
  image: string
}

interface AutoGameMarqueeProps {
  onSelectGame?: (gameTitle: string) => void
}

const FEATURED_GAMES: GameMarqueeItem[] = [
  {
    id: 'gta5',
    title: 'GTA V',
    subtitle: 'EXPANDED & ENHANCED',
    platform: 'PS5 PRO',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
  },
  {
    id: 'gow',
    title: 'GOD OF WAR',
    subtitle: 'RAGNARÖK',
    platform: 'PS5 PRO',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg',
  },
  {
    id: 'eafc',
    title: 'EA SPORTS FC 25',
    subtitle: 'ULTIMATE TEAM',
    platform: 'PS5 PRO',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg',
  },
  {
    id: 'spiderman',
    title: 'SPIDER-MAN',
    subtitle: 'MILES MORALES',
    platform: 'PS5 PRO',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg',
  },
  {
    id: 'tlou',
    title: 'THE LAST OF US',
    subtitle: 'PART I REMAKE',
    platform: 'PS5 PRO',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg',
  },
  {
    id: 'ghost',
    title: 'GHOST',
    subtitle: 'OF TSUSHIMA',
    platform: 'PC 4K',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg',
  },
  {
    id: 'horizon',
    title: 'HORIZON',
    subtitle: 'FORBIDDEN WEST',
    platform: 'PC 4K',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2420110/header.jpg',
  },
  {
    id: 'cyberpunk',
    title: 'CYBERPUNK 2077',
    subtitle: 'PHANTOM LIBERTY',
    platform: 'PC 4K',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
  },
  {
    id: 'eldenring',
    title: 'ELDEN RING',
    subtitle: 'SHADOW OF THE ERDTREE',
    platform: 'PC 4K',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
  },
  {
    id: 'wukong',
    title: 'BLACK MYTH',
    subtitle: 'WUKONG',
    platform: 'PC 4K',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg',
  },
  {
    id: 'tekken8',
    title: 'TEKKEN 8',
    subtitle: 'IRON FIST ARENA',
    platform: 'ESPORTS',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/header.jpg',
  },
  {
    id: 'rdr2',
    title: 'RED DEAD 2',
    subtitle: 'OUTLAW SANCTUARY',
    platform: 'PC 4K',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
  },
  {
    id: 'forza',
    title: 'FORZA HORIZON 5',
    subtitle: 'SIM RACING POD',
    platform: 'PC 4K',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg',
  },
  {
    id: 'cs2',
    title: 'COUNTER-STRIKE 2',
    subtitle: '360HZ TOURNAMENT',
    platform: 'ESPORTS',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg',
  },
  {
    id: 'cod',
    title: 'CALL OF DUTY',
    subtitle: 'WARZONE BATTLEGROUND',
    platform: 'PC 4K',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg',
  },
]

export default function AutoGameMarquee({ onSelectGame }: AutoGameMarqueeProps) {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null)

  // Duplicate for seamless 0-jump infinite loop
  const marqueeList = [...FEATURED_GAMES, ...FEATURED_GAMES]

  return (
    <section className="relative w-full py-8 bg-black/95 overflow-hidden border-y border-cyan-500/20 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
      {/* Ambient background glow accents */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="animate-game-marquee flex items-center gap-4 sm:gap-5 px-4 cursor-pointer">
        {marqueeList.map((game, idx) => {
          const isHovered = hoveredGame === `${game.id}-${idx}`

          return (
            <div
              key={`${game.id}-${idx}`}
              onMouseEnter={() => setHoveredGame(`${game.id}-${idx}`)}
              onMouseLeave={() => setHoveredGame(null)}
              onClick={() => onSelectGame && onSelectGame(game.title)}
              className="relative flex-shrink-0 w-52 sm:w-60 md:w-64 h-32 sm:h-36 -skew-x-12 overflow-hidden rounded-md border border-cyan-400/80 bg-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(56,223,255,0.7)] group"
            >
              {/* Counter-skew inner container to keep artwork & text upright */}
              <div className="w-[124%] h-full -ml-[12%] skew-x-12 relative overflow-hidden">
                {/* Game Artwork */}
                <img
                  src={game.image}
                  alt={game.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for Typography Clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-50% to-transparent pointer-events-none" />

                {/* Top Corner Platform Tag */}
                <div className="absolute top-2 right-3 pointer-events-none">
                  <span className="text-[9px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-black/70 text-cyan-300 border border-cyan-400/40 backdrop-blur-sm">
                    {game.platform}
                  </span>
                </div>

                {/* Bottom Game Title & Subtitle */}
                <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none">
                  <h4 className="font-display font-black text-xs sm:text-sm tracking-wider uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] truncate group-hover:text-cyan-300 transition-colors">
                    {game.title}
                  </h4>
                  <p className="text-[9px] font-mono tracking-widest text-slate-300/80 uppercase truncate">
                    {game.subtitle}
                  </p>
                </div>

                {/* Neon Cyan Border Glint on Hover */}
                <div
                  className={`absolute inset-0 border border-cyan-400 pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
