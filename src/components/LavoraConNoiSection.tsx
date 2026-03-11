import { Button } from "@/components/ui/button";
import { MessageCircle, Users, TrendingUp, Award, ChevronRight } from "lucide-react";
import logoLavazza from "@/assets/logo-lavazza-transparent.png";
import logoNims from "@/assets/logo-nims-transparent.png";

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
  <section className="relative overflow-hidden" id="lavora-con-noi">
    <div className="bg-primary py-20 md:py-28 lg:py-32 px-5 md:px-8">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(38, 70%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(38, 70%, 40%) 0%, transparent 40%)`
      }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-accent text-xs font-bold uppercase tracking-[0.25em] mb-5">
            Opportunità
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-primary-foreground mb-5 leading-tight">
            Lavora con noi
          </h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-primary-foreground/55 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Il team Nims Lavazza è in crescita e siamo alla ricerca di persone motivate, intraprendenti e appassionate.
            Se cerchi un'opportunità flessibile, con formazione dedicata e il supporto di un grande brand, scrivimi — ti racconto tutto senza impegno.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-20">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group bg-primary-foreground/[0.04] backdrop-blur-sm border border-primary-foreground/[0.08] rounded-2xl p-7 md:p-8 text-center space-y-4 transition-all duration-300 hover:bg-primary-foreground/[0.07] hover:border-primary-foreground/[0.15]"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <b.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg md:text-xl text-primary-foreground">{b.title}</h3>
              <p className="text-primary-foreground/45 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-16 md:mb-20">
          <Button variant="whatsapp" size="lg" asChild className="gap-2.5 rounded-full text-base h-14 px-10 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <a
              href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20a%20lavorare%20con%20il%20team%20Nims%20Lavazza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Scrivimi su WhatsApp
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
          <p className="text-primary-foreground/25 text-xs mt-4 tracking-wide">
            Nessun impegno. Ti spiego tutto in una chiacchierata.
          </p>
        </div>

        {/* Partner logos */}
        <div className="border-t border-primary-foreground/[0.08] pt-10 md:pt-14">
          <p className="text-primary-foreground/20 text-[11px] uppercase tracking-[0.3em] text-center mb-8">
            In collaborazione con
          </p>
          <div className="flex items-center justify-center gap-10 md:gap-16 lg:gap-20">
            <img
              src={logoLavazza}
              alt="Lavazza — Torino, Italia, 1895"
              className="h-8 md:h-10 lg:h-12 object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
            />
            <div className="w-px h-8 bg-primary-foreground/10" />
            <img
              src={logoNims}
              alt="Nims"
              className="h-8 md:h-10 lg:h-12 object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LavoraConNoiSection;
