import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Send, Check, X } from "lucide-react";

import lavazzaBluetooth from "@/assets/lavazza-bluetooth.png";
import lavazzaMilk from "@/assets/lavazza-milk.png";
import lavazzaBarista from "@/assets/lavazza-barista.png";
import startapEvolution from "@/assets/startap-evolution.webp";
import startapExtra from "@/assets/startap-extra.webp";
import startapExtraSl from "@/assets/startap-extra-sl.webp";
import startapEssential from "@/assets/startap-essential.webp";
import startapPro from "@/assets/startap-pro.webp";

interface ProductCard {
  name: string;
  image: string;
  description: string;
  bullets: string[];
  badge?: string;
  videoUrl?: string;
}

const toEmbedUrl = (driveUrl: string) => {
  const match = driveUrl.match(/\/d\/([^/]+)\//);
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : driveUrl;
};

const coffeeProducts: ProductCard[] = [
  {
    name: "Lavazza in Black Elogy Bluetooth",
    image: lavazzaBluetooth,
    description: "La macchina da caffè compatta con interfaccia touch, Bluetooth e doppio beccuccio. Elegante e premiata con l'iF Design Award.",
    bullets: ["Touch intuitivo", "Bluetooth e App", "Bidose (2 caffè insieme)"],
    videoUrl: "https://drive.google.com/file/d/1fpuLirnPZbMVN5glge6neTUATpdOnyvo/view?usp=sharing",
  },
  {
    name: "Lavazza in Black Elogy Milk",
    image: lavazzaMilk,
    description: "Espresso, cappuccino, latte macchiato e molto altro. Il cappuccinatore integrato ti apre un mondo di preparazioni a base di latte.",
    bullets: ["Cappuccinatore integrato", "Touch intuitivo", "Bluetooth e App"],
    videoUrl: "https://drive.google.com/file/d/1UU1mcNXyTFCW1mAcA4-ZNz8Xe69p_u7p/view?usp=sharing",
  },
  {
    name: "Lavazza in Black Elogy Barista",
    image: lavazzaBarista,
    description: "La soluzione top di gamma per chi vuole la caffetteria italiana a casa. Oltre 30 ricette, accessorio BAR CUP incluso, Bluetooth e Wi-Fi.",
    bullets: ["Multibeverage", "Connettività Wi-Fi + Bluetooth", "Beccuccio bidose"],
    videoUrl: "https://drive.google.com/file/d/1O7Pfm0gi_iIPf4QM9_9Hz0RhRl_iB4W-/view?usp=sharing",
  },
];

const waterProducts: ProductCard[] = [
  {
    name: "Star Tap Evolution",
    image: startapEvolution,
    description: "Il frigogasatore sopra lavello con display touch a colori, lampada UVC anti-batterica, fino a 4 profili personalizzati e App My Nims.",
    bullets: ["Acqua fredda, liscia e frizzante", "Lampada UVC (99,9% batteri)", "Display touch + App"],
    badge: "TOP DI GAMMA",
    videoUrl: "https://drive.google.com/file/d/1tL2VTgw5kAslnwf2TKoG9yK_7RpC7R6V/view?usp=sharing",
  },
  {
    name: "Star Tap Extra",
    image: startapExtra,
    description: "Frigogasatore sopra lavello compatto, semplice e funzionale. Acqua pura fredda o frizzante con 5 tasti touch e Bluetooth.",
    bullets: ["Acqua fredda, liscia e frizzante", "5 tasti touch", "Bluetooth"],
  },
  {
    name: "Star Tap Extra SL",
    image: startapExtraSl,
    description: "Si installa sotto il lavello e non occupa spazio sul piano cucina. Stessi vantaggi dell'Extra, zero ingombro.",
    bullets: ["Sotto lavello", "Acqua fredda, liscia e frizzante", "Rubinetto dedicato in dotazione"],
    badge: "SOTTO LAVELLO",
  },
  {
    name: "Star Tap Essential",
    image: startapEssential,
    description: "Sistema filtrante sotto lavello con lampada UVC. Acqua microfiltrata dal rubinetto di casa, più pura e salubre ogni giorno.",
    bullets: ["Filtro multistrato 2500A", "Lampada UVC anti-batterica", "Compatto sotto lavello"],
    badge: "SOLO FILTRAZIONE",
  },
  {
    name: "Star Tap Pro",
    image: startapPro,
    description: "Il frigogasatore stand-alone pensato per uffici e ambienti di lavoro. Alta capacità, design professionale, Bluetooth e App My Nims.",
    bullets: ["Acqua fredda, liscia e frizzante", "Lampada UVC", "Ideale per uffici e studi"],
    badge: "PER UFFICIO",
  },
];

const scrollToContatti = () => {
  document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
};

const ProductCardComponent = ({ product, onPlayVideo }: { product: ProductCard; onPlayVideo: (url: string) => void }) => (
  <div className="relative bg-card rounded-2xl shadow-soft border border-border overflow-hidden flex flex-col">
    {product.badge && (
      <Badge className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-wider">
        {product.badge}
      </Badge>
    )}
    <div className="flex items-center justify-center p-6 bg-secondary/30">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-auto object-contain"
        loading="lazy"
      />
    </div>
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

  return (
    <>
      <section className="section-padding bg-background" id="macchine">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/8 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-5">
              Le Macchine
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-foreground">
              Le soluzioni disponibili
            </h2>
          </div>

          {/* Caffè */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2">Macchine per il Caffè</h3>
              <p className="text-muted-foreground text-sm md:text-base">Il meglio del caffè Lavazza in capsule, in comodato d'uso gratuito</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coffeeProducts.map((p) => (
                <ProductCardComponent key={p.name} product={p} onPlayVideo={(url) => setVideoUrl(toEmbedUrl(url))} />
              ))}
            </div>
          </div>

          {/* Separatore */}
          <div className="flex items-center gap-4 mb-16">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Acqua Microfiltrata</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Acqua */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2">Macchine per l'Acqua</h3>
              <p className="text-muted-foreground text-sm md:text-base">Acqua microfiltrata, fredda e frizzante direttamente dal tuo rubinetto</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {waterProducts.map((p) => (
                <ProductCardComponent key={p.name} product={p} onPlayVideo={(url) => setVideoUrl(toEmbedUrl(url))} />
              ))}
            </div>
          </div>
        </div>
      </section>

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
