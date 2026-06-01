import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Coffee,
  Package,
  Calendar,
  Wallet,
  Check,
  Sparkles,
  Send,
  ShieldCheck,
  Wrench,
  Info,
  X,
  ZoomIn,
  ArrowLeft,
  Briefcase,
  Leaf,
} from "lucide-react";

import lavazzaBluetooth from "@/assets/lavazza-bluetooth.png";
import lavazzaMilk from "@/assets/lavazza-milk-new.jpeg";
import lavazzaBarista from "@/assets/lavazza-barista.png";

type CoffeeKey = "deciso" | "bilanciato" | "corposo" | "intense" | "misto";

const coffeeCatalog: Record<CoffeeKey, { name: string; image: string; intensity: string; note: string }> = {
  deciso: {
    name: "Top Selection Deciso",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10083.webp",
    intensity: "Intensità 10/11",
    note: "100% Arabica, finale di cacao e spezie",
  },
  bilanciato: {
    name: "Top Selection Bilanciato",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10510.webp",
    intensity: "Intensità 8/11",
    note: "Arabica dolci, note di nocciola e cioccolato",
  },
  corposo: {
    name: "Top Selection Corposo",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10516.webp",
    intensity: "Intensità 9/11",
    note: "Aromatico, finale di cacao e spezie",
  },
  intense: {
    name: "Intense Aroma",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10522.webp",
    intensity: "Intensità 11/11",
    note: "Il più intenso: sentori di legno e cacao amaro",
  },
  misto: {
    name: "Pacchetto Misto",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10510.webp",
    intensity: "Mix di miscele",
    note: "Combinazione di Deciso + Bilanciato a scelta",
  },
};

type MacchinaKey = "barista" | "milk" | "bluetooth";

const macchine: Record<
  MacchinaKey,
  {
    nome: string;
    image: string;
    alt: string;
    short: string;
    highlights: string[];
  }
> = {
  barista: {
    nome: "Lavazza in Black Elogy Barista",
    image: lavazzaBarista,
    alt: "Macchina caffè Lavazza Elogy Barista multibeverage",
    short:
      "Top di gamma multibeverage: oltre 30 ricette, accessorio BAR CUP incluso, Wi-Fi e Bluetooth.",
    highlights: ["+30 ricette", "Bidose", "Wi-Fi + Bluetooth"],
  },
  milk: {
    nome: "Lavazza in Black Elogy Milk",
    image: lavazzaMilk,
    alt: "Macchina caffè Lavazza Elogy Milk con cappuccinatore",
    short:
      "Cappuccinatore integrato per espresso, cappuccino, latte macchiato e tante ricette a base di latte.",
    highlights: ["Cappuccinatore integrato", "Touch", "Bluetooth + App"],
  },
  bluetooth: {
    nome: "Lavazza in Black Elogy Bluetooth",
    image: lavazzaBluetooth,
    alt: "Macchina caffè Lavazza Elogy Bluetooth compatta",
    short:
      "Compatta, elegante e premiata con iF Design Award. Touch, Bluetooth e doppio beccuccio bidose.",
    highlights: ["Touch", "Bluetooth + App", "Bidose"],
  },
};

interface Pacchetto {
  id: string;
  macchina: MacchinaKey;
  caffe: CoffeeKey;
  caparra: number;
  mensile: number;
  mesi: number;
  capsule: number;
  caffeStimati: number;
  evidenza?: string;
}

const pacchetti: Pacchetto[] = [
  // BARISTA
  {
    id: "barista-deciso-bilanciato-misto",
    macchina: "barista",
    caffe: "misto",
    caparra: 190,
    mensile: 40.22,
    mesi: 36,
    capsule: 3000,
    caffeStimati: 4500,
    evidenza: "Deciso · Bilanciato · Misto",
  },
  {
    id: "barista-corposo",
    macchina: "barista",
    caffe: "corposo",
    caparra: 190,
    mensile: 42.94,
    mesi: 36,
    capsule: 3000,
    caffeStimati: 4500,
  },
  {
    id: "barista-intense",
    macchina: "barista",
    caffe: "intense",
    caparra: 190,
    mensile: 36.56,
    mesi: 36,
    capsule: 3000,
    caffeStimati: 4500,
    evidenza: "Più conveniente",
  },
  // MILK
  {
    id: "milk-deciso-bilanciato",
    macchina: "milk",
    caffe: "bilanciato",
    caparra: 120,
    mensile: 30.08,
    mesi: 24,
    capsule: 1500,
    caffeStimati: 2250,
    evidenza: "Deciso o Bilanciato",
  },
  {
    id: "milk-corposo",
    macchina: "milk",
    caffe: "corposo",
    caparra: 120,
    mensile: 32.04,
    mesi: 24,
    capsule: 1500,
    caffeStimati: 2250,
  },
  {
    id: "milk-intense",
    macchina: "milk",
    caffe: "intense",
    caparra: 120,
    mensile: 31.24,
    mesi: 21,
    capsule: 1500,
    caffeStimati: 2250,
  },
  // BLUETOOTH
  {
    id: "bt-deciso-bilanciato-misto",
    macchina: "bluetooth",
    caffe: "misto",
    caparra: 180,
    mensile: 36.36,
    mesi: 36,
    capsule: 3000,
    caffeStimati: 4500,
    evidenza: "Deciso · Bilanciato · Misto",
  },
  {
    id: "bt-corposo",
    macchina: "bluetooth",
    caffe: "corposo",
    caparra: 180,
    mensile: 39.08,
    mesi: 36,
    capsule: 3000,
    caffeStimati: 4500,
  },
  {
    id: "bt-intense",
    macchina: "bluetooth",
    caffe: "intense",
    caparra: 180,
    mensile: 32.69,
    mesi: 36,
    capsule: 3000,
    caffeStimati: 4500,
    evidenza: "Più conveniente",
  },
];

const fmt = (n: number) =>
  n.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const waLink = (p: Pacchetto) => {
  const m = macchine[p.macchina].nome;
  const c = coffeeCatalog[p.caffe].name;
  const txt = `Ciao Alessio, sono interessato al pacchetto: ${m} con caffè ${c} — caparra €${p.caparra}, €${fmt(
    p.mensile,
  )}/mese per ${p.mesi} mesi (${p.capsule} capsule).`;
  return `https://wa.me/393491063216?text=${encodeURIComponent(txt)}`;
};

const filtri: { key: "tutti" | MacchinaKey; label: string }[] = [
  { key: "tutti", label: "Tutti" },
  { key: "barista", label: "Barista" },
  { key: "milk", label: "Milk" },
  { key: "bluetooth", label: "Bluetooth" },
];

const ScegliPacchetto = () => {
  const [filtro, setFiltro] = useState<"tutti" | MacchinaKey>("tutti");
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  const lista = useMemo(
    () => (filtro === "tutti" ? pacchetti : pacchetti.filter((p) => p.macchina === filtro)),
    [filtro],
  );

  return (
    <>
      <Helmet>
        <title>Scegli il tuo pacchetto Lavazza in Black | Alessio Nims</title>
        <meta
          name="description"
          content="Scegli il pacchetto Lavazza in Black più adatto a te: macchina Elogy Barista, Milk o Bluetooth con capsule incluse, garanzia e assistenza."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/8 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-4 md:mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Torna al sito
            </Link>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Promo clienti privati
              </span>
              <h1 className="font-display text-2xl sm:text-3xl md:text-5xl text-foreground mb-3 md:mb-4">
                Scegli il tuo pacchetto
              </h1>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                Trova la combinazione perfetta di macchina caffè <strong>Lavazza in Black Elogy</strong>{" "}
                e capsule incluse. Tutte le promo includono <strong>garanzia, assistenza tecnica</strong>{" "}
                e <strong>consegna gratuita</strong>.
              </p>
            </div>

            {/* Avviso stima consumo */}
            <div className="mt-6 md:mt-8 max-w-3xl mx-auto bg-card border border-border rounded-2xl p-4 md:p-5 flex items-start gap-3 shadow-soft">
              <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-accent/15 flex items-center justify-center">
                <Info className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
              </div>
              <p className="text-xs md:text-sm text-foreground leading-relaxed">
                <strong>Nota sui consumi:</strong> i pacchetti sono stimati su un uso medio di{" "}
                <strong>4–6 caffè al giorno</strong>. Per consumi più elevati possiamo valutare insieme
                soluzioni dedicate a tua discrezione.
              </p>
            </div>
          </div>
        </section>

        {/* MACCHINE OVERVIEW */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
              Le macchine in promo
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Tre modelli Lavazza in Black Elogy. Clicca sull'immagine per ingrandirla.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.keys(macchine) as MacchinaKey[]).map((k) => {
              const m = macchine[k];
              return (
                <div
                  key={k}
                  className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => setZoom({ src: m.image, alt: m.alt })}
                    className="group relative bg-secondary/30 p-6 cursor-zoom-in transition hover:bg-secondary/50"
                    aria-label={`Ingrandisci ${m.nome}`}
                  >
                    <img
                      src={m.image}
                      alt={m.alt}
                      className="h-40 w-auto mx-auto object-contain transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 bg-background/80 backdrop-blur rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition">
                      <ZoomIn className="w-4 h-4 text-foreground" />
                    </span>
                  </button>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-foreground text-lg mb-2">{m.nome}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{m.short}</p>
                    {(k === "barista" || k === "milk") && (
                      <p className="text-xs text-foreground/80 bg-primary/5 border border-primary/15 rounded-lg px-3 py-2 mb-3">
                        <strong>Tante ricette pronte:</strong>{" "}
                        {k === "barista"
                          ? "oltre 30 preparazioni dal classico espresso alle bevande gourmet."
                          : "espresso, cappuccino, latte macchiato e ricette al latte."}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {m.highlights.map((h) => (
                        <Badge key={h} variant="secondary" className="text-[10px] font-semibold">
                          {h}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Garanzia / Assistenza */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3">
              <ShieldCheck className="w-5 h-5 text-fresh shrink-0" />
              <span className="text-sm text-foreground">
                <strong>Garanzia</strong> inclusa per tutta la durata del contratto
              </span>
            </div>
            <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3">
              <Wrench className="w-5 h-5 text-fresh shrink-0" />
              <span className="text-sm text-foreground">
                <strong>Assistenza tecnica</strong> sempre compresa
              </span>
            </div>
            <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3">
              <Package className="w-5 h-5 text-fresh shrink-0" />
              <span className="text-sm text-foreground">
                <strong>Consegna gratuita</strong> di macchina e capsule
              </span>
            </div>
          </div>
        </section>

        {/* FILTRI */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filtri.map((f) => (
              <Button
                key={f.key}
                variant={filtro === f.key ? "default" : "outline"}
                size="sm"
                onClick={() => setFiltro(f.key)}
              >
                {f.label}
              </Button>
            ))}
          </div>
        </section>

        {/* PACCHETTI */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lista.map((p) => {
              const m = macchine[p.macchina];
              const c = coffeeCatalog[p.caffe];
              return (
                <div
                  key={p.id}
                  className="relative bg-card rounded-2xl border border-border shadow-soft overflow-hidden flex flex-col"
                >
                  {p.evidenza && (
                    <Badge className="absolute top-3 right-3 z-10 bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-wider">
                      {p.evidenza}
                    </Badge>
                  )}

                  {/* Immagini macchina + capsula */}
                  <div className="grid grid-cols-2 bg-secondary/30">
                    <button
                      type="button"
                      onClick={() => setZoom({ src: m.image, alt: m.alt })}
                      className="group relative p-4 flex items-center justify-center cursor-zoom-in transition hover:bg-secondary/40"
                      aria-label={`Ingrandisci ${m.nome}`}
                    >
                      <img
                        src={m.image}
                        alt={m.alt}
                        className="h-32 w-auto object-contain transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => setZoom({ src: c.image, alt: c.name })}
                      className="group relative p-4 flex items-center justify-center border-l border-border cursor-zoom-in transition hover:bg-secondary/40"
                      aria-label={`Ingrandisci capsule ${c.name}`}
                    >
                      <img
                        src={c.image}
                        alt={`Capsula ${c.name}`}
                        className="h-32 w-auto object-contain transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="mb-3">
                      <h3 className="font-display font-bold text-foreground text-lg leading-tight">
                        {m.nome}
                      </h3>
                      <p className="text-sm text-primary font-semibold mt-1 flex items-center gap-1.5">
                        <Coffee className="w-4 h-4" /> {c.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {c.intensity} · {c.note}
                      </p>
                    </div>

                    {/* Prezzi */}
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-4 mb-4 border border-border">
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="font-display font-black text-3xl text-foreground">
                          € {fmt(p.mensile)}
                        </span>
                        <span className="text-sm text-muted-foreground">/mese</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" /> per {p.mesi} mesi
                        <span className="text-border">•</span>
                        <Wallet className="w-3.5 h-3.5" /> caparra €{p.caparra}
                      </div>
                    </div>

                    {/* Capsule */}
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-fresh mt-0.5 shrink-0" />
                        <span>
                          <strong>{p.capsule.toLocaleString("it-IT")} capsule</strong> incluse
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-fresh mt-0.5 shrink-0" />
                        <span>
                          ≈ <strong>{p.caffeStimati.toLocaleString("it-IT")} caffè</strong> (bidose dalla
                          monodose)
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-fresh mt-0.5 shrink-0" />
                        <span>Garanzia + assistenza tecnica incluse</span>
                      </li>
                    </ul>

                    <div className="mt-auto">
                      <Button variant="whatsapp" className="w-full gap-2" asChild>
                        <a href={waLink(p)} target="_blank" rel="noopener noreferrer">
                          <Send className="w-4 h-4" /> Voglio questo pacchetto
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              Non trovi la combinazione giusta?{" "}
              <a
                href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20un%20pacchetto%20personalizzato"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Scrivimi su WhatsApp
              </a>{" "}
              e costruiamo insieme il pacchetto su misura per i tuoi consumi.
            </p>
          </div>
        </section>
      </div>

      {/* Zoom modal */}
      <Dialog open={!!zoom} onOpenChange={(o) => !o && setZoom(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background border-none">
          <button
            onClick={() => setZoom(null)}
            className="absolute top-2 right-2 z-50 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80 transition"
            aria-label="Chiudi immagine"
          >
            <X className="w-5 h-5" />
          </button>
          {zoom && (
            <div className="flex items-center justify-center bg-secondary/30 p-6 md:p-10">
              <img src={zoom.src} alt={zoom.alt} className="max-h-[80vh] w-auto object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ScegliPacchetto;
