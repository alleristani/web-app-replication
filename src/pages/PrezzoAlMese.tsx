import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Euro, CalendarRange, Calculator } from "lucide-react";

const MIN_MENSILE = 30;
const MAX_MESI = 36;

const fmt = (n: number) =>
  n.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const PrezzoAlMese = () => {
  // Modalità 1: importo -> rate
  const [importo, setImporto] = useState("");
  const [rate, setRate] = useState<{ mesi: number; mensile: number }[] | null>(null);
  const [errImporto, setErrImporto] = useState("");

  // Modalità 2: mensile desiderato -> mesi
  const [importo2, setImporto2] = useState("");
  const [mensileDes, setMensileDes] = useState("");
  const [risInverso, setRisInverso] = useState<
    | { ok: true; mesi: number; mensileEffettivo: number; totale: number }
    | { ok: false; messaggio: string }
    | null
  >(null);
  const [err2, setErr2] = useState<Record<string, string>>({});

  const calcolaRate = () => {
    const imp = Number(importo);
    if (!importo || imp <= 0) {
      setErrImporto("Inserisci un importo valido maggiore di zero");
      setRate(null);
      return;
    }
    setErrImporto("");

    // Mostra opzioni: 6, 12, 18, 24, 30, 36 mesi (solo se mensile >= MIN_MENSILE)
    const opzioni = [6, 12, 18, 24, 30, 36];
    const r = opzioni
      .map((mesi) => ({ mesi, mensile: imp / mesi }))
      .filter((r) => r.mensile >= MIN_MENSILE);

    setRate(r);
  };

  const calcolaInverso = () => {
    const e: Record<string, string> = {};
    const imp = Number(importo2);
    const men = Number(mensileDes);
    if (!importo2 || imp <= 0) e.importo2 = "Inserisci un importo valido";
    if (!mensileDes || men <= 0) e.mensile = "Inserisci un mensile valido";
    if (men > 0 && men < MIN_MENSILE) e.mensile = `Il mensile minimo è € ${MIN_MENSILE}`;
    setErr2(e);
    if (Object.keys(e).length > 0) {
      setRisInverso(null);
      return;
    }

    // Mesi necessari = ceil(importo / mensile), max 36
    const mesiCalc = Math.ceil(imp / men);

    if (mesiCalc > MAX_MESI) {
      // Con quel mensile non basta nemmeno in 36 mesi
      const mensileMin = imp / MAX_MESI;
      setRisInverso({
        ok: false,
        messaggio: `Con € ${fmt(men)}/mese non si copre l'importo entro ${MAX_MESI} mesi. Mensile minimo richiesto: € ${fmt(mensileMin)}`,
      });
      return;
    }

    const mensileEffettivo = imp / mesiCalc;

    if (mensileEffettivo < MIN_MENSILE) {
      // Forza mensile minimo, ricalcola mesi
      const mesiCorretti = Math.ceil(imp / MIN_MENSILE);
      setRisInverso({
        ok: true,
        mesi: mesiCorretti,
        mensileEffettivo: imp / mesiCorretti,
        totale: imp,
      });
      return;
    }

    setRisInverso({
      ok: true,
      mesi: mesiCalc,
      mensileEffettivo,
      totale: imp,
    });
  };

  return (
    <>
      <Helmet>
        <title>Prezzo al mese</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-2">
              <Calculator className="w-7 h-7 text-primary" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl text-foreground">
              Prezzo al mese
            </h1>
            <p className="text-muted-foreground text-sm">
              Calcola la rata mensile o i mesi necessari. Min € {MIN_MENSILE}/mese · Max {MAX_MESI} mesi.
            </p>
          </div>

          <Tabs defaultValue="importo" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="importo">Da importo</TabsTrigger>
              <TabsTrigger value="mensile">Da mensile</TabsTrigger>
            </TabsList>

            {/* TAB 1: importo -> rate */}
            <TabsContent value="importo" className="mt-4">
              <div className="bg-card rounded-2xl shadow-soft p-6 space-y-5">
                <div className="space-y-1.5">
                  <Label className="text-foreground font-medium">Importo contratto (€)</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Es. 600"
                    value={importo}
                    onChange={(e) => setImporto(e.target.value)}
                    className={errImporto ? "border-destructive" : ""}
                  />
                  {errImporto && <p className="text-destructive text-xs">{errImporto}</p>}
                </div>
                <Button onClick={calcolaRate} className="w-full" size="lg">
                  Calcola rate
                </Button>
              </div>

              {rate && (
                <div className="bg-card rounded-2xl shadow-soft p-6 space-y-4 mt-4 animate-fade-up">
                  <h2 className="font-display text-lg text-foreground text-center">
                    Opzioni di pagamento
                  </h2>
                  {rate.length === 0 ? (
                    <p className="text-center text-muted-foreground text-sm">
                      L'importo è troppo basso: la rata minima di € {MIN_MENSILE}/mese non è raggiungibile.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {rate.map((r) => (
                        <div
                          key={r.mesi}
                          className="flex items-center justify-between bg-secondary/50 rounded-xl px-4 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <CalendarRange className="w-5 h-5 text-primary" />
                            <span className="text-sm text-foreground">{r.mesi} mesi</span>
                          </div>
                          <span className="font-display font-bold text-foreground">
                            € {fmt(r.mensile)}/mese
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </TabsContent>

            {/* TAB 2: mensile -> mesi */}
            <TabsContent value="mensile" className="mt-4">
              <div className="bg-card rounded-2xl shadow-soft p-6 space-y-5">
                <div className="space-y-1.5">
                  <Label className="text-foreground font-medium">Importo contratto (€)</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Es. 800"
                    value={importo2}
                    onChange={(e) => setImporto2(e.target.value)}
                    className={err2.importo2 ? "border-destructive" : ""}
                  />
                  {err2.importo2 && <p className="text-destructive text-xs">{err2.importo2}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label className="text-foreground font-medium">Mensile desiderato (€)</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Es. 35"
                    value={mensileDes}
                    onChange={(e) => setMensileDes(e.target.value)}
                    className={err2.mensile ? "border-destructive" : ""}
                  />
                  {err2.mensile && <p className="text-destructive text-xs">{err2.mensile}</p>}
                </div>
                <Button onClick={calcolaInverso} className="w-full" size="lg">
                  Calcola mesi
                </Button>
              </div>

              {risInverso && (
                <div className="bg-card rounded-2xl shadow-soft p-6 space-y-4 mt-4 animate-fade-up">
                  <h2 className="font-display text-lg text-foreground text-center">Risultato</h2>
                  {risInverso.ok ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-secondary/50 rounded-xl px-4 py-3">
                        <div className="flex items-center gap-3">
                          <CalendarRange className="w-5 h-5 text-primary" />
                          <span className="text-sm text-foreground">Mesi necessari</span>
                        </div>
                        <span className="font-display font-bold text-foreground">
                          {risInverso.mesi}
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-secondary/50 rounded-xl px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Euro className="w-5 h-5 text-primary" />
                          <span className="text-sm text-foreground">Mensile effettivo</span>
                        </div>
                        <span className="font-display font-bold text-foreground">
                          € {fmt(risInverso.mensileEffettivo)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-secondary/50 rounded-xl px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Euro className="w-5 h-5 text-primary" />
                          <span className="text-sm text-foreground">Totale</span>
                        </div>
                        <span className="font-display font-bold text-foreground">
                          € {fmt(risInverso.totale)}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-center text-destructive text-sm">{(risInverso as { ok: false; messaggio: string }).messaggio}</p>
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default PrezzoAlMese;
