import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Coffee, Gift, CheckCircle2 } from "lucide-react";
import promoMachine from "@/assets/promo-machine.webp";
import promoCapsules from "@/assets/promo-capsules.webp";

const PromoElogySection = () => {
  const scrollToForm = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-ink" id="promo-elogy">
      <div className="container-page">
        <span className="inline-block text-[11px] font-medium uppercase tracking-[0.18em] text-ink-foreground/60 mb-4">
          Novità · Offerta Esclusiva NIMS
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-ink-foreground measure mb-3">
          Macchina Lavazza in Black Elogy Bluetooth
        </h2>
        <p className="text-lg md:text-xl text-ink-foreground/70 measure mb-12">
          in <span className="text-primary-foreground font-medium">comodato d'uso</span> +{" "}
          <span className="text-primary-foreground font-medium">136 capsule incluse</span>
        </p>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-4">
            <div className="relative rounded-lg bg-ink-foreground/[0.06] border border-ink-foreground/10 p-8 flex items-center justify-center min-h-[300px]">
              <img
                src={promoMachine}
                alt="Macchina caffè Lavazza in Black Elogy Bluetooth inclusa nella prova da 44,90 euro"
                className="w-full max-w-[260px] h-auto object-contain"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-md px-4 py-2 text-right">
                <span className="block text-[10px] uppercase tracking-[0.14em] opacity-80">Solo</span>
                <span className="block text-2xl font-display font-semibold leading-none">
                  €44<span className="text-base align-top">,90</span>
                </span>
                <span className="block text-[10px] uppercase tracking-[0.12em] opacity-80 mt-1">prezzo trial</span>
              </div>
            </div>
            <div className="rounded-lg bg-ink-foreground/[0.06] border border-ink-foreground/10 p-4">
              <img
                src={promoCapsules}
                alt="Le 136 capsule Lavazza in Black incluse nella prova della macchina Elogy Bluetooth"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-7">
            <div>
              <h3 className="text-2xl md:text-3xl font-display text-ink-foreground mb-3">
                Come funziona la prova?
              </h3>
              <p className="text-ink-foreground/70 measure">
                Con soli <strong className="text-ink-foreground font-medium">€44,90</strong> ti consegno la{" "}
                <strong className="text-ink-foreground font-medium">macchina Lavazza in Black Elogy Bluetooth</strong>{" "}
                insieme a <strong className="text-ink-foreground font-medium">136 capsule</strong>. La provi a casa o in ufficio con tutta calma. Alla fine ci rivediamo:
              </p>
            </div>

            <ul className="space-y-4">
              {[
                { icon: Coffee, text: "Provi la macchina e le capsule per il tempo della degustazione" },
                { icon: CheckCircle2, text: "Se ti è piaciuta, ne parliamo insieme e troviamo la formula giusta" },
                { icon: Gift, text: "Se non fa per te, nessun impegno: ritiro io la macchina" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 border-b border-ink-foreground/10 pb-4 last:border-0">
                  <item.icon className="w-[18px] h-[18px] text-primary-foreground shrink-0 mt-1" strokeWidth={1.6} />
                  <span className="text-ink-foreground/85 text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button size="lg" onClick={scrollToForm} className="gap-2">
                <Phone className="w-4 h-4" />
                Prenota la prova
              </Button>
              <a
                href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20provare%20la%20macchina%20Lavazza%20in%20Black%20Elogy%20Bluetooth%20con%20le%20136%20capsule%20incluse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-foreground underline-offset-4 hover:underline"
              >
                <MessageCircle className="w-4 h-4" /> Scrivimi su WhatsApp
              </a>
            </div>

            <p className="text-xs text-ink-foreground/50">
              ✓ Consegna inclusa · ✓ 136 capsule comprese nel prezzo · ✓ Zero vincoli post-prova
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoElogySection;
