import { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#0A0E27]">
      {/* Sophisticated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0A0E27] via-[#141B3D] to-[#0A0E27]">
        {/* Grid overlay for depth */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px'
          }}
        />
        
        {/* Subtle gradient orbs - ajustados para mobile */}
        <div className="absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl sm:h-[600px] sm:w-[600px]" />
        <div className="absolute right-0 top-1/3 h-[300px] w-[300px] translate-x-1/3 rounded-full bg-gradient-radial from-purple-500/8 via-transparent to-transparent blur-3xl sm:h-[500px] sm:w-[500px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 py-6 sm:px-6 sm:py-8">
        {/* Premium Header - RESPONSIVO */}
        <header className="mb-8 sm:mb-10">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl sm:rounded-2xl">
            {/* Shimmer effect on border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-2xl" 
                 style={{ transform: 'translateX(-100%)', animation: 'shimmer 3s infinite' }} />
            
            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                {/* Brand Section */}
                <div className="flex items-start gap-3 sm:gap-6">
                  {/* Logo - Hexagonal shape with gradient */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 animate-pulse rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl" />
                    <div className="relative flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                      <svg viewBox="0 0 64 64" className="h-full w-full">
                        <defs>
                          <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                        <path 
                          d="M32 4 L56 18 L56 46 L32 60 L8 46 L8 18 Z" 
                          fill="url(#hexGrad)"
                          opacity="0.9"
                        />
                        <text 
                          x="32" 
                          y="38" 
                          fontFamily="system-ui, -apple-system, sans-serif" 
                          fontSize="20" 
                          fontWeight="700" 
                          fill="white" 
                          textAnchor="middle"
                        >
                          R$
                        </text>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-0 sm:pt-1">
                    <h1 className="mb-1.5 font-serif text-xl font-light tracking-tight text-white sm:mb-2 sm:text-2xl lg:text-3xl">
                      BR <span className="font-medium">Finance</span> Dashboard
                    </h1>
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
                      <div className="hidden h-px w-8 bg-gradient-to-r from-blue-400/60 to-transparent sm:block" />
                      <p className="text-xs font-light tracking-wide text-slate-400 sm:text-sm">
                        Sistema de Indicadores Econômicos • Banco Central do Brasil
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status & Tech Info */}
                <div className="flex flex-col items-start gap-2.5 sm:items-end sm:gap-3">
                  {/* Live Status */}
                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 backdrop-blur-sm sm:gap-2.5 sm:px-4">
                    <div className="relative h-2 w-2">
                      <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
                      <div className="relative h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-400 sm:text-xs">
                      Sistema Ativo
                    </span>
                  </div>

                  {/* Tech Stack - Professional badges */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {['Next.js 15', 'TypeScript', 'Tailwind CSS'].map((tech, i) => (
                      <div 
                        key={tech}
                        className="rounded border border-white/10 bg-white/5 px-2 py-0.5 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 sm:px-2.5 sm:py-1"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <span className="text-[9px] font-medium uppercase tracking-widest text-slate-400 sm:text-[10px]">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </div>
          </div>

          {/* Breadcrumb / Navigation hint */}
          <div className="mt-3 flex items-center gap-2 px-2 text-[10px] text-slate-500 sm:mt-4 sm:text-xs">
            <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Dashboard</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Taxa SELIC</span>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Professional Footer - RESPONSIVO */}
        <footer className="mt-8 border-t border-white/5 pt-6 sm:mt-12 sm:pt-8">
          <div className="flex flex-col gap-3 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-2">
                <svg className="h-3 w-3 flex-shrink-0 text-slate-600 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Dados fornecidos pela API do SGS - Banco Central</span>
              </div>
              <div className="hidden h-3 w-px bg-slate-700 sm:block" />
              <span>Atualização em tempo real</span>
              <div className="hidden h-3 w-px bg-slate-700 sm:block" />
              <span>Desenvolvido por codesbyamanda</span>
            </div>
            
            <div className="flex items-center gap-2 font-mono">
              <span className="text-slate-600">v</span>
              <span>2.1.0</span>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}