"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import { SelicPoint } from "../types";

type Props = {
  data: SelicPoint[];
};

export function SelicChart({ data }: Props) {
  const chartData = data.map((item) => ({
    date: item.date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
    }),
    value: item.value,
    fullDate: item.date.toLocaleDateString("pt-BR"),
  }));

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-white/20 bg-[#0A0E27]/95 px-4 py-3 shadow-2xl backdrop-blur-xl">
          <div className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400">
            {payload[0].payload.fullDate}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-2xl font-bold text-white">
              {payload[0].value.toFixed(2)}
            </span>
            <span className="text-sm text-slate-400">%</span>
          </div>
          <div className="mt-2 h-px w-full bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50" />
        </div>
      );
    }
    return null;
  };

  // Custom dot for hover
  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    
    return (
      <g>
        {/* Outer glow */}
        <circle
          cx={cx}
          cy={cy}
          r={8}
          fill="url(#dotGradient)"
          opacity={0.3}
        />
        {/* Inner dot */}
        <circle
          cx={cx}
          cy={cy}
          r={4}
          fill="url(#dotGradient)"
          stroke="#0A0E27"
          strokeWidth={2}
        />
      </g>
    );
  };

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            {/* Gradient for the area fill */}
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.0} />
            </linearGradient>
            
            {/* Gradient for the line */}
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            
            {/* Gradient for dots */}
            <linearGradient id="dotGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
          
          {/* Grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.05)"
            vertical={false}
          />
          
          {/* X Axis */}
          <XAxis
            dataKey="date"
            stroke="rgba(148, 163, 184, 0.5)"
            style={{
              fontSize: '11px',
              fontFamily: 'monospace',
              fill: 'rgba(148, 163, 184, 0.7)',
            }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            interval="preserveStartEnd"
            minTickGap={30}
          />
          
          {/* Y Axis */}
          <YAxis
            stroke="rgba(148, 163, 184, 0.5)"
            style={{
              fontSize: '11px',
              fontFamily: 'monospace',
              fill: 'rgba(148, 163, 184, 0.7)',
            }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickFormatter={(value) => `${value.toFixed(2)}%`}
            width={60}
          />
          
          {/* Tooltip */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: 'rgba(59, 130, 246, 0.3)',
              strokeWidth: 1,
              strokeDasharray: '5 5',
            }}
          />
          
          {/* Area fill */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#colorValue)"
            fillOpacity={1}
          />
          
          {/* Line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={false}
            activeDot={<CustomDot />}
            animationDuration={1000}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg shadow-blue-500/30" />
          <span className="font-medium text-slate-400">Taxa SELIC (%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-gradient-to-r from-blue-400 to-purple-400" />
          <span className="text-slate-500">Evolução temporal</span>
        </div>
      </div>
    </div>
  );
}