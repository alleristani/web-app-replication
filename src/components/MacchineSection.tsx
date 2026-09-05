import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Send, Check, X, ZoomIn, ShoppingCart, CalendarClock, Building2, Home } from "lucide-react";
import IntensityMeter from "@/components/IntensityMeter";

import lavazzaBluetooth from "@/assets/lavazza-bluetooth-hq.webp";
import lavazzaMilk from "@/assets/lavazza-milk-hq.webp";
import lavazzaBarista from "@/assets/lavazza-barista-hq.webp";
import lavazzaTabli from "@/assets/lavazza-tabli.webp";
import tabAvvolgente from "@/assets/tab-avvolgente.webp";
import tabPersistente from "@/assets/tab-persistente.webp";
import tabDecaf from "@/assets/tab-decaf.webp";
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
  <article className="relative bg-card rounded-lg border border-border overflow-hidden flex flex-col h-full">
    <button
      type="button"
      onClick={() => onZoomImage({ src: product.image, alt: product.alt })}
      className="group product-media relative cursor-zoom-in"
      aria-label={`Ingrandisci immagine ${product.name}`}
    >
      <img
        src={product.image}
        alt={product.alt}
        className="max-h-full w-auto object-contain transition-transform duration-150 group-hover:scale-[1.03]"
        loading="lazy"
        width={300}
        height={225}
      />
      <span className="absolute bottom-2 right-2 rounded bg-background/85 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <ZoomIn className="w-4 h-4 text-foreground" />
      </span>
    </button>
    <div className="p-6 flex flex-col flex-1">
      {product.badge && (
        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-primary mb-2">{product.badge}</span>
      )}
      <h4 className="text-lg font-display text-foreground mb-2">{product.name}</h4>
      <p className="text-muted-foreground text-sm mb-4 measure">{product.description}</p>
      <ul className="space-y-1.5 mb-6">
        {product.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="w-4 h-4 text-primary mt-1 shrink-0" strokeWidth={1.8} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3">
        <Button size="sm" className="gap-2" onClick={scrollToContatti}>
          <Send className="w-4 h-4" /> Richiedi info su questo prodotto
        </Button>
        {product.videoUrl && (
          <button
            type="button"
            onClick={() => onPlayVideo(product.videoUrl!)}
            className="inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline py-2"
          >
            <Play className="w-4 h-4" strokeWidth={1.8} /> Guarda il video ufficiale
          </button>
        )}
      </div>
    </div>
  </article>
);

const tabliBlends = [
  {
    name: "Avvolgente",
    image: tabAvvolgente,
    alt: "Confezione Lavazza Tablì Avvolgente 100% Arabica intensità 10/13",
    intensity: 10,
    total: 13,
    short: "100% Arabica",
    description: "L'aromaticità caratteristica del 100% Arabica e l'equilibrio tra intensità e morbidezza. Un invito a lasciarsi trasportare da un gusto pieno e vellutato, dove le note di cacao e frutta secca si incontrano. Dedicata a chi desidera esplorare le sfumature di un espresso aromatico perfetto.",
    bullets: ["Tostatura scura", "Tab 100% caffè, senza involucro", "Disponibile monodose / bidose"],
  },
  {
    name: "Persistente",
    image: tabPersistente,
    alt: "Confezione Lavazza Tablì Persistente miscela Arabica e Robusta intensità 12/13",
    intensity: 12,
    total: 13,
    short: "Arabica + Robusta",
    description: "Dalla tostatura scura di Arabica e Robusta nasce un viaggio profondo nel gusto. Profilo forte e corposo, con note speziate e di caramello. La miscela ideale per chi ricerca un caffè intenso e aromi persistenti che accompagnano ogni sorso.",
    bullets: ["Tostatura scura", "Tab 100% caffè, senza involucro", "Disponibile monodose / bidose"],
  },
  {
    name: "Decaf",
    image: tabDecaf,
    alt: "Confezione Lavazza Tablì Decaf 100% Arabica decaffeinato intensità 7/13",
    intensity: 7,
    total: 13,
    short: "100% Arabica Decaffeinato",
    description: "100% Arabica. Gusto pieno e armonioso, con note di nocciola e un leggero retrogusto di cioccolato. Il piacere di un buon espresso, da concederti quando vuoi.",
    bullets: ["Tostatura media", "Decaffeinato pressato in tab", "100% caffè, senza involucro"],
  },
];

const MacchineSection = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section className="section-padding bg-background" id="macchine">
        <div className="container-page">
          <div className="mb-10 md:mb-14">
            <span className="eyebrow mb-3 block">Le Macchine</span>
            <h2 className="text-2xl md:text-4xl font-display text-foreground measure">
              Macchine caffè Lavazza in Black in comodato d'uso gratuito e depuratori acqua Star Tap
            </h2>
          </div>

          {/* Caffè */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-display text-foreground mb-2">Macchine caffè Lavazza in capsule e sistema Tablì</h3>
              <p className="text-muted-foreground text-sm measure">Il meglio del caffè Lavazza in capsule e il nuovo sistema a tab 100% caffè: macchine caffè Lavazza in Black in comodato d'uso gratuito e Lavazza Tablì, con garanzia e assistenza incluse.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coffeeProducts.map((p) => (
                <ProductCardComponent key={p.name} product={p} onPlayVideo={(url) => setVideoUrl(toEmbedUrl(url))} onZoomImage={setZoomImage} />
              ))}
            </div>
          </div>

          {/* Tab Tablì */}
          <div className="mb-16 border-t border-border pt-12">
            <div className="mb-8">
              <span className="eyebrow mb-3 block">Solo per Lavazza Tablì</span>
              <h3 className="text-xl md:text-2xl font-display text-foreground mb-2">Le miscele Tablì — Sistema a Tab</h3>
              <p className="text-muted-foreground text-sm measure">
                Le nuove tab Lavazza rappresentano un'evoluzione nel mondo del caffè: <strong className="text-foreground font-medium">100% caffè pressato, senza involucro</strong>. Tre miscele pensate per offrire esperienze diverse, dall'aromatico al più intenso, sempre con la qualità Lavazza.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tabliBlends.map((tab) => (
                <article key={tab.name} className="bg-card rounded-lg border border-border overflow-hidden flex flex-col h-full">
                  <button
                    type="button"
                    onClick={() => setZoomImage({ src: tab.image, alt: tab.alt })}
                    className="group product-media relative cursor-zoom-in"
                    aria-label={`Ingrandisci immagine ${tab.name}`}
                  >
                    <img
                      src={tab.image}
                      alt={tab.alt}
                      className="max-h-full w-auto object-contain transition-transform duration-150 group-hover:scale-[1.03]"
                      loading="lazy"
                      width={260}
                      height={195}
                    />
                    <span className="absolute bottom-2 right-2 rounded bg-background/85 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      <ZoomIn className="w-4 h-4 text-foreground" />
                    </span>
                  </button>
                  <div className="p-6 flex flex-col flex-1">
                    <IntensityMeter value={tab.intensity} total={tab.total} className="mb-2" />
                    <h4 className="text-lg font-display text-foreground">{tab.name}</h4>
                    <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{tab.short}</span>
                    <p className="text-muted-foreground text-sm mt-3 mb-4">{tab.description}</p>
                    <ul className="space-y-1.5 mb-6">
                      {tab.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 text-primary mt-1 shrink-0" strokeWidth={1.8} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Button size="sm" className="gap-2 mt-auto w-full sm:w-auto" onClick={scrollToContatti}>
                      <Send className="w-4 h-4" /> Chiedi info su {tab.name}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Acqua */}
          <div id="acqua" className="border-t border-border pt-12">
            <div className="mb-8">
              <span className="eyebrow mb-3 block">Acqua Microfiltrata Star Tap</span>
              <h3 className="text-xl md:text-2xl font-display text-foreground mb-2">Depuratori acqua microfiltrata Star Tap</h3>
              <p className="text-muted-foreground text-sm measure">Depuratori acqua Star Tap: acqua microfiltrata fredda, liscia e frizzante direttamente dal rubinetto. Disponibili in acquisto o noleggio mensile per casa, ufficio e aziende.</p>
            </div>

            {/* Banner Acquisto / Noleggio */}
            <div className="mb-10 rounded-lg border border-border bg-cream p-6 md:p-8">
              <div className="mb-6">
                <span className="eyebrow mb-2 block">Due formule disponibili</span>
                <h4 className="text-lg md:text-xl font-display text-foreground">Acquisto o Noleggio (Rent) — scegli tu</h4>
                <p className="text-muted-foreground text-sm mt-2 measure">
                  Tutti i depuratori Star Tap sono disponibili sia in <strong className="text-foreground font-medium">acquisto</strong> che in formula <strong className="text-foreground font-medium">noleggio mensile</strong>.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-card rounded-lg p-5 border border-border">
                  <div className="flex items-center gap-2.5 mb-2">
                    <ShoppingCart className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={1.6} />
                    <span className="font-display text-base text-foreground">Acquisto</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Il depuratore è tuo da subito. Pagamento in <strong className="text-foreground font-medium">un'unica soluzione</strong> oppure a <strong className="text-foreground font-medium">rate mensili senza interessi</strong>. Garanzia e assistenza tecnica sempre incluse.</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <div className="flex items-center gap-2.5 mb-2">
                    <CalendarClock className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={1.6} />
                    <span className="font-display text-base text-foreground">Noleggio (Rent)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Canone mensile fisso, assistenza e manutenzione incluse. Zero pensieri.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Home className="w-4 h-4 text-primary shrink-0" strokeWidth={1.6} />
                  <span>Per <strong className="font-medium">famiglie e privati</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Building2 className="w-4 h-4 text-primary shrink-0" strokeWidth={1.6} />
                  <span>Per <strong className="font-medium">Partite IVA, uffici e aziende</strong> (deducibile)</span>
                </div>
              </div>
              <div className="mt-6">
                <Button size="sm" className="gap-2" onClick={scrollToContatti}>
                  <Send className="w-4 h-4" /> Richiedi un preventivo personalizzato
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {waterProducts.map((p) => (
                <ProductCardComponent key={p.name} product={p} onPlayVideo={(url) => setVideoUrl(toEmbedUrl(url))} onZoomImage={setZoomImage} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      <Dialog open={!!zoomImage} onOpenChange={(open) => !open && setZoomImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background border-none">
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-2 right-2 z-50 rounded-full bg-foreground/70 p-2 text-background hover:bg-foreground transition-colors duration-150"
            aria-label="Chiudi immagine"
          >
            <X className="w-5 h-5" />
          </button>
          {zoomImage && (
            <div className="flex items-center justify-center bg-cream p-6 md:p-10">
              <img src={zoomImage.src} alt={zoomImage.alt} className="max-h-[80vh] w-auto object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={!!videoUrl} onOpenChange={(open) => !open && setVideoUrl(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-ink border-none">
          <button
            onClick={() => setVideoUrl(null)}
            className="absolute top-2 right-2 z-50 rounded-full bg-foreground/70 p-2 text-background hover:bg-foreground transition-colors duration-150"
            aria-label="Chiudi video"
          >
            <X className="w-5 h-5" />
          </button>
          {videoUrl && (
            <div className="aspect-video w-full">
              <iframe
                src={videoUrl}
                className="w-full h-full"
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
