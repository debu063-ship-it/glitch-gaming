import { useState } from 'react'

interface SocialSidebarProps {
  onOpenVirtualTour?: () => void
}

interface SidebarItem {
  id: string
  label: string
  bgColor: string
  href: string
  isAction?: boolean
  icon: React.ReactNode
}

export default function SocialSidebar({ onOpenVirtualTour }: SocialSidebarProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const items: SidebarItem[] = [
    {
      id: 'phone',
      label: 'Call Us: (555) 454-8240',
      bgColor: '#1c4bb5',
      href: 'tel:+15554548240',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.25 1.02l-2.22 2.09z" />
        </svg>
      ),
    },
    {
      id: 'facebook',
      label: 'Facebook / GlitchLounge',
      bgColor: '#d8533c',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
    },
    {
      id: 'x',
      label: 'X (Twitter) / @GlitchLounge',
      bgColor: '#c89218',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      id: 'linkedin',
      label: 'LinkedIn / Glitch-Gaming',
      bgColor: '#0077b5',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      id: 'youtube',
      label: 'YouTube / Glitch Arena TV',
      bgColor: '#e60000',
      href: 'https://youtube.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      id: 'instagram',
      label: 'Instagram / @glitch_lounge',
      bgColor: '#0284c7',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      id: 'tour360',
      label: '360° Virtual Lounge Tour',
      bgColor: '#d89f24',
      href: '#',
      isAction: true,
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      ),
    },
    {
      id: 'news',
      label: 'Tournament News & Events',
      bgColor: '#ea6c13',
      href: '#experience-zone',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8M18 18h-8M18 6h-8M18 10h-8" />
        </svg>
      ),
    },
    {
      id: 'spotify',
      label: 'Lounge Beats & Synthwave',
      bgColor: '#16a34a',
      href: 'https://spotify.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.303a.75.75 0 0 1-1.03.247c-2.822-1.724-6.375-2.114-10.56-1.159a.75.75 0 0 1-.336-1.462c4.58-1.044 8.52-.596 11.68 1.344a.75.75 0 0 1 .246 1.03zm1.467-3.262a.938.938 0 0 1-1.288.309c-3.23-1.986-8.155-2.56-11.975-1.4a.938.938 0 1 1-.546-1.794c4.364-1.326 9.79-.687 13.5 1.597a.938.938 0 0 1 .309 1.288zm.126-3.395c-3.873-2.3-10.264-2.512-13.978-1.385a1.125 1.125 0 1 1-.655-2.153c4.27-1.297 11.32-1.05 15.787 1.6a1.125 1.125 0 0 1-1.154 1.938z" />
        </svg>
      ),
    },
  ]

  return (
    <aside
      aria-label="Social and Quick Contact Links"
      className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 flex-col shadow-2xl select-none"
    >
      {items.map((item) => {
        const isHovered = hoveredId === item.id

        return (
          <div
            key={item.id}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {item.isAction ? (
              <button
                type="button"
                onClick={onOpenVirtualTour}
                className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center text-white transition-all duration-200 hover:brightness-110 active:brightness-95 cursor-pointer relative"
                style={{ backgroundColor: item.bgColor }}
                aria-label={item.label}
              >
                {item.icon}
              </button>
            ) : (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center text-white transition-all duration-200 hover:brightness-110 active:brightness-95 cursor-pointer relative"
                style={{ backgroundColor: item.bgColor }}
                aria-label={item.label}
              >
                {item.icon}
              </a>
            )}

            {/* Slide-out tooltip label on hover */}
            <div
              className={`absolute left-full ml-2 px-3 py-1.5 rounded-md bg-black/90 text-white font-mono text-xs whitespace-nowrap border border-white/20 shadow-xl pointer-events-none transition-all duration-200 ${
                isHovered
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-2'
              }`}
            >
              <div
                className="w-1.5 h-1.5 absolute -left-1 top-1/2 -translate-y-1/2 rotate-45 bg-black border-l border-b border-white/20"
              />
              <span className="font-semibold text-cyan-300 mr-1.5">●</span>
              {item.label}
            </div>
          </div>
        )
      })}
    </aside>
  )
}
