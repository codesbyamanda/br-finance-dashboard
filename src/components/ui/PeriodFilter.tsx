"use client";

import { Period } from "@/features/sgs/types";

interface Props {
  value: Period;
  onChange: (value: Period) => void;
}

const options: { label: string; value: Period }[] = [
  { label: "7 dias", value: "7d" },
  { label: "30 dias", value: "30d" },
  { label: "3 meses", value: "3m" },
  { label: "1 ano", value: "1y" },
];

export function PeriodFilter({ value, onChange }: Props) {
  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
      {options.map((option) => {
        const isActive = value === option.value;
        
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`
              relative px-4 py-2 text-sm font-medium transition-all duration-300
              ${
                isActive
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-300"
              }
            `}
          >
            {/* Active background with gradient */}
            {isActive && (
              <>
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 opacity-90" />
                <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/20 to-transparent" />
              </>
            )}
            
            {/* Hover effect for inactive */}
            {!isActive && (
              <div className="absolute inset-0 rounded-md bg-white/0 transition-colors duration-300 hover:bg-white/[0.05]" />
            )}
            
            {/* Text */}
            <span className="relative z-10 tracking-wide">
              {option.label}
            </span>
            
            {/* Active indicator dot */}
            {isActive && (
              <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white shadow-lg shadow-white/50" />
            )}
          </button>
        );
      })}
    </div>
  );
}