import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Coffee, CalendarDays, CalendarRange } from "lucide-react";

interface Risultati {
  costoSingolo: number;
  spesaMensile: number;
  spesaAnnuale: number;
}

const Calcola = () => {
  const [caffeGiornalieri, setCaffeGiornalieri] = useState("");
  const [prezzoConfezione, setPrezzoConfezione] = useState("");
  const [numeroCaffeConfezione, setNumeroCaffeConfezione] = useState("");
  const [risultati, setRisultati] = useState<Risultati | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!caffeGiornalieri || Number(caffeGiornalieri) <= 0)
      e.caffeGiornalieri = "Inserisci un numero valido maggiore di zero";
    if (!prezzoConfezione || Number(prezzoConfezione) <= 0)
      e.prezzoConfezione = "Inserisci un prezzo valido maggiore di zero";
    if (!numeroCaffeConfezione || Number(numeroCaffeConfezione) <= 0)
      e.numeroCaffeConfezione = "Inserisci un numero valido maggiore di zero";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const calcola = () => {
    if (!validate()) return;
    const cg = Number(caffeGiornalieri);
    const pc = Number(prezzoConfezione);
    const nc = Number(numeroCaffeConfezione);
    const costoSingolo = pc / nc;
    setRisultati({
      costoSingolo,
      spesaMensile: cg * 30 * costoSingolo,
      spesaAnnuale: cg * 365 * costoSingolo,
    });
  };

  const fmt = (n: number) =>
    n.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <>
      <Helmet>
        <title>Calcolo interno</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-2">
              <Coffee className="w-7 h-7 text-primary" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl text-foreground">
              Quanto spendi per il caffè?
            </h1>
            <p className="text-muted-foreground text-sm">
              Scopri il costo reale per ogni tazza.
            </p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl shadow-soft p-6 space-y-5">
            <Field
              label="Caffè al giorno"
              placeholder="Es. 3"
              value={caffeGiornalieri}
              onChange={setCaffeGiornalieri}
              error={errors.caffeGiornalieri}
            />
            <Field
              label="Prezzo confezione (€)"
              placeholder="Es. 12.90"
              value={prezzoConfezione}
              onChange={setPrezzoConfezione}
              error={errors.prezzoConfezione}
              step="0.01"
            />
            <Field
              label="Caffè per confezione"
              placeholder="Es. 50"
              value={numeroCaffeConfezione}
              onChange={setNumeroCaffeConfezione}
              error={errors.numeroCaffeConfezione}
            />
            <Button onClick={calcola} className="w-full" size="lg">
              Calcola
            </Button>
          </div>

          {/* Risultati */}
          {risultati && (
            <div className="bg-card rounded-2xl shadow-soft p-6 space-y-4 animate-fade-up">
              <h2 className="font-display text-lg text-foreground text-center">
                Il tuo riepilogo
              </h2>
              <div className="space-y-3">
                <ResultRow
                  icon={<Coffee className="w-5 h-5 text-primary" />}
                  label="Costo per singolo caffè"
                  value={`€ ${fmt(risultati.costoSingolo)}`}
                />
                <ResultRow
                  icon={<CalendarDays className="w-5 h-5 text-primary" />}
                  label="Spesa mensile stimata"
                  value={`€ ${fmt(risultati.spesaMensile)}`}
                />
                <ResultRow
                  icon={<CalendarRange className="w-5 h-5 text-primary" />}
                  label="Spesa annuale stimata"
                  value={`€ ${fmt(risultati.spesaAnnuale)}`}
                />
              </div>
              <p className="text-center text-muted-foreground text-sm pt-2">
                Interessante, vero? ☕
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

function Field({
  label,
  placeholder,
  value,
  onChange,
  error,
  step,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  step?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-foreground font-medium">{label}</Label>
      <Input
        type="number"
        min="0"
        step={step || "1"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "border-destructive" : ""}
      />
      {error && <p className="text-destructive text-xs">{error}</p>}
    </div>
  );
}

function ResultRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between bg-secondary/50 rounded-xl px-4 py-3">
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm text-foreground">{label}</span>
      </div>
      <span className="font-display font-bold text-foreground">{value}</span>
    </div>
  );
}

export default Calcola;
