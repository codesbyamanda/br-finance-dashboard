import { useQuery } from "@tanstack/react-query";
import { fetchSgsSerie } from "./api";
import { mapSgsToPoints } from "./mappers";
import { SelicPoint } from "./types";

export function useSelicQuery() {
  return useQuery<SelicPoint[]>({
    queryKey: ["selic", "432"],
    queryFn: async () => {
      const raw = await fetchSgsSerie("432");
      return mapSgsToPoints(raw);
    },
  });
}
