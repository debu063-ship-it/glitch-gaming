import { useState } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  initialZone?: string
  initialStation?: number
}

export default function BookingModal({
  isOpen,
  onClose,
  initialZone = 'Zone 01: Outlaw Sanctuary (RTX 4090)',
  initialStation,
}: BookingModalProps) {
  const [zone, setZone] = useState(initialZone)
  const [stationNum, setStationNum] = useState<number>(initialStation || 7)
  const [duration, setDuration] = useState<number>(2)
  const [players, setPlayers] = useState<number>(1)
  const [drinkIncluded, setDrinkIncluded] = useState<boolean>(true)
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false)
  const [gamerTag, setGamerTag] = useState('')

  if (!isOpen) return null

  const hourlyRate = zone.includes('PS5') ? 9 : zone.includes('Outlaw') ? 8 : 7
  const baseCost = hourlyRate * duration * players
  const drinkCost = drinkIncluded ? 5 * players : 0
  const total = baseCost + drinkCost

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault()
    setIsConfirmed(true)
  }

  const handleReset = () => {
    setIsConfirmed(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-slate-950 border border-cyan-500/30 shadow-[0_0_50px_rgba(56,223,255,0.2)] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <div>
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                {isConfirmed ? 'RESERVATION CONFIRMED' : 'RESERVE GAMING POD'}
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                GLITCH GAMING LOUNGE // TELEMETRY TERMINAL
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center text-sm font-mono cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        {isConfirmed ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto text-2xl mb-4">
              ✓
            </div>
            <h4 className="font-display font-black text-2xl text-white uppercase">
              RIG IS LOCKED &amp; LOADED!
            </h4>
            <p className="text-xs font-mono text-slate-300 mt-2">
              Welcome, <strong className="text-cyan-400">{gamerTag || 'Player 1'}</strong>. Your station is reserved.
            </p>

            <div className="my-6 p-4 rounded-xl bg-slate-900/90 border border-white/10 text-left font-mono text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">ASSIGNED POD:</span>
                <span className="text-cyan-400 font-bold">
                  POD #{stationNum < 10 ? `0${stationNum}` : stationNum}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">ZONE:</span>
                <span className="text-white">{zone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">DURATION:</span>
                <span className="text-white">{duration} Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">TOTAL PAID:</span>
                <span className="text-emerald-400 font-bold">${total}.00</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10">
                <span className="text-slate-400">ACCESS PASS CODE:</span>
                <span className="text-amber-400 font-bold tracking-widest">
                  GLITCH-POD{stationNum}-77X
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-body mb-6">
              Show this code to the bar counter upon arrival or check in directly on Pod #{stationNum}&apos;s touchscreen.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold text-sm tracking-wider uppercase transition-all cursor-pointer shadow-[0_0_20px_rgba(56,223,255,0.4)]"
            >
              DONE &amp; RETURN TO LOUNGE
            </button>
          </div>
        ) : (
          <form onSubmit={handleConfirm} className="p-6 space-y-4 font-mono text-xs">
            {/* Gamer Tag */}
            <div>
              <label className="block text-slate-400 mb-1.5 tracking-wider uppercase">
                Gamer Tag / Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. CyberViper99"
                value={gamerTag}
                onChange={(e) => setGamerTag(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>

            {/* Zone Selection */}
            <div>
              <label className="block text-slate-400 mb-1.5 tracking-wider uppercase">
                Select Gaming Zone
              </label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white focus:outline-none focus:border-cyan-400 font-mono"
              >
                <option value="Zone 01: Outlaw Sanctuary (RTX 4090)">
                  Zone 01: Outlaw Sanctuary (RTX 4090 • 49&quot; OLED) - $8/hr
                </option>
                <option value="Zone 02: Realm of Valhalla (PS5 Pro)">
                  Zone 02: Realm of Valhalla (PS5 Pro • 65&quot; OLED) - $9/hr
                </option>
                <option value="Zone 03: Iron Fist Arena (360Hz)">
                  Zone 03: Iron Fist Arena (360Hz DyAc+ • Fast LAN) - $7/hr
                </option>
              </select>
            </div>

            {/* Station Number & Players */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1.5 tracking-wider uppercase">
                  Station Pod #
                </label>
                <select
                  value={stationNum}
                  onChange={(e) => setStationNum(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white focus:outline-none focus:border-cyan-400 font-mono"
                >
                  {Array.from({ length: 42 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      Pod #{n < 10 ? `0${n}` : n}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1.5 tracking-wider uppercase">
                  Duration (Hours)
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[2, 4, 8].map((hrs) => (
                    <button
                      key={hrs}
                      type="button"
                      onClick={() => setDuration(hrs)}
                      className={`py-2 rounded-lg border text-center transition-all cursor-pointer ${
                        duration === hrs
                          ? 'bg-cyan-400 text-black border-cyan-400 font-bold'
                          : 'bg-black text-slate-300 border-white/15 hover:border-white/40'
                      }`}
                    >
                      {hrs}h
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Drink add-on */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  id="drink-check"
                  checked={drinkIncluded}
                  onChange={(e) => setDrinkIncluded(e.target.checked)}
                  className="w-4 h-4 rounded border-cyan-500 text-cyan-400 accent-cyan-400 cursor-pointer"
                />
                <label htmlFor="drink-check" className="cursor-pointer">
                  <div className="text-white font-medium">Add Signature Cafe Drink</div>
                  <div className="text-[10px] text-slate-400">
                    Cold brew, blue spirulina elixir, or dragonfruit fizz (+$5)
                  </div>
                </label>
              </div>
              <span className="text-cyan-400 font-bold">+$5.00</span>
            </div>

            {/* Pricing Summary */}
            <div className="p-3.5 rounded-xl bg-black border border-white/10 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400">ESTIMATED TOTAL:</span>
                <div className="text-[10px] text-slate-500">
                  {duration} hrs @ ${hourlyRate}/hr {drinkIncluded ? '+ Drink' : ''}
                </div>
              </div>
              <span className="font-display font-black text-2xl text-cyan-400">
                ${total}.00
              </span>
            </div>

            {/* Confirm Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-display font-bold text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(56,223,255,0.4)]"
            >
              CONFIRM &amp; RESERVE POD
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
