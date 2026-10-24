import React, { useState } from 'react'

export default function HardwareMatrix() {
  const [activeTab, setActiveTab] = useState<'pc' | 'ps5' | 'esports' | 'sim'>('pc')

  return (
    <section id="hardware-specs" className="py-24 px-4 sm:px-6 lg:px-12 bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span>⚡ ZERO COMPROMISE ARSENAL</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
            HARDWARE SPECIFICATIONS
          </h2>
          <p className="text-slate-400 font-body text-sm sm:text-base mt-3">
            Every station at Glitch Gaming Lounge is equipped with liquid-cooled flagship components, high-refresh panels, and pro-tuned peripherals.
          </p>

          {/* Arsenal Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 font-mono text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('pc')}
              className={`px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                activeTab === 'pc'
                  ? 'bg-amber-500 text-black border-amber-500 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              PC MASTER (RTX 4090)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ps5')}
              className={`px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                activeTab === 'ps5'
                  ? 'bg-cyan-400 text-black border-cyan-400 font-bold shadow-[0_0_20px_rgba(56,223,255,0.4)]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              PS5 PRO VIP LOUNGE
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('esports')}
              className={`px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                activeTab === 'esports'
                  ? 'bg-rose-500 text-black border-rose-500 font-bold shadow-[0_0_20px_rgba(244,63,94,0.4)]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              360HZ TOURNAMENT LAN
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('sim')}
              className={`px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                activeTab === 'sim'
                  ? 'bg-purple-500 text-black border-purple-500 font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              SIM RIGS &amp; VR
            </button>
          </div>
        </div>

        {/* Dynamic Spec Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeTab === 'pc' && (
            <>
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-amber-500/30 hover:border-amber-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-amber-400 font-mono text-xs">PROCESSING ENGINE</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">Ryzen 7 7800X3D</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    Massive 3D V-Cache architecture designed to eliminate all frame drops in open-world titles like Red Dead Redemption 2.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-amber-300">
                  5.0 GHz All-Core • Liquid Cooled
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-amber-500/30 hover:border-amber-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-amber-400 font-mono text-xs">GRAPHICS HORSEPOWER</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">GeForce RTX 4090 OC</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    24GB GDDR6X VRAM. Full path tracing, DLSS 3.5 ray reconstruction, and instantaneous frame generation.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-amber-300">
                  4K Ultra High @ 160+ FPS
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-amber-500/30 hover:border-amber-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-amber-400 font-mono text-xs">ULTRAWIDE IMMERSION</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">Samsung Odyssey Neo G9</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    49-inch Dual QHD curved canvas. 240Hz refresh, 0.03ms response time, Quantum Mini-LED HDR2000.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-amber-300">
                  1000R Curvature • 240Hz
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-amber-500/30 hover:border-amber-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-amber-400 font-mono text-xs">ACOUSTIC &amp; SEATING</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">Secretlab Titan Evo</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    Magnetic memory foam pillow, 4-way L-ADAPT lumbar, paired with open-back Sennheiser HD660S soundstage.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-amber-300">
                  Soundproof Pod Isolation
                </div>
              </div>
            </>
          )}

          {activeTab === 'ps5' && (
            <>
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-cyan-400 font-mono text-xs">FLAGSHIP CONSOLE</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">PlayStation 5 Pro</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    PlayStation Spectral Super Resolution (PSSR), 67% more compute units for locked 60/120fps in God of War Ragnarök.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-cyan-300">
                  Liquid Metal Cooling • 2TB NVMe
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-cyan-400 font-mono text-xs">CALIBRATED DISPLAY</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">65" LG G3 OLED + INZONE</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    Micro Lens Array brightness booster, 0.1ms pixel response, infinite contrast, and certified Dolby Vision.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-cyan-300">
                  4K 120Hz VRR • G-Sync Compatible
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-cyan-400 font-mono text-xs">PRECISION CONTROL</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">DualSense Edge</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    Replaceable stick modules, trigger stop travel adjustments, and personalized button remapping profiles.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-cyan-300">
                  Custom Leviathan Axe Actuation
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-cyan-400 font-mono text-xs">CO-OP LOUNGE SUITE</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">Dolby Atmos Vault</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    Plush deep-seated modular sofa seating for 2–4 players. Overhead spatial speakers with subwoofer rumble floor.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-cyan-300">
                  7.1.4 Surround Spatial Sound
                </div>
              </div>
            </>
          )}

          {activeTab === 'esports' && (
            <>
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-rose-500/30 hover:border-rose-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-rose-400 font-mono text-xs">COMPETITIVE CPU</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">Intel Core i9-14900KS</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    6.2 GHz maximum turbo frequency. Zero background processes, stripped Windows IoT esports image.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-rose-300">
                  DDR5 7600MHz Low-Latency CL32
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-rose-500/30 hover:border-rose-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-rose-400 font-mono text-xs">ESPORTS DISPLAY</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">BenQ ZOWIE XL2566K</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    360Hz Fast-TN panel with DyAc⁺ (Dynamic Accuracy). Flawless motion clarity for Tekken 8 whiffs and punishing.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-rose-300">
                  360Hz • 0.5ms • DyAc+
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-rose-500/30 hover:border-rose-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-rose-400 font-mono text-xs">FIGHT STICKS &amp; PADS</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">Victrix Pro FS Leverless</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    Aircraft-grade aluminum chassis with Sanwa Denshi switches and tournament lockout switch.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-rose-300">
                  Sanwa Switches • Qanba Titan Options
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-rose-500/30 hover:border-rose-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-rose-400 font-mono text-xs">TOURNAMENT NETWORK</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">Dedicated Fiber LAN</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    Dual 10Gbps symmetric fiber gateways. Direct 0.2ms internal LAN switch latency between opposing pods.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-rose-300">
                  0.2ms Inter-Station Ping
                </div>
              </div>
            </>
          )}

          {activeTab === 'sim' && (
            <>
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-purple-500/30 hover:border-purple-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-purple-400 font-mono text-xs">DIRECT DRIVE BASE</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">Fanatec Podium DD2</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    25Nm peak torque direct drive motor for authentic GT3 and Formula force feedback physics.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-purple-300">
                  25Nm Direct Drive Force Feedback
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-purple-500/30 hover:border-purple-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-purple-400 font-mono text-xs">IMMERSIVE TRIPLE RIG</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">Triple 32" QHD 165Hz</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    180-degree panoramic cockpit field-of-view seamlessly aligned with zero-bezel kit optics.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-purple-300">
                  Triple Screen Surround Horizon
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-purple-500/30 hover:border-purple-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-purple-400 font-mono text-xs">HYDRAULIC PEDAL BOX</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">Heusinkveld Ultimate+</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    140kg load cell hydraulic brake with custom elastomer tuning for threshold braking mastery.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-purple-300">
                  140kg Load Cell Brake
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-purple-500/30 hover:border-purple-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-purple-400 font-mono text-xs">MOTION PLATFORM</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-white">Next Level Motion V3</h3>
                  <p className="text-xs text-slate-400 mt-2 font-body">
                    Dual-axis pitch and roll telemetry haptic feedback delivering every curb, bump, and acceleration G-force.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-purple-300">
                  Dynamic G-Force Simulation
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
