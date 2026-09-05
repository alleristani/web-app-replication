import { MessageCircle, Users, TrendingUp, Award } from "lucide-react";
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
  <section className="section-padding bg-ink" id="lavora-con-noi">
    <div className="container-page">
      <div className="mb-12 md:mb-16">
        <span className="inline-block text-[11px] font-medium uppercase tracking-[0.18em] text-ink-foreground/55 mb-4">
          Opportunità
        </span>
        <h2 className="text-2xl md:text-4xl font-display text-ink-foreground mb-4">Lavora con noi</h2>
        <p className="text-ink-foreground/65 text-sm md:text-base measure">
          Il team Nims Lavazza è in crescita e siamo alla ricerca di persone motivate, intraprendenti e appassionate.
          Se cerchi un'opportunità flessibile, con formazione dedicata e il supporto di un grande brand, scrivimi — ti racconto tutto senza impegno.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
        {benefits.map((b) => (
          <div key={b.title} className="border-t border-ink-foreground/15 pt-5 h-full">
            <div className="flex items-center gap-2.5 mb-2">
              <b.icon className="w-[18px] h-[18px] text-ink-foreground shrink-0" strokeWidth={1.6} />
              <h3 className="font-display text-lg text-ink-foreground">{b.title}</h3>
            </div>
            <p className="text-ink-foreground/60 text-sm">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="mb-14">
        <a
          href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20a%20lavorare%20con%20il%20team%20Nims%20Lavazza"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-fresh text-fresh-foreground text-base font-medium transition-colors duration-150 hover:bg-fresh/90"
        >
          <MessageCircle className="w-5 h-5" />
          Scrivimi su WhatsApp
        </a>
        <p className="text-ink-foreground/40 text-xs mt-3">
          Nessun impegno. Ti spiego tutto in una chiacchierata.
        </p>
      </div>

      <div className="border-t border-ink-foreground/10 pt-10">
        <p className="text-ink-foreground/50 text-[11px] uppercase tracking-[0.18em] mb-6">In collaborazione con</p>
        <div className="flex items-center gap-10 md:gap-16">
          <img
            src={logoLavazza}
            alt="Logo Lavazza – Torino, Italia, 1895 – Gruppo Lavazza"
            className="h-8 md:h-10 object-contain opacity-85"
            loading="lazy"
            width={120}
            height={40}
          />
          <div className="w-px h-8 bg-ink-foreground/15" />
          <img
            src={logoNims}
            alt="Logo Nims Srl – azienda del Gruppo Lavazza"
            className="h-8 md:h-10 object-contain opacity-85"
            loading="lazy"
            width={120}
            height={40}
          />
        </div>
      </div>
    </div>
  </section>
);

export default LavoraConNoiSection;
