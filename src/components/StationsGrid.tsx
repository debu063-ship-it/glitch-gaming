import { useState } from 'react'

interface StationsGridProps {
  onSelectStationNumber: (stationNumber: number, zoneName: string) => void
}

interface StationInfo {
  num: number
  zone: string
  zoneId: string
  type: string
  specs: string
  status: 'available' | 'occupied' | 'reserved'
  pricePerHour: number
}

// Generate realistic stations 1 to 42
const ALL_STATIONS: StationInfo[] = Array.from({ length: 42 }, (_, i) => {
  const num = i + 1
  if (num <= 12) {
    return {
      num,
      zone: 'Zone 01: Outlaw Sanctuary',
      zoneId: 'z1',
      type: 'PC Master Ultrawide Rig',
      specs: 'RTX 4090 • 49" OLED 240Hz',
      status: [3, 7, 11].includes(num) ? 'occupied' : [5].includes(num) ? 'reserved' : 'available',
      pricePerHour: 8,
    }
  } else if (num <= 24) {
    return {
      num,
      zone: 'Zone 02: Realm of Valhalla',
      zoneId: 'z2',
      type: 'PS5 Pro Co-op Lounge',
      specs: 'PS5 Pro • 65" LG OLED • DualSense Edge',
      status: [14, 18, 22].includes(num) ? 'occupied' : 'available',
      pricePerHour: 9,
    }
  } else {
    return {
      num,
      zone: 'Zone 03: Iron Fist Arena',
      zoneId: 'z3',
      type: 'Esports 360Hz Tournament Pod',
      specs: 'i9-14900KS • 360Hz DyAc+ • Victrix FS',
      status: [27, 28, 33, 40].includes(num) ? 'occupied' : [36].includes(num) ? 'reserved' : 'available',
      pricePerHour: 7,
    }
  }
})

export default function StationsGrid({ onSelectStationNumber }: StationsGridProps) {
  const [filter, setFilter] = useState<'all' | 'z1' | 'z2' | 'z3'>('all')

  const filteredStations = filter === 'all'
    ? ALL_STATIONS
    : ALL_STATIONS.filter((s) => s.zoneId === filter)

  const availableCount = ALL_STATIONS.filter((s) => s.status === 'available').length

  return (
    <section id="stations-grid" className="py-24 px-4 sm:px-6 lg:px-12 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 223, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 223, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              LIVE TELEMETRY &amp; SEATING
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              STATION ARSENAL <span className="text-cyan-400">[42 PODS]</span>
            </h2>
            <p className="text-slate-400 font-body text-sm sm:text-base mt-2 max-w-xl">
              Tap any available pod on the live arena floor to claim your rig instantly. Zero queue, instant game library sync.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-cyan-400 text-black border-cyan-400 font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              ALL PODS ({ALL_STATIONS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('z1')}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                filter === 'z1'
                  ? 'bg-amber-400 text-black border-amber-400 font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              ZONE 01: ULTRAWIDE PC
            </button>
            <button
              type="button"
              onClick={() => setFilter('z2')}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                filter === 'z2'
                  ? 'bg-cyan-400 text-black border-cyan-400 font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              ZONE 02: PS5 PRO LOUNGE
            </button>
            <button
              type="button"
              onClick={() => setFilter('z3')}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                filter === 'z3'
                  ? 'bg-rose-400 text-black border-rose-400 font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              ZONE 03: 360HZ ARENA
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-400 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </span>
            <span>AVAILABLE ({availableCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-rose-500/20 border border-rose-400/40 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            </span>
            <span>IN SESSION (8)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </span>
            <span>RESERVED (2)</span>
          </div>
        </div>

        {/* The 42-Station Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
          {filteredStations.map((station) => {
            const isAvail = station.status === 'available'
            const isOcc = station.status === 'occupied'

            return (
              <button
                key={station.num}
                type="button"
                disabled={!isAvail}
                onClick={() => onSelectStationNumber(station.num, station.zone)}
                className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all duration-200 group relative overflow-hidden ${
                  isAvail
                    ? 'bg-slate-900/80 border-white/10 hover:border-cyan-400/70 hover:bg-slate-800/80 hover:scale-[1.02] cursor-pointer shadow-lg'
                    : isOcc
                      ? 'bg-rose-950/20 border-rose-900/30 opacity-60 cursor-not-allowed'
                      : 'bg-amber-950/20 border-amber-900/30 opacity-70 cursor-not-allowed'
                }`}
              >
                {/* Top: Station Number & Status Dot */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono font-bold text-sm text-white group-hover:text-cyan-300">
                    POD #{station.num < 10 ? `0${station.num}` : station.num}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isAvail
                        ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
                        : isOcc
                          ? 'bg-rose-500'
                          : 'bg-amber-500'
                    }`}
                  />
                </div>

                {/* Middle: Rig Type */}
                <div className="my-1">
                  <div className="text-[11px] font-mono text-cyan-300 font-medium truncate">
                    {station.type}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">
                    {station.specs}
                  </div>
                </div>

                {/* Bottom: Rate & Reserve prompt */}
                <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white/80 font-bold">${station.pricePerHour}/hr</span>
                  <span className={`text-[10px] font-bold uppercase ${isAvail ? 'text-emerald-400 group-hover:text-cyan-300' : 'text-slate-500'}`}>
                    {isAvail ? 'CLAIM →' : station.status}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
