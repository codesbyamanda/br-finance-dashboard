"use client";

import { useState, useEffect } from "react";
import { SelicPoint } from "../types";

import { Pagination } from "@/components/ui/Pagination";
import { sortData } from "@/components/ui/DataTable/sort";
import { paginate } from "@/components/ui/DataTable/paginate";
import { SortState } from "@/components/ui/DataTable/types";

type Props = {
  data: SelicPoint[];
};

export function SelicTable({ data }: Props) {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortState<SelicPoint>>({
    key: "date",
    direction: "desc",
  });

  const PAGE_SIZE = 10;

  // sempre volta pra página 1 quando muda dataset ou ordenação
  useEffect(() => {
    setPage(1);
  }, [data, sort]);

  const sortedData = sortData(data, sort);
  const { pageData, totalPages } = paginate(
    sortedData,
    page,
    PAGE_SIZE
  );

  function toggleSort(key: keyof SelicPoint) {
    setSort((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }

      return { key, direction: "asc" };
    });
  }

  const getSortIcon = (key: keyof SelicPoint) => {
    if (sort.key !== key) {
      return (
        <svg className="h-4 w-4 text-slate-600 opacity-0 transition-opacity group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }

    if (sort.direction === "asc") {
      return (
        <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      );
    }

    return (
      <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  return (
    <div className="space-y-4">
      {/* Table container with custom scrollbar */}
      <div className="overflow-x-auto rounded-lg border border-white/5">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th
                className="group cursor-pointer select-none py-4 px-6 text-left transition-colors hover:bg-white/[0.05]"
                onClick={() => toggleSort("date")}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                    Data
                  </span>
                  {getSortIcon("date")}
                </div>
              </th>
              <th
                className="group cursor-pointer select-none py-4 px-6 text-left transition-colors hover:bg-white/[0.05]"
                onClick={() => toggleSort("value")}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                    Taxa SELIC (%)
                  </span>
                  {getSortIcon("value")}
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {pageData.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === pageData.length - 1;
              
              return (
                <tr
                  key={item.date.toISOString()}
                  className="group border-b border-white/5 transition-all duration-200 hover:bg-white/[0.03]"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-slate-300">
                        {item.date.toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-medium text-white transition-colors group-hover:text-blue-100">
                        {new Intl.NumberFormat("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }).format(item.value)}
                      </span>
                      <span className="text-xs text-slate-500">%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
      />

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          transition: background 0.3s;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
}