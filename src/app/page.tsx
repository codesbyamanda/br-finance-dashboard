"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Skeleton } from "@/components/ui/Skeleton";
import { ErrorState } from "@/components/ui/ErrorState";
import { EmptyState } from "@/components/ui/EmptyState";
import { KpiCard } from "@/components/ui/KpiCard";
import { PeriodFilter } from "@/components/ui/PeriodFilter";
import { useSelicQuery } from "@/features/sgs/queries";
import { SelicTable } from "@/features/sgs/components/SelicTable";
import { SelicChart } from "@/features/sgs/components/SelicChart";
import {
  getLastValue,
  getAverageValue,
  getVariation,
} from "@/features/sgs/utils";
import { filterByPeriod } from "@/features/sgs/utils/filterByPeriod";
import { Period } from "@/features/sgs/types";


export default function HomePage() {
  const { data, isLoading, isError } = useSelicQuery();
  const [period, setPeriod] = useState<Period>("30d");

  const filteredData = data ? filterByPeriod(data, period) : [];

  const lastValue = filteredData.length
    ? getLastValue(filteredData)
    : 0;

  const averageValue = filteredData.length
    ? getAverageValue(filteredData)
    : 0;

  const variation = filteredData.length
    ? getVariation(filteredData)
    : 0;

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Page Title Section */}
        <div className="flex items-end justify-between border-b border-white/5 pb-6">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl font-light text-white">
                Taxa SELIC
              </h2>
            </div>
            <p className="pl-[52px] text-sm text-slate-500">
              Sistema Especial de Liquidação e Custódia • Meta estabelecida pelo COPOM
            </p>
          </div>

          <PeriodFilter value={period} onChange={setPeriod} />
        </div>

        {/* STATES */}
        {isLoading && <Skeleton />}
        {isError && <ErrorState />}
        {!isLoading && !isError && filteredData.length === 0 && (
          <EmptyState />
        )}

        {filteredData.length > 0 && (
          <>
            {/* KPI CARDS - Professional Grid */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {/* Card 1 - Current Value */}
              <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.15] hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Animated gradient on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
                </div>

                <div className="relative p-6">
                  {/* Header */}
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <div className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
                        Valor Atual
                      </div>
                      <div className="h-px w-12 bg-gradient-to-r from-blue-400/60 to-transparent" />
                    </div>
                    <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-2 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/20 group-hover:scale-110">
                      <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-4">
                    <div className="font-mono text-5xl font-light tracking-tight text-white transition-all duration-300 group-hover:text-blue-100">
                      {lastValue.toFixed(2)}
                      <span className="ml-1 text-3xl text-slate-400">%</span>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <div className="h-1 w-1 rounded-full bg-blue-400" />
                    <span>Taxa referencial do período</span>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>

              {/* Card 2 - Average */}
              <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.15] hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
                </div>

                <div className="relative p-6">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <div className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
                        Média do Período
                      </div>
                      <div className="h-px w-12 bg-gradient-to-r from-purple-400/60 to-transparent" />
                    </div>
                    <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-2 transition-all duration-300 group-hover:border-purple-400/30 group-hover:bg-purple-500/20 group-hover:scale-110">
                      <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="font-mono text-5xl font-light tracking-tight text-white transition-all duration-300 group-hover:text-purple-100">
                      {averageValue.toFixed(2)}
                      <span className="ml-1 text-3xl text-slate-400">%</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <div className="h-1 w-1 rounded-full bg-purple-400" />
                    <span>Média aritmética simples</span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>

              {/* Card 3 - Variation */}
              <div className={`group relative overflow-hidden rounded-xl border backdrop-blur-xl transition-all duration-300 hover:shadow-2xl ${
                variation > 0
                  ? 'border-emerald-500/[0.15] bg-gradient-to-br from-emerald-500/[0.08] to-emerald-500/[0.02] hover:border-emerald-400/[0.25] hover:shadow-emerald-500/10'
                  : variation < 0
                  ? 'border-red-500/[0.15] bg-gradient-to-br from-red-500/[0.08] to-red-500/[0.02] hover:border-red-400/[0.25] hover:shadow-red-500/10'
                  : 'border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] hover:border-white/[0.15] hover:shadow-slate-500/10'
              }`}>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className={`absolute inset-0 bg-gradient-to-br to-transparent ${
                    variation > 0 ? 'from-emerald-500/5' : variation < 0 ? 'from-red-500/5' : 'from-white/5'
                  }`} />
                </div>

                <div className="relative p-6">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <div className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
                        Variação
                      </div>
                      <div className={`h-px w-12 bg-gradient-to-r to-transparent ${
                        variation > 0 ? 'from-emerald-400/60' : variation < 0 ? 'from-red-400/60' : 'from-slate-400/60'
                      }`} />
                    </div>
                    <div className={`rounded-lg border p-2 transition-all duration-300 group-hover:scale-110 ${
                      variation > 0
                        ? 'border-emerald-500/20 bg-emerald-500/10 group-hover:border-emerald-400/30 group-hover:bg-emerald-500/20'
                        : variation < 0
                        ? 'border-red-500/20 bg-red-500/10 group-hover:border-red-400/30 group-hover:bg-red-500/20'
                        : 'border-slate-500/20 bg-slate-500/10 group-hover:border-slate-400/30 group-hover:bg-slate-500/20'
                    }`}>
                      <svg className={`h-4 w-4 transition-transform duration-300 ${
                        variation > 0 
                          ? 'text-emerald-400 group-hover:-translate-y-0.5' 
                          : variation < 0 
                          ? 'text-red-400 group-hover:translate-y-0.5'
                          : 'text-slate-400'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                          variation > 0
                            ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            : variation < 0
                            ? "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                            : "M5 12h14"
                        } />
                      </svg>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className={`font-mono text-5xl font-light tracking-tight transition-all duration-300 ${
                      variation > 0
                        ? 'text-emerald-400 group-hover:text-emerald-300'
                        : variation < 0
                        ? 'text-red-400 group-hover:text-red-300'
                        : 'text-white group-hover:text-slate-100'
                    }`}>
                      {variation > 0 ? '+' : ''}{variation.toFixed(2)}
                      <span className="ml-1 text-3xl text-slate-400">%</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <div className={`h-1 w-1 rounded-full ${
                      variation > 0 ? 'bg-emerald-400' : variation < 0 ? 'bg-red-400' : 'bg-slate-400'
                    }`} />
                    <span>Comparativo início vs. fim</span>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    variation > 0
                      ? 'from-emerald-500/0 via-emerald-500/50 to-emerald-500/0'
                      : variation < 0
                      ? 'from-red-500/0 via-red-500/50 to-red-500/0'
                      : 'from-slate-500/0 via-slate-500/50 to-slate-500/0'
                  }`} />
                </div>
              </div>
            </div>

            {/* CHART SECTION */}
            <section className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.12]">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-purple-500/[0.02]" />
              </div>

              <div className="relative">
                {/* Header */}
                <div className="border-b border-white/5 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-2">
                        <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-light text-white">
                          Evolução Temporal
                        </h3>
                        <p className="text-xs text-slate-500">
                          Histórico de taxas no período selecionado
                        </p>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-400" />
                        <span className="text-slate-400">Taxa SELIC (%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="p-6">
                  <SelicChart data={filteredData} />
                </div>
              </div>
            </section>

            {/* TABLE SECTION */}
            <section className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.12]">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-pink-500/[0.02]" />
              </div>

              <div className="relative">
                {/* Header */}
                <div className="border-b border-white/5 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-2">
                        <svg className="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-light text-white">
                          Registro Detalhado
                        </h3>
                        <p className="text-xs text-slate-500">
                          Tabela completa de valores históricos
                        </p>
                      </div>
                    </div>

                    {/* Export hint */}
                    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400 backdrop-blur-sm">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>{filteredData.length} registros</span>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="p-6">
                  <SelicTable data={filteredData} />
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </AppShell>
  );
}