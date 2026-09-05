import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroCoffee from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden">
      <img
        src={heroCoffee}
        alt="Macchina caffè Lavazza in Black e depuratore acqua Star Tap – Consulente Nims Lavazza Massafra Taranto"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="container-page relative z-10 w-full section-padding">
        <div className="max-w-2xl">
          <span className="eyebrow text-primary-foreground/70">
            Consulente Nims · Gruppo Lavazza
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] text-primary-foreground md:text-6xl">
            Macchine caffè Lavazza e depuratori acqua, scelti su misura per te
          </h1>
          <p className="measure mt-6 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Sono <strong className="text-primary-foreground">Alessio Ristani</strong>, consulente ufficiale <strong className="text-primary-foreground">Nims Lavazza</strong> a Massafra (Taranto). Ti aiuto a scegliere la <strong className="text-primary-foreground">macchina caffè Lavazza in Black in comodato d'uso gratuito</strong>, le capsule più adatte al tuo gusto e i <strong className="text-primary-foreground">depuratori acqua microfiltrata Star Tap</strong> (acquisto o noleggio) — per casa, ufficio, partita IVA o azienda, in tutta Italia.
          </p>
          <p className="mt-4 text-sm text-primary-foreground/60 md:text-base">
            Contattami senza impegno: ti richiamo il prima possibile.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="lg" onClick={scrollToForm} className="gap-2">
              <Phone className="h-4 w-4" />
              Richiedi informazioni
            </Button>
            <Button
              size="lg"
              asChild
              className="gap-2 border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            >
              <a href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20alle%20soluzioni%20Nims%20Lavazza" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Scrivimi su WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
