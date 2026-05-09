import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Sparkles, Coffee, Gift, CheckCircle2 } from "lucide-react";
import promoMachine from "@/assets/promo-machine.webp";
import promoCapsules from "@/assets/promo-capsules.jpg";

const PromoElogySection = () => {
  const scrollToForm = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-foreground via-foreground to-foreground/95 relative overflow-hidden" id="promo-elogy">
      {/* Decorative glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Top badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-black uppercase tracking-[0.25em] px-6 py-3 rounded-full shadow-vibrant">
            <Sparkles className="w-4 h-4" />
            Novità · Offerta Esclusiva NIMS
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-primary-foreground leading-[1.05] mb-4">
            Macchina <span className="text-accent">Lavazza in Black</span><br />
            Elogy Bluetooth
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-display">
            in <span className="text-accent font-bold">comodato d'uso</span> + <span className="text-accent font-bold">136 capsule incluse</span>
          </p>
        </div>

        {/* Main visual card */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-primary-foreground/[0.04] backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-6 md:p-10 mb-10">
          {/* Image stack */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 rounded-2xl p-8 flex items-center justify-center min-h-[320px]">
              <img
                src={promoMachine}
                alt="Macchina caffè Lavazza in Black Elogy Bluetooth in comodato d'uso"
                className="w-full max-w-xs h-auto object-contain drop-shadow-2xl"
                loading="lazy"
              />
              {/* Price tag */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-40 md:h-40 bg-accent rounded-full flex flex-col items-center justify-center shadow-vibrant rotate-[-8deg] border-4 border-primary-foreground">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-accent-foreground">Solo</span>
                <span className="text-3xl md:text-5xl font-display font-black text-accent-foreground leading-none">€44<span className="text-lg md:text-2xl align-top">,90</span></span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase text-accent-foreground/80 mt-1">prezzo trial</span>
              </div>
            </div>
            <div className="mt-4 bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 rounded-2xl p-4">
              <img
                src={promoCapsules}
                alt="136 capsule Lavazza in Black incluse nella prova"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-black text-primary-foreground mb-3">
                Come funziona la prova?
              </h3>
              <p className="text-primary-foreground/75 text-base leading-relaxed">
                Con soli <strong className="text-accent">€44,90</strong> ti consegno la <strong className="text-primary-foreground">macchina Lavazza in Black Elogy Bluetooth</strong> insieme a <strong className="text-primary-foreground">136 capsule</strong>. La provi a casa o in ufficio con tutta calma. Alla fine ci rivediamo:
              </p>
            </div>

            <ul className="space-y-3">
              {[
                { icon: Coffee, text: "Provi la macchina e le capsule per il tempo della degustazione" },
                { icon: CheckCircle2, text: "Se ti è piaciuta, ne parliamo insieme e troviamo la formula giusta" },
                { icon: Gift, text: "Se non fa per te, nessun impegno: ritiro io la macchina" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-primary-foreground/5 rounded-xl p-3 border border-primary-foreground/10">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm md:text-base text-primary-foreground/85 leading-relaxed pt-1">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button variant="default" size="lg" onClick={scrollToForm} className="gap-2 w-full sm:flex-1 h-14 sm:h-12 text-base font-bold px-6 bg-accent text-accent-foreground hover:bg-accent/90 shadow-vibrant">
                <Phone className="w-5 h-5 shrink-0" />
                Prenota la prova
              </Button>
              <Button variant="whatsapp" size="lg" asChild className="gap-2 w-full sm:flex-1 h-14 sm:h-12 text-base font-bold px-6">
                <a
                  href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20provare%20la%20macchina%20Lavazza%20in%20Black%20Elogy%20Bluetooth%20con%20le%20136%20capsule%20incluse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  Scrivimi su WhatsApp
                </a>
              </Button>
            </div>

            <p className="text-xs text-primary-foreground/50 text-center sm:text-left">
              ✓ Consegna inclusa · ✓ 136 capsule comprese nel prezzo · ✓ Zero vincoli post-prova
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoElogySection;
