export function EmptyState() {
  return (
    <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl">
      <div className="flex max-w-md flex-col items-center text-center">
        {/* Icon */}
        <div className="relative mb-6">
          {/* Outer glow */}
          <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-br from-slate-500/20 to-slate-600/20 blur-xl" />
          
          {/* Icon container */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
            <svg 
              className="h-10 w-10 text-slate-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2 font-serif text-xl font-light text-white">
          Nenhum Dado Disponível
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          Não foram encontrados registros para o período selecionado.
          <br />
          Tente selecionar um intervalo de tempo diferente.
        </p>

        {/* Decorative line */}
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
          <div className="h-1.5 w-1.5 rounded-full bg-slate-600" />
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
        </div>

        {/* Optional hint */}
        <div className="mt-6 flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2 text-xs text-slate-500">
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Os dados são atualizados diariamente pelo Banco Central</span>
        </div>
      </div>
    </div>
  );
}