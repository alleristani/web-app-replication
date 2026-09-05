import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Coffee, Gift, CheckCircle2 } from "lucide-react";
import promoMachine from "@/assets/promo-machine.webp";
import promoCapsules from "@/assets/promo-capsules.jpg";

const PromoElogySection = () => {
  const scrollToForm = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground" id="promo-elogy">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Testo */}
          <div className="lg:col-span-6">
            <span className="eyebrow text-accent">
              Novità · Offerta Esclusiva NIMS
            </span>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] text-primary-foreground md:text-5xl">
              Macchina <span className="text-accent">Lavazza in Black</span> Elogy Bluetooth
            </h2>
            <p className="mt-4 font-display text-xl text-primary-foreground/80 md:text-2xl">
              in <span className="text-accent">comodato d'uso</span> + <span className="text-accent">136 capsule incluse</span>
            </p>

            <div className="mt-8 inline-flex items-baseline gap-3 border border-primary-foreground/15 px-5 py-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">Solo</span>
              <span className="font-display text-4xl text-accent">€44<span className="align-top text-xl">,90</span></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">prezzo trial</span>
            </div>

            <h3 className="mt-10 font-display text-2xl text-primary-foreground">
              Come funziona la prova?
            </h3>
            <p className="measure mt-3 leading-relaxed text-primary-foreground/70">
              Con soli <strong className="text-accent">€44,90</strong> ti consegno la <strong className="text-primary-foreground">macchina Lavazza in Black Elogy Bluetooth</strong> insieme a <strong className="text-primary-foreground">136 capsule</strong>. La provi a casa o in ufficio con tutta calma. Alla fine ci rivediamo:
            </p>

            <ul className="mt-6 space-y-4 border-t border-primary-foreground/12 pt-6">
              {[
                { icon: Coffee, text: "Provi la macchina e le capsule per il tempo della degustazione" },
                { icon: CheckCircle2, text: "Se ti è piaciuta, ne parliamo insieme e troviamo la formula giusta" },
                { icon: Gift, text: "Se non fa per te, nessun impegno: ritiro io la macchina" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <item.icon className="mt-1 h-[18px] w-[18px] shrink-0 text-accent" strokeWidth={1.5} />
                  <span className="measure text-[15px] leading-relaxed text-primary-foreground/80">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="lg" onClick={scrollToForm} className="w-full gap-2 sm:w-auto">
                <Phone className="h-4 w-4 shrink-0" />
                Prenota la prova
              </Button>
              <Button
                size="lg"
                asChild
                className="w-full gap-2 border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground sm:w-auto"
              >
                <a
                  href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20provare%20la%20macchina%20Lavazza%20in%20Black%20Elogy%20Bluetooth%20con%20le%20136%20capsule%20incluse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  Scrivimi su WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-5 text-xs text-primary-foreground/50">
              ✓ Consegna inclusa · ✓ 136 capsule comprese nel prezzo · ✓ Zero vincoli post-prova
            </p>
          </div>

          {/* Immagini */}
          <div className="grid gap-4 lg:col-span-6">
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-primary-foreground/[0.05] p-8">
              <img
                src={promoMachine}
                alt="Macchina caffè Lavazza in Black Elogy Bluetooth in comodato d'uso"
                className="h-full w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex aspect-[16/7] items-center justify-center overflow-hidden rounded-lg bg-primary-foreground/[0.05] p-4">
              <img
                src={promoCapsules}
                alt="136 capsule Lavazza in Black incluse nella prova"
                className="h-full w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoElogySection;
