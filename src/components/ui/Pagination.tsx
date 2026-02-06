interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-end gap-3">
      {/* Previous Button */}
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:bg-white/5 disabled:hover:text-slate-400"
      >
        <div className="flex items-center gap-2">
          <svg 
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 group-disabled:translate-x-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Anterior</span>
        </div>
      </button>

      {/* Page Indicator */}
      <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
            Página
          </span>
          <div className="flex h-7 min-w-[28px] items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-500 px-2">
            <span className="font-mono text-sm font-bold text-white">
              {page}
            </span>
          </div>
          <span className="text-slate-600">/</span>
          <span className="font-mono text-sm text-slate-400">
            {totalPages}
          </span>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:bg-white/5 disabled:hover:text-slate-400"
      >
        <div className="flex items-center gap-2">
          <span>Próxima</span>
          <svg 
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-disabled:translate-x-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
}