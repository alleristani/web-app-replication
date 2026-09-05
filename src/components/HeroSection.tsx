import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroMachine from "@/assets/lavazza-bluetooth-hq.webp";

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="bg-cream border-b border-border pt-[68px]">
      <div className="container-page grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center py-14 md:py-24">
        <div>
          <span className="eyebrow mb-5 block">Consulente Nims · Gruppo Lavazza</span>
          <h1 className="text-3xl md:text-5xl lg:text-[3.4rem] font-display font-semibold text-foreground mb-5 measure">
            Macchine caffè Lavazza e depuratori acqua, scelti su misura per te
          </h1>
          <p className="text-base md:text-lg text-muted-foreground measure mb-4">
            Sono <strong className="text-foreground font-medium">Alessio Ristani</strong>, consulente ufficiale{" "}
            <strong className="text-foreground font-medium">Nims Lavazza</strong> a Massafra (Taranto).
            <span className="hidden md:inline">
              {" "}Ti aiuto a scegliere la <strong className="text-foreground font-medium">macchina caffè Lavazza in Black in comodato d'uso gratuito</strong>, le capsule più adatte al tuo gusto e i{" "}
              <strong className="text-foreground font-medium">depuratori acqua microfiltrata Star Tap</strong> (acquisto o noleggio) — per casa, ufficio, partita IVA o azienda, in tutta Italia.
            </span>
          </p>
          <p className="text-sm md:text-base text-muted-foreground mb-8 measure">
            Contattami senza impegno: ti richiamo il prima possibile.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button size="lg" onClick={() => scrollTo("contatti")} className="gap-2">
              <Phone className="w-4 h-4" />
              Richiedi informazioni
            </Button>
            <a
              href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20alle%20soluzioni%20Nims%20Lavazza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Scrivimi su WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={heroMachine}
            alt="Macchina caffè Lavazza in Black Elogy Bluetooth, disponibile in comodato d'uso gratuito con il consulente Nims Alessio Ristani"
            className="w-full max-w-[340px] h-auto object-contain"
            loading="eager"
            fetchPriority="high"
            width={365}
            height={419}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
