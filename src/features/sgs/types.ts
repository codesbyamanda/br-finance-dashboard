export type SgsApiItem = {
  data: string;   // "dd/MM/yyyy"
  valor: string;  // "0.06"
};

export type SelicPoint = {
  date: Date;
  value: number;
};

export type Period = "7d" | "30d" | "3m" | "1y";
