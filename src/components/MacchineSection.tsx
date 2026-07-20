import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Send, Check, X, ZoomIn, ShoppingCart, CalendarClock, Building2, Home } from "lucide-react";

import lavazzaBluetooth from "@/assets/lavazza-bluetooth.png";
import lavazzaMilk from "@/assets/lavazza-milk-new.jpeg";
import lavazzaBarista from "@/assets/lavazza-barista.png";
import lavazzaTabli from "@/assets/lavazza-tabli.png";
import startapEvolution from "@/assets/startap-evolution.webp";
import startapExtra from "@/assets/startap-extra.webp";
import startapExtraSl from "@/assets/startap-extra-sl.webp";
import startapEssential from "@/assets/startap-essential.webp";
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
    image: lavazzaTabli.url,
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
  <div className="relative bg-card rounded-2xl shadow-soft border border-border overflow-hidden flex flex-col">
    {product.badge && (
      <Badge className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-wider">
        {product.badge}
      </Badge>
    )}
    <button
      type="button"
      onClick={() => onZoomImage({ src: product.image, alt: product.alt })}
      className="group relative flex items-center justify-center p-6 bg-secondary/30 cursor-zoom-in transition hover:bg-secondary/50"
      aria-label={`Ingrandisci immagine ${product.name}`}
    >
      <img
        src={product.image}
        alt={product.alt}
        className="h-48 w-auto object-contain transition-transform group-hover:scale-105"
        loading="lazy"
        width={300}
        height={192}
      />
      <span className="absolute bottom-2 right-2 bg-background/80 backdrop-blur rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition">
        <ZoomIn className="w-4 h-4 text-foreground" />
      </span>
    </button>
    <div className="p-6 flex flex-col flex-1">
      <h4 className="text-lg font-display font-bold text-foreground mb-2">{product.name}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>
      <ul className="space-y-1.5 mb-6">
        {product.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="w-4 h-4 text-fresh mt-0.5 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2">
        <Button variant="whatsapp" size="sm" className="w-full gap-2" onClick={scrollToContatti}>
          <Send className="w-4 h-4" /> Richiedi info su questo prodotto
        </Button>
        {product.videoUrl && (
          <Button variant="outline" size="sm" className="w-full gap-2" onClick={() => onPlayVideo(product.videoUrl!)}>
            <Play className="w-4 h-4" /> Guarda il video ufficiale
          </Button>
        )}
      </div>
    </div>
  </div>
);

const MacchineSection = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section className="section-padding bg-background" id="macchine">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/8 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-5">
              Le Macchine
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-foreground">
              Macchine caffè Lavazza in Black in comodato d'uso gratuito e depuratori acqua Star Tap
            </h2>
          </div>

          {/* Caffè */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2">Macchine caffè Lavazza in capsule e sistema Tablì</h3>
              <p className="text-muted-foreground text-sm md:text-base">Il meglio del caffè Lavazza in capsule e il nuovo sistema a tab 100% caffè: macchine caffè Lavazza in Black in comodato d'uso gratuito e Lavazza Tablì, con garanzia e assistenza incluse.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coffeeProducts.map((p) => (
                <ProductCardComponent key={p.name} product={p} onPlayVideo={(url) => setVideoUrl(toEmbedUrl(url))} onZoomImage={setZoomImage} />
              ))}
            </div>
          </div>

          {/* Separatore */}
          <div className="flex items-center gap-4 mb-16">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Acqua Microfiltrata Star Tap</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Acqua */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2">Depuratori acqua microfiltrata Star Tap</h3>
              <p className="text-muted-foreground text-sm md:text-base">Depuratori acqua Star Tap: acqua microfiltrata fredda, liscia e frizzante direttamente dal rubinetto. Disponibili in acquisto o noleggio mensile per casa, ufficio e aziende.</p>
            </div>

            {/* Banner Acquisto / Noleggio */}
            <div className="mb-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6 md:p-8">
              <div className="text-center mb-5">
                <span className="inline-block bg-accent/15 text-accent-foreground text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3">
                  Due formule disponibili
                </span>
                <h4 className="text-xl md:text-2xl font-display text-foreground">
                  Acquisto o Noleggio (Rent) — scegli tu
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Tutti i depuratori Star Tap sono disponibili sia in <strong>acquisto</strong> che in formula <strong>noleggio mensile</strong>.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-5 border border-border flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground mb-1">Acquisto</div>
                    <p className="text-sm text-muted-foreground">Il depuratore è tuo da subito. Pagamento in <strong>un'unica soluzione</strong> oppure a <strong>rate mensili senza interessi</strong>. Garanzia e assistenza tecnica sempre incluse.</p>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center">
                    <CalendarClock className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground mb-1">Noleggio (Rent)</div>
                    <p className="text-sm text-muted-foreground">Canone mensile fisso, assistenza e manutenzione incluse. Zero pensieri.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                <div className="flex items-center gap-2 text-sm text-foreground bg-secondary/40 rounded-lg px-4 py-3">
                  <Home className="w-4 h-4 text-primary shrink-0" />
                  <span>Per <strong>famiglie e privati</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground bg-secondary/40 rounded-lg px-4 py-3">
                  <Building2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Per <strong>Partite IVA, uffici e aziende</strong> (deducibile)</span>
                </div>
              </div>
              <div className="text-center mt-5">
                <Button variant="whatsapp" size="sm" className="gap-2" onClick={scrollToContatti}>
                  <Send className="w-4 h-4" /> Richiedi un preventivo personalizzato
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            className="absolute top-2 right-2 z-50 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80 transition"
            aria-label="Chiudi immagine"
          >
            <X className="w-5 h-5" />
          </button>
          {zoomImage && (
            <div className="flex items-center justify-center bg-secondary/30 p-6 md:p-10">
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
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-none">
          <button
            onClick={() => setVideoUrl(null)}
            className="absolute top-2 right-2 z-50 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80 transition"
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