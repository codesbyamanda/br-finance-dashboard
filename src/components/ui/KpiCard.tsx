type Props = {
  label: string;
  value: string;
  highlight?: "positive" | "negative" | "neutral";
};

export function KpiCard({ label, value, highlight = "neutral" }: Props) {
  const config = {
    positive: {
      gradient: "from-emerald-500 to-green-500",
      iconBg: "border-emerald-500/20 bg-emerald-500/10",
      iconColor: "text-emerald-400",
      textColor: "text-emerald-400 group-hover:text-emerald-300",
      accentLine: "from-emerald-500/0 via-emerald-500/50 to-emerald-500/0",
      hoverBg: "from-emerald-500/5 to-transparent",
      dotColor: "bg-emerald-400",
    },
    negative: {
      gradient: "from-red-500 to-rose-500",
      iconBg: "border-red-500/20 bg-red-500/10",
      iconColor: "text-red-400",
      textColor: "text-red-400 group-hover:text-red-300",
      accentLine: "from-red-500/0 via-red-500/50 to-red-500/0",
      hoverBg: "from-red-500/5 to-transparent",
      dotColor: "bg-red-400",
    },
    neutral: {
      gradient: "from-blue-500 to-purple-500",
      iconBg: "border-blue-500/20 bg-blue-500/10",
      iconColor: "text-blue-400",
      textColor: "text-white group-hover:text-blue-100",
      accentLine: "from-blue-500/0 via-blue-500/50 to-blue-500/0",
      hoverBg: "from-blue-500/5 to-transparent",
      dotColor: "bg-blue-400",
    },
  };

  const styles = config[highlight];

  const getIcon = () => {
    if (highlight === "positive") {
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    }
    if (highlight === "negative") {
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      );
    }
    return (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.15] hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Animated gradient on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.hoverBg}`} />
      </div>

      <div className="relative p-6">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <div className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
              {label}
            </div>
            <div className={`h-px w-12 bg-gradient-to-r ${styles.gradient} opacity-60`} />
          </div>
          <div className={`rounded-lg border ${styles.iconBg} p-2 transition-all duration-300 group-hover:border-opacity-30 group-hover:scale-110`}>
            <div className={styles.iconColor}>
              {getIcon()}
            </div>
          </div>
        </div>

        {/* Value */}
        <div className="mb-4">
          <div className={`font-mono text-5xl font-light tracking-tight transition-all duration-300 ${styles.textColor}`}>
            {value}
          </div>
        </div>

        {/* Meta info - optional, can be customized */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className={`h-1 w-1 rounded-full ${styles.dotColor}`} />
          <span>Período selecionado</span>
        </div>

        {/* Bottom accent */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${styles.accentLine} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      </div>
    </div>
  );
}