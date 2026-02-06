export function ErrorState() {
  return (
    <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-red-600/5 backdrop-blur-xl">
      <div className="flex max-w-md flex-col items-center text-center">
        {/* Icon with animation */}
        <div className="relative mb-6">
          {/* Pulsing outer glow */}
          <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-br from-red-500/30 to-rose-500/30 blur-2xl" />
          
          {/* Icon container */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-rose-500/10">
            <svg 
              className="h-10 w-10 text-red-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2 font-serif text-xl font-light text-red-400">
          Erro ao Carregar Dados
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          Não foi possível estabelecer conexão com a API do Banco Central.
          <br />
          Por favor, tente novamente em alguns instantes.
        </p>

        {/* Action button */}
        <button
          onClick={() => window.location.reload()}
          className="group relative overflow-hidden rounded-lg border border-red-500/30 bg-gradient-to-br from-red-500/20 to-rose-500/20 px-6 py-2.5 text-sm font-medium text-red-400 backdrop-blur-sm transition-all duration-300 hover:border-red-400/50 hover:from-red-500/30 hover:to-rose-500/30 hover:text-red-300 hover:shadow-lg hover:shadow-red-500/20"
        >
          <div className="flex items-center gap-2">
            <svg 
              className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
              />
            </svg>
            <span>Tentar Novamente</span>
          </div>
        </button>

        {/* Decorative line */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
          <div className="h-1.5 w-1.5 rounded-full bg-red-600/50" />
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
        </div>

        {/* Error details hint */}
        <div className="mt-6 flex items-start gap-2 rounded-lg border border-red-500/10 bg-red-500/5 px-4 py-2.5 text-left text-xs text-slate-500">
          <svg className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <div className="mb-1 font-medium text-red-400/80">Possíveis causas:</div>
            <ul className="list-inside list-disc space-y-0.5 text-slate-500">
              <li>Problema temporário na API do SGS</li>
              <li>Conexão de internet instável</li>
              <li>Manutenção programada do sistema</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}