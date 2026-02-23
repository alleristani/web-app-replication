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
        <span className="inline-block bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-6 animate-fade-up border border-primary-foreground/20">
          ☕ Consulenza sul caffè Lavazza in tutta Italia
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-black text-primary-foreground leading-tight mb-5 animate-fade-up">
          Il tuo Personal Shopper del Caffè
        </h1>
        <p className="text-base md:text-lg text-primary-foreground/90 mb-4 animate-fade-up max-w-xl mx-auto" style={{ animationDelay: "0.15s" }}>
          Sono <strong>Alessio Ristani</strong>, ti porto a casa e in ufficio la qualità del caffè Lavazza e i servizi Nims.
        </p>
        <p className="text-sm md:text-base text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Scrivimi su WhatsApp o compila il modulo: ti ricontatto il prima possibile.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <Button variant="hero" size="lg" onClick={scrollToForm} className="gap-2 h-14 px-8 text-base rounded-full">
            <Phone className="w-5 h-5" />
            Richiedi informazioni
          </Button>
          <Button variant="whatsapp" size="lg" asChild className="gap-2 h-14 px-8 text-base rounded-full">
            <a href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20alle%20soluzioni%20Nims%20Lavazza%20per%20il%20caffe" target="_blank" rel="noopener noreferrer">
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
