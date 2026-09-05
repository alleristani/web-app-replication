import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Send, Check, X, ZoomIn, ShoppingCart, CalendarClock, Building2, Home } from "lucide-react";

import lavazzaBluetooth from "@/assets/lavazza-bluetooth.png";
import lavazzaMilk from "@/assets/lavazza-milk-new.jpeg";
import lavazzaBarista from "@/assets/lavazza-barista.png";
import lavazzaTabli from "@/assets/lavazza-tabli.png";
import tabAvvolgente from "@/assets/tab-avvolgente.png";
import tabPersistente from "@/assets/tab-persistente.png";
import tabDecaf from "@/assets/tab-decaf.png";
import startapEvolution from "@/assets/startap-evolution.webp";
import startapExtra from "@/assets/startap-extra.webp";
import startapExtraSl from "@/assets/startap-extra-sl.webp";
import startapEssential from "@/assets/startap-essential.webp";
import startapEssence from "@/assets/star-tap-essence.webp";
import startapPro from "@/assets/startap-pro.webp";

interface ProductCard {
  name: string;
  image: string;
  alt: string;
  description: string;
  bullets: string[];
  badge?: string;
  videoUrl?: string;
}

const toEmbedUrl = (url: string) => {
  const driveMatch = url.match(/\/d\/([^/]+)\//);
  if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  const youtubeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^?&]+)/);
  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  return url;
};

/* Indicatore intensità: pallini coerenti in tutto il sito */
export const IntensityDots = ({ label }: { label: string }) => {
  const match = label.match(/(\d+)\s*\/\s*(\d+)/);
  if (!match) return null;
  const value = Number(match[1]);
  const total = Number(match[2]);
  return (
    <span className="flex items-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-[5px] w-[5px] rounded-full ${i < value ? "bg-accent" : "bg-border"}`}
        />
      ))}
    </span>
  );
};

/* Etichetta unica riusata per badge prodotto */
const ProductBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="absolute left-4 top-4 z-10 rounded-md border border-border bg-card px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
    {children}
  </span>
);

const coffeeProducts: ProductCard[] = [
  {
    name: "Lavazza in Black Elogy Bluetooth",
    image: lavazzaBluetooth,
    alt: "Macchina caffè Lavazza in Black Elogy Bluetooth in comodato d'uso gratuito",
    description: "La macchina da caffè in capsule compatta con interfaccia touch, Bluetooth e doppio beccuccio. Elegante e premiata con l'iF Design Award. Disponibile in comodato d'uso gratuito.",
    bullets: ["Touch intuitivo", "Bluetooth e App", "Bidose (2 caffè insieme)"],
    videoUrl: "https://drive.google.com/file/d/1fpuLirnPZbMVN5glge6neTUATpdOnyvo/view?usp=sharing",
  },
  {
    name: "Lavazza in Black Elogy Milk",
    image: lavazzaMilk,
    alt: "Macchina caffè Lavazza in Black Elogy Milk con cappuccinatore integrato",
    description: "Espresso, cappuccino, latte macchiato e molto altro. Il cappuccinatore integrato ti apre un mondo di preparazioni a base di latte. Macchina caffè in capsule in comodato d'uso gratuito.",
    bullets: ["Cappuccinatore integrato", "Touch intuitivo", "Bluetooth e App"],
    videoUrl: "https://drive.google.com/file/d/1UU1mcNXyTFCW1mAcA4-ZNz8Xe69p_u7p/view?usp=sharing",
  },
  {
    name: "Lavazza in Black Elogy Barista",
    image: lavazzaBarista,
    alt: "Macchina caffè Lavazza in Black Elogy Barista top di gamma multibeverage",
    description: "La soluzione top di gamma per chi vuole la caffetteria italiana a casa. Oltre 30 ricette, accessorio BAR CUP incluso, Bluetooth e Wi-Fi. Macchina caffè in capsule in comodato d'uso gratuito.",
    bullets: ["Multibeverage", "Connettività Wi-Fi + Bluetooth", "Beccuccio bidose"],
    badge: "NOVITÀ",
    videoUrl: "https://drive.google.com/file/d/1O7Pfm0gi_iIPf4QM9_9Hz0RhRl_iB4W-/view?usp=sharing",
  },
  {
    name: "Lavazza Tablì",
    image: lavazzaTabli,
    alt: "Macchina caffè Lavazza Tablì con tab 100% caffè pressato",
    description: "La nuova frontiera del caffè firmata Lavazza. Tablì utilizza innovativi tab 100% caffè pressato, senza involucro, per un'esperienza sostenibile e ancora più autentica. Tecnologia e qualità si incontrano per un espresso ricco, pratico e dal gusto superiore.",
    bullets: ["Sistema a tab 100% caffè", "Senza capsula", "Sostenibile e autentico"],
    badge: "NOVITÀ",
    videoUrl: "https://youtu.be/Jk7GVF-95_k",
  },
];

const waterProducts: ProductCard[] = [
  {
    name: "Star Tap Evolution",
    image: startapEvolution,
    alt: "Sistema acqua microfiltrata Star Tap Evolution sopra lavello",
    description: "Il frigogasatore sopra lavello con display touch a colori, lampada UVC anti-batterica, fino a 4 profili personalizzati e App My Nims. Acqua microfiltrata Star Tap di alta qualità.",
    bullets: ["Acqua fredda, liscia e frizzante", "Lampada UVC (99,9% batteri)", "Display touch + App"],
    badge: "TOP DI GAMMA",
    videoUrl: "https://drive.google.com/file/d/1tL2VTgw5kAslnwf2TKoG9yK_7RpC7R6V/view?usp=sharing",
  },
  {
    name: "Star Tap Extra",
    image: startapExtra,
    alt: "Frigogasatore acqua Star Tap Extra Bluetooth sopra lavello",
    description: "Frigogasatore sopra lavello compatto, semplice e funzionale. Acqua microfiltrata Star Tap fredda o frizzante con 5 tasti touch e Bluetooth.",
    bullets: ["Acqua fredda, liscia e frizzante", "5 tasti touch", "Bluetooth"],
  },
  {
    name: "Star Tap Extra SL",
    image: startapExtraSl,
    alt: "Star Tap Extra SL sotto lavello acqua microfiltrata frizzante",
    description: "Si installa sotto il lavello e non occupa spazio sul piano cucina. Stessi vantaggi dell'Extra, zero ingombro.",
    bullets: ["Sotto lavello", "Acqua fredda, liscia e frizzante", "Rubinetto dedicato in dotazione"],
    badge: "SOTTO LAVELLO",
  },
  {
    name: "Star Tap Essential",
    image: startapEssential,
    alt: "Sistema filtrante acqua Star Tap Essential con lampada UVC",
    description: "Sistema filtrante sotto lavello con lampada UVC. Acqua microfiltrata dal rubinetto di casa, più pura e salubre ogni giorno.",
    bullets: ["Filtro multistrato 2500A", "Lampada UVC anti-batterica", "Compatto sotto lavello"],
    badge: "SOLO FILTRAZIONE",
  },
  {
    name: "Star Tap Essence",
    image: startapEssence,
    alt: "Depuratore acqua Star Tap Essence con rubinetto led smart e UVC",
    description: "Il nuovo standard per un’acqua più pura, sempre sotto controllo. Star Tap Essence unisce filtrazione avanzata e tecnologia UVC, con rubinetto di design dotato di led smart che segnala lo stato del filtro. Si installa sotto lavello: zero ingombro, massima qualità.",
    bullets: ["Filtrazione avanzata + UVC", "Rubinetto led smart stato filtro", "Installazione sotto lavello"],
    badge: "NOVITÀ",
  },
  {
    name: "Star Tap Pro",
    image: startapPro,
    alt: "Star Tap Pro frigogasatore per uffici acqua fredda e frizzante",
    description: "Il frigogasatore stand-alone pensato per uffici e ambienti di lavoro. Alta capacità, design professionale, Bluetooth e App My Nims.",
    bullets: ["Acqua fredda, liscia e frizzante", "Lampada UVC", "Ideale per uffici e studi"],
    badge: "PER UFFICIO",
  },
];

const scrollToContatti = () => {
  document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
};

const ProductCardComponent = ({ product, onPlayVideo, onZoomImage }: { product: ProductCard; onPlayVideo: (url: string) => void; onZoomImage: (img: { src: string; alt: string }) => void }) => (
  <article className="relative flex flex-col overflow-hidden rounded-lg border border-border bg-card">
    {product.badge && <ProductBadge>{product.badge}</ProductBadge>}
    <button
      type="button"
      onClick={() => onZoomImage({ src: product.image, alt: product.alt })}
      className="group relative flex aspect-[4/3] w-full items-center justify-center bg-secondary p-8 transition-colors duration-150 hover:bg-muted"
      aria-label={`Ingrandisci immagine ${product.name}`}
    >
      <img
        src={product.image}
        alt={product.alt}
        className="h-full w-auto max-w-full object-contain"
        loading="lazy"
        width={300}
        height={225}
      />
      <span className="absolute bottom-3 right-3 rounded-md border border-border bg-card p-1.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
        <ZoomIn className="h-4 w-4 text-foreground" strokeWidth={1.5} />
      </span>
    </button>
    <div className="flex flex-1 flex-col p-6">
      <h4 className="font-display text-lg text-foreground">{product.name}</h4>
      <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{product.description}</p>
      <ul className="mt-5 space-y-2 border-t border-border pt-5">
        {product.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
            <Check className="mt-[3px] h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2 pt-6">
        <Button variant="whatsapp" className="w-full gap-2" onClick={scrollToContatti}>
          <Send className="h-4 w-4" /> Richiedi info su questo prodotto
        </Button>
        {product.videoUrl && (
          <Button variant="outline" className="w-full gap-2" onClick={() => onPlayVideo(product.videoUrl!)}>
            <Play className="h-4 w-4" /> Guarda il video ufficiale
          </Button>
        )}
      </div>
    </div>
  </article>
);

const MacchineSection = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section className="section-padding bg-background" id="macchine">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">Le Macchine</span>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-[2.5rem]">
              Macchine caffè Lavazza in Black in comodato d'uso gratuito e depuratori acqua Star Tap
            </h2>
          </div>

          {/* Caffè */}
          <div className="mt-16">
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl text-foreground md:text-3xl">Macchine caffè Lavazza in capsule e sistema Tablì</h3>
              <p className="measure mt-3 text-[15px] leading-relaxed text-muted-foreground md:text-base">Il meglio del caffè Lavazza in capsule e il nuovo sistema a tab 100% caffè: macchine caffè Lavazza in Black in comodato d'uso gratuito e Lavazza Tablì, con garanzia e assistenza incluse.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coffeeProducts.map((p) => (
                <ProductCardComponent key={p.name} product={p} onPlayVideo={(url) => setVideoUrl(toEmbedUrl(url))} onZoomImage={setZoomImage} />
              ))}
            </div>
          </div>

          {/* Tab Tablì */}
          <div className="mt-16 rounded-lg border border-border bg-secondary p-6 md:p-10">
            <div className="max-w-3xl">
              <span className="eyebrow">Solo per Lavazza Tablì</span>
              <h3 className="mt-4 font-display text-2xl text-foreground md:text-3xl">Le miscele Tablì — Sistema a Tab</h3>
              <p className="measure mt-3 text-[15px] leading-relaxed text-muted-foreground md:text-base">
                Le nuove tab Lavazza rappresentano un'evoluzione nel mondo del caffè: <strong>100% caffè pressato, senza involucro</strong>. Tre miscele pensate per offrire esperienze diverse, dall'aromatico al più intenso, sempre con la qualità Lavazza.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Avvolgente",
                  image: tabAvvolgente,
                  alt: "Confezione Lavazza Tablì Avvolgente 100% Arabica intensità 10/13",
                  intensity: "Intensità 10/13",
                  short: "100% Arabica",
                  description: "L'aromaticità caratteristica del 100% Arabica e l'equilibrio tra intensità e morbidezza. Un invito a lasciarsi trasportare da un gusto pieno e vellutato, dove le note di cacao e frutta secca si incontrano. Dedicata a chi desidera esplorare le sfumature di un espresso aromatico perfetto.",
                  bullets: ["Tostatura scura", "Tab 100% caffè, senza involucro", "Disponibile monodose / bidose"],
                },
                {
                  name: "Persistente",
                  image: tabPersistente,
                  alt: "Confezione Lavazza Tablì Persistente miscela Arabica e Robusta intensità 12/13",
                  intensity: "Intensità 12/13",
                  short: "Arabica + Robusta",
                  description: "Dalla tostatura scura di Arabica e Robusta nasce un viaggio profondo nel gusto. Profilo forte e corposo, con note speziate e di caramello. La miscela ideale per chi ricerca un caffè intenso e aromi persistenti che accompagnano ogni sorso.",
                  bullets: ["Tostatura scura", "Tab 100% caffè, senza involucro", "Disponibile monodose / bidose"],
                },
                {
                  name: "Decaf",
                  image: tabDecaf,
                  alt: "Confezione Lavazza Tablì Decaf 100% Arabica decaffeinato intensità 7/13",
                  intensity: "Intensità 7/13 · Decaffeinato",
                  short: "100% Arabica Decaffeinato",
                  description: "100% Arabica. Gusto pieno e armonioso, con note di nocciola e un leggero retrogusto di cioccolato. Il piacere di un buon espresso, da concederti quando vuoi.",
                  bullets: ["Tostatura media", "Decaffeinato pressato in tab", "100% caffè, senza involucro"],
                },
              ].map((tab) => (
                <article key={tab.name} className="flex flex-col overflow-hidden rounded-lg border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setZoomImage({ src: tab.image, alt: tab.alt })}
                    className="group relative flex aspect-[4/3] w-full items-center justify-center bg-secondary p-8 transition-colors duration-150 hover:bg-muted"
                    aria-label={`Ingrandisci immagine ${tab.name}`}
                  >
                    <img
                      src={tab.image}
                      alt={tab.alt}
                      className="h-full w-auto max-w-full object-contain"
                      loading="lazy"
                      width={220}
                      height={165}
                    />
                    <span className="absolute bottom-3 right-3 rounded-md border border-border bg-card p-1.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                      <ZoomIn className="h-4 w-4 text-foreground" strokeWidth={1.5} />
                    </span>
                  </button>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      <IntensityDots label={tab.intensity} />
                      {tab.intensity}
                    </span>
                    <h4 className="mt-2 font-display text-lg text-foreground">{tab.name}</h4>
                    <span className="mt-1 text-sm text-muted-foreground">{tab.short}</span>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{tab.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-border pt-5">
                      {tab.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                          <Check className="mt-[3px] h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="whatsapp" className="mt-auto w-full gap-2 pt-0 [margin-top:auto]" onClick={scrollToContatti}>
                      <Send className="h-4 w-4" /> Chiedi info su {tab.name}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Separatore */}
          <div className="mt-16 flex items-center gap-5">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Acqua Microfiltrata Star Tap</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Acqua */}
          <div className="mt-16">
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl text-foreground md:text-3xl">Depuratori acqua microfiltrata Star Tap</h3>
              <p className="measure mt-3 text-[15px] leading-relaxed text-muted-foreground md:text-base">Depuratori acqua Star Tap: acqua microfiltrata fredda, liscia e frizzante direttamente dal rubinetto. Disponibili in acquisto o noleggio mensile per casa, ufficio e aziende.</p>
            </div>

            {/* Banner Acquisto / Noleggio */}
            <div className="mt-10 rounded-lg border border-border bg-secondary p-6 md:p-8">
              <div className="max-w-3xl">
                <span className="eyebrow">Due formule disponibili</span>
                <h4 className="mt-4 font-display text-xl text-foreground md:text-2xl">
                  Acquisto o Noleggio (Rent) — scegli tu
                </h4>
                <p className="measure mt-2 text-[15px] text-muted-foreground">
                  Tutti i depuratori Star Tap sono disponibili sia in <strong>acquisto</strong> che in formula <strong>noleggio mensile</strong>.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex gap-4 rounded-md border border-border bg-card p-5">
                  <ShoppingCart className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                  <div>
                    <div className="font-display text-base text-foreground">Acquisto</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Il depuratore è tuo da subito. Pagamento in <strong>un'unica soluzione</strong> oppure a <strong>rate mensili senza interessi</strong>. Garanzia e assistenza tecnica sempre incluse.</p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-md border border-border bg-card p-5">
                  <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                  <div>
                    <div className="font-display text-base text-foreground">Noleggio (Rent)</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Canone mensile fisso, assistenza e manutenzione incluse. Zero pensieri.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3 rounded-md border border-border bg-card px-5 py-4 text-sm text-foreground">
                  <Home className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                  <span>Per <strong>famiglie e privati</strong></span>
                </div>
                <div className="flex items-center gap-3 rounded-md border border-border bg-card px-5 py-4 text-sm text-foreground">
                  <Building2 className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                  <span>Per <strong>Partite IVA, uffici e aziende</strong> (deducibile)</span>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="whatsapp" className="w-full gap-2 sm:w-auto" onClick={scrollToContatti}>
                  <Send className="h-4 w-4" /> Richiedi un preventivo personalizzato
                </Button>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {waterProducts.map((p) => (
                <ProductCardComponent key={p.name} product={p} onPlayVideo={(url) => setVideoUrl(toEmbedUrl(url))} onZoomImage={setZoomImage} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      <Dialog open={!!zoomImage} onOpenChange={(open) => !open && setZoomImage(null)}>
        <DialogContent className="max-w-3xl overflow-hidden border border-border bg-background p-0">
          <button
            onClick={() => setZoomImage(null)}
            className="absolute right-3 top-3 z-50 rounded-md border border-border bg-card p-2 text-foreground transition-colors duration-150 hover:bg-secondary"
            aria-label="Chiudi immagine"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
          {zoomImage && (
            <div className="flex items-center justify-center bg-secondary p-6 md:p-12">
              <img
                src={zoomImage.src}
                alt={zoomImage.alt}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={!!videoUrl} onOpenChange={(open) => !open && setVideoUrl(null)}>
        <DialogContent className="max-w-3xl overflow-hidden border-none bg-black p-0">
          <button
            onClick={() => setVideoUrl(null)}
            className="absolute right-3 top-3 z-50 rounded-md bg-black/70 p-2 text-white transition-colors duration-150 hover:bg-black"
            aria-label="Chiudi video"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
          {videoUrl && (
            <div className="aspect-video w-full">
              <iframe
                src={videoUrl}
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video prodotto"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MacchineSection;
