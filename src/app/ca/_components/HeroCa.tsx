import Link from 'next/link'

export default function HeroCa() {
  return (
    <section className="hero bg-night relative overflow-hidden" id="hero" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center top'
    }}>
      <div className="hero__orb" />
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <div className="h-[1px] w-8 bg-emerald-500/50" />
              <span className="text-emerald-400/90 text-xs font-bold tracking-[0.2em] uppercase">
                Programari per a professionals legals
              </span>
            </div>
            <h1 className="hero__title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance animate-fade-in-up leading-tight" style={{ animationDelay: '100ms' }}>
              D&apos;inventari a quadern particional.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[var(--ulpiano-green)]">
                Sense errors de càlcul.
              </span>
              <br />
              Sense revisió manual de la norma.
            </h1>
            <p className="hero__subtitle text-lg md:text-xl text-white/60 mt-6 max-w-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Ulpiano és la plataforma que estructura, valida i documenta el procés
              successori complet. Per a advocats, assessors i notaries que gestionen
              herències amb volum, complexitat i responsabilitat professional.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link href="/ca/demo" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)]">
                Sol·licita la teva demo gratuïta
              </Link>
              <Link href="/ca/solucions/fiscalitat-successoria" className="btn-ghost group">
                Veure com funciona el motor normatiu
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10"/><path d="M9 4l4 4-4 4"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="hero__visual min-w-0 relative animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: '400ms' }}>
            {/* Spectacular background glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_center,var(--ulpiano-green)_0%,transparent_50%)] opacity-20 blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ulpiano-green)] to-emerald-400/40 blur-[100px] opacity-50 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
            
            <div className="hero-mockup relative z-10 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(45,106,79,0.4)] bg-white rounded-xl overflow-hidden ring-1 ring-white/20">
              {/* Header inside mockup */}
              <div className="bg-white px-4 sm:px-5 pt-4 pb-3 border-b border-slate-100 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-3 sm:gap-0">
                <div>
                  <h3 className="font-bold text-ink text-base sm:text-lg flex items-center gap-2">
                    Expedients
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5">Gestiona tots els expedients del despatx des d&apos;un únic lloc.</p>
                </div>
                <div className="bg-[#111827] text-white text-[11px] font-medium px-3 py-1.5 rounded flex items-center gap-1 shadow-sm whitespace-nowrap cursor-default">
                  <span className="text-sm leading-none mt-[-1px]">+</span> Nou expedient
                </div>
              </div>
              
              {/* Tabs */}
              <div className="bg-white px-4 sm:px-5 py-2.5 border-b border-slate-100 flex items-center gap-4">
                <div className="flex border border-slate-200 rounded p-0.5 bg-slate-50">
                  <span className="px-3 py-1 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-sm text-[#6B21A8] font-semibold text-[10px] sm:text-[11px]">Tots</span>
                  <span className="px-3 py-1 text-slate-500 text-[10px] sm:text-[11px] font-medium">Els meus expedients</span>
                </div>
                <div className="text-[#6B21A8] text-[11px] font-medium flex items-center gap-1">Tots <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div>
              </div>

              {/* Table */}
              <div className="w-full bg-white pb-1 overflow-x-auto">
                <div className="min-w-[500px]">
                  {/* Table Header */}
                  <div className="grid grid-cols-[auto_1.5fr_1fr_1.5fr_1fr_auto] gap-3 px-4 sm:px-5 py-2.5 border-b border-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wider items-center">
                    <div className="w-3 h-3 rounded-[3px] border border-slate-300"></div>
                    <div>Expedient</div>
                    <div>Client</div>
                    <div>Plantilla</div>
                    <div>Estat</div>
                    <div className="text-right">Accions</div>
                  </div>
                  
                  {/* Row 1 */}
                  <div className="grid grid-cols-[auto_1.5fr_1fr_1.5fr_1fr_auto] gap-3 px-4 sm:px-5 py-3 border-b border-slate-50 items-center text-[11px] hover:bg-slate-50 transition-colors">
                    <div className="w-3 h-3 rounded-[3px] border border-slate-300"></div>
                    <div className="font-semibold text-ink flex items-center gap-2 truncate">
                      <span className="text-slate-400 text-[9px]">&gt;</span> Planificació Herència
                    </div>
                    <div className="text-[#6B21A8] font-medium underline decoration-[#6B21A8]/30 underline-offset-2 truncate">Marta Sánchez</div>
                    <div className="text-slate-500 truncate">Planificació d&apos;Escena...</div>
                    <div><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[9px] font-semibold border border-slate-200/60 whitespace-nowrap">Esborrany</span></div>
                    <div className="flex justify-end gap-1">
                      <div className="bg-[#111827] text-white px-2.5 py-1 rounded text-[9px] font-semibold">Obrir</div>
                      <div className="bg-white border border-slate-200 text-slate-600 px-1.5 py-1 rounded text-[9px] font-bold">...</div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-[auto_1.5fr_1fr_1.5fr_1fr_auto] gap-3 px-4 sm:px-5 py-3 border-b border-slate-50 items-center text-[11px] hover:bg-slate-50 transition-colors border-l-[3px] border-l-ulpiano-green pl-[13px] sm:pl-[17px]">
                    <div className="w-3 h-3 rounded-[3px] border border-slate-300"></div>
                    <div className="font-semibold text-ink flex items-center gap-2 truncate">
                      <span className="text-slate-400 text-[9px]">&gt;</span> Tramitació d&apos;Herència...
                    </div>
                    <div className="text-[#6B21A8] font-medium underline decoration-[#6B21A8]/30 underline-offset-2 truncate">Fran Gómez</div>
                    <div className="text-slate-500 truncate">Tramitació d&apos;Herència</div>
                    <div><span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[9px] font-semibold border border-blue-100 whitespace-nowrap">En tramitació</span></div>
                    <div className="flex justify-end gap-1">
                      <div className="bg-[#111827] text-white px-2.5 py-1 rounded text-[9px] font-semibold">Obrir</div>
                      <div className="bg-white border border-slate-200 text-slate-600 px-1.5 py-1 rounded text-[9px] font-bold">...</div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-[auto_1.5fr_1fr_1.5fr_1fr_auto] gap-3 px-4 sm:px-5 py-3 items-center text-[11px] hover:bg-slate-50 transition-colors">
                    <div className="w-3 h-3 rounded-[3px] border border-slate-300"></div>
                    <div className="font-semibold text-ink flex items-center gap-2 truncate">
                      <span className="text-slate-400 text-[9px]">&gt;</span> Expedient de tramitació
                    </div>
                    <div className="text-[#6B21A8] font-medium underline decoration-[#6B21A8]/30 underline-offset-2 truncate">Fran Gómez</div>
                    <div className="text-slate-500 truncate">Planificació d&apos;Escena...</div>
                    <div><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[9px] font-semibold border border-slate-200/60 whitespace-nowrap">Esborrany</span></div>
                    <div className="flex justify-end gap-1">
                      <div className="bg-[#111827] text-white px-2.5 py-1 rounded text-[9px] font-semibold">Obrir</div>
                      <div className="bg-white border border-slate-200 text-slate-600 px-1.5 py-1 rounded text-[9px] font-bold">...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
