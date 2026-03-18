
export interface Contact {
  id: string;
  nome: string;
  cognome: string;
  telefono: string;
  numero_scelto: number | null;
  note: string | null;
  pr_user_id: string;
  stato: ContactStatus;
  created_at: string;
}

export type ContactStatus =
  | "nuovo"
  | "da_chiamare"
  | "contattato"
  | "appuntamento_fissato"
  | "non_interessato"
  | "non_disponibile_degustazione"
  | "venduto";

export const statusLabels: Record<ContactStatus, string> = {
  nuovo: "Nuovo",
  da_chiamare: "Da chiamare",
  contattato: "Contattato",
  appuntamento_fissato: "Appuntamento fissato",
  non_interessato: "Non interessato",
  non_disponibile_degustazione: "Non disponibile degustazione",
  venduto: "Venduto",
};

export const statusColors: Record<ContactStatus, string> = {
  nuovo: "bg-blue-100 text-blue-800",
  da_chiamare: "bg-orange-100 text-orange-800",
  contattato: "bg-purple-100 text-purple-800",
  appuntamento_fissato: "bg-emerald-100 text-emerald-800",
  non_interessato: "bg-red-100 text-red-800",
  non_disponibile_degustazione: "bg-gray-100 text-gray-800",
  venduto: "bg-green-100 text-green-800",
};

export interface PRProfile {
  id: string;
  user_id: string;
  username: string;
  display_name: string;
  created_by: string | null;
  created_at: string;
}

export interface Extraction {
  id: string;
  data_estrazione: string;
  numero_vincente: number | null;
  created_at: string;
}
