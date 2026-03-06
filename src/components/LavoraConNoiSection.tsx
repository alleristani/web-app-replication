import { Button } from "@/components/ui/button";
import { MessageCircle, Users, TrendingUp, Award } from "lucide-react";

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
  <section className="section-padding bg-secondary" id="lavora-con-noi">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
          Opportunità
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">
          Lavora con noi
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          Il team Nims Lavazza è in crescita e siamo alla ricerca di persone motivate, intraprendenti e appassionate.
          Se cerchi un'opportunità flessibile, con formazione dedicata e il supporto di un grande brand, scrivimi — ti racconto tutto senza impegno.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-card rounded-2xl p-6 border border-border shadow-soft text-center space-y-3"
          >
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg text-foreground">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="whatsapp" size="lg" asChild className="gap-2 rounded-full text-base">
          <a
            href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20a%20lavorare%20con%20il%20team%20Nims%20Lavazza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5" /> Scrivimi su WhatsApp
          </a>
        </Button>
        <p className="text-xs text-muted-foreground mt-3">
          Nessun impegno. Ti spiego tutto in una chiacchierata.
        </p>
      </div>
    </div>
  </section>
);

export default LavoraConNoiSection;
