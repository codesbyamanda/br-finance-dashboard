export function Skeleton() {
  return (
    <div className="space-y-6">
      {/* KPI Cards Skeleton */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`kpi-${i}`}
            className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl"
          >
            {/* Shimmer effect */}
            <div 
              className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent"
              style={{ animationDelay: `${i * 200}ms` }}
            />
            
            <div className="relative space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="h-3 w-24 rounded bg-white/10 animate-pulse" />
                  <div className="h-px w-12 bg-white/10" />
                </div>
                <div className="h-9 w-9 rounded-lg bg-white/10 animate-pulse" />
              </div>
              
              {/* Value */}
              <div className="h-12 w-32 rounded bg-white/10 animate-pulse" />
              
              {/* Meta info */}
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-white/10" />
                <div className="h-2.5 w-36 rounded bg-white/10 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Skeleton */}
      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl">
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="relative">
          {/* Header */}
          <div className="border-b border-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-white/10 animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 w-40 rounded bg-white/10 animate-pulse" />
                <div className="h-3 w-56 rounded bg-white/10 animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Chart area */}
          <div className="p-6">
            <div className="flex h-64 items-end gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={`bar-${i}`}
                  className="flex-1 rounded-t bg-white/10 animate-pulse"
                  style={{
                    height: `${Math.random() * 60 + 40}%`,
                    animationDelay: `${i * 50}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl">
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="relative">
          {/* Header */}
          <div className="border-b border-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-white/10 animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 w-36 rounded bg-white/10 animate-pulse" />
                <div className="h-3 w-48 rounded bg-white/10 animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Table rows */}
          <div className="p-6 space-y-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`row-${i}`}
                className="flex items-center gap-4"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="h-4 w-24 rounded bg-white/10 animate-pulse" />
                <div className="h-4 flex-1 rounded bg-white/10 animate-pulse" />
                <div className="h-4 w-20 rounded bg-white/10 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}