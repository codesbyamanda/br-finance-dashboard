import { SgsApiItem } from "../types";

export async function fetchSgsSerie(serieId: string): Promise<SgsApiItem[]> {
  const res = await fetch(
    `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${serieId}/dados?formato=json`
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar dados do SGS");
  }

  return res.json();
}
