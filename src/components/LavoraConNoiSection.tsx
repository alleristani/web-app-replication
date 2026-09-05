import { Button } from "@/components/ui/button";
import { MessageCircle, Users, TrendingUp, Award, ChevronRight } from "lucide-react";
import logoLavazza from "@/assets/logo-lavazza-bianco.png";
import logoNims from "@/assets/logo-nims-bianco.png";

const benefits = [
  {
    icon: Users,
    title: "Un team solido",
    desc: "Entra a far parte di una rete di professionisti supportata dal Gruppo Lavazza.",
  },
  {
    icon: TrendingUp,
    title: "Crescita continua",
    desc: "Formazione costante, affiancamento sul campo e percorsi di sviluppo professionale.",
  },
  {
    icon: Award,
    title: "Incentivi e premi",
    desc: "Programmi di incentivazione, riconoscimenti e benefit esclusivi per chi si distingue.",
  },
];

const LavoraConNoiSection = () => (
  <section className="section-padding bg-primary" id="lavora-con-noi">
    <div className="container-page">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow text-accent">Opportunità</span>
          <h2 className="mt-4 font-display text-3xl text-primary-foreground md:text-[2.5rem]">
            Lavora con noi
          </h2>
          <p className="measure mt-5 text-[15px] leading-relaxed text-primary-foreground/65 md:text-base">
            Il team Nims Lavazza è in crescita e siamo alla ricerca di persone motivate, intraprendenti e appassionate.
            Se cerchi un'opportunità flessibile, con formazione dedicata e il supporto di un grande brand, scrivimi — ti racconto tutto senza impegno.
          </p>
          <div className="mt-8">
            <Button variant="whatsapp" size="lg" asChild className="gap-2">
              <a
                href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20a%20lavorare%20con%20il%20team%20Nims%20Lavazza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Scrivimi su WhatsApp
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
            <p className="mt-4 text-xs text-primary-foreground/40">
              Nessun impegno. Ti spiego tutto in una chiacchierata.
            </p>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="border-t border-primary-foreground/12">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-5 border-b border-primary-foreground/12 py-6">
                <b.icon className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-lg text-primary-foreground">{b.title}</h3>
                  <p className="measure mt-1.5 text-[15px] leading-relaxed text-primary-foreground/55">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary-foreground/50">
              In collaborazione con
            </p>
            <div className="mt-6 flex items-center gap-10 md:gap-14">
              <img
                src={logoLavazza}
                alt="Lavazza – Torino, Italia, 1895 – Gruppo Lavazza"
                className="h-8 w-auto object-contain opacity-80 transition-opacity duration-150 hover:opacity-100 md:h-9"
                loading="lazy"
                width={120}
                height={48}
              />
              <div className="h-8 w-px bg-primary-foreground/12" />
              <img
                src={logoNims}
                alt="Nims Srl – azienda del Gruppo Lavazza"
                className="h-8 w-auto object-contain opacity-80 transition-opacity duration-150 hover:opacity-100 md:h-9"
                loading="lazy"
                width={120}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LavoraConNoiSection;
