import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroCoffee from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src={heroCoffee}
        alt="Macchina caffè Lavazza in Black e depuratore acqua Star Tap – Consulente Nims Lavazza Massafra Taranto"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="relative z-10 w-full max-w-3xl mx-auto section-padding text-center">
        <span className="inline-block bg-primary-foreground/10 text-primary-foreground text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6 animate-fade-up border border-primary-foreground/15">
          Consulente Nims · Gruppo Lavazza
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-black text-primary-foreground leading-tight mb-6 animate-fade-up">
          Macchine caffè Lavazza e depuratori acqua,<br className="hidden md:block" /> scelti su misura per te
        </h1>
        <p className="text-base md:text-lg text-primary-foreground/85 mb-4 animate-fade-up max-w-xl mx-auto leading-relaxed" style={{ animationDelay: "0.15s" }}>
          Sono <strong>Alessio Ristani</strong>, consulente ufficiale <strong>Nims Lavazza</strong> a Massafra (Taranto). Ti aiuto a scegliere la <strong>macchina caffè Lavazza in Black in comodato d'uso gratuito</strong>, le capsule più adatte al tuo gusto e i <strong>depuratori acqua microfiltrata Star Tap</strong> (acquisto o noleggio) — per casa, ufficio, partita IVA o azienda, in tutta Italia.
        </p>
        <p className="text-sm md:text-base text-primary-foreground/60 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Contattami senza impegno: ti richiamo il prima possibile.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <Button variant="hero" size="lg" onClick={scrollToForm} className="gap-2 h-14 px-8 text-base rounded-full">
            <Phone className="w-5 h-5" />
            Richiedi informazioni
          </Button>
          <Button variant="whatsapp" size="lg" asChild className="gap-2 h-14 px-8 text-base rounded-full">
            <a href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20alle%20soluzioni%20Nims%20Lavazza" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Scrivimi su WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;