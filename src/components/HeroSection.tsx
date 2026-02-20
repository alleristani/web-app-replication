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
        alt="Caffè espresso Lavazza"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="relative z-10 w-full max-w-3xl mx-auto section-padding text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-5 animate-fade-up font-display">
          Il tuo Personal Shopper del Caffè Lavazza in Puglia e Basilicata
        </h1>
        <p className="text-base md:text-lg text-primary-foreground/90 mb-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Sono Alessio Ristani, ti porto a casa e in ufficio la qualità del caffè Lavazza e i servizi Nims, aiutandoti a scegliere la soluzione più adatta alle tue esigenze.
        </p>
        <p className="text-sm md:text-base text-primary-foreground/75 mb-8 italic animate-fade-up" style={{ animationDelay: "0.3s" }}>
          "Consulenza personalizzata, rapporto diretto, niente acquisti complicati: pensi al caffè, al resto penso io."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <Button variant="hero" size="lg" onClick={scrollToForm} className="gap-2 h-14 px-8 text-base">
            <Phone className="w-5 h-5" />
            Richiedi informazioni
          </Button>
          <Button variant="whatsapp" size="lg" asChild className="gap-2 h-14 px-8 text-base">
            <a href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20informazioni%20sui%20servizi%20Nims%20Lavazza." target="_blank" rel="noopener noreferrer">
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
