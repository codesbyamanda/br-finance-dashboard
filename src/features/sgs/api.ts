import { SgsApiItem } from "./types";

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export async function fetchSgsSerie(code: string): Promise<SgsApiItem[]> {
  const today = new Date();
  const tenYearsAgo = new Date();
  tenYearsAgo.setFullYear(today.getFullYear() - 10);

  const dataInicial = formatDate(tenYearsAgo);
  const dataFinal = formatDate(today);

  const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${code}/dados?formato=json&dataInicial=${dataInicial}&dataFinal=${dataFinal}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`BCB ${res.status}: ${text}`);
  }

  return res.json();
}
