import { Home, Briefcase, Droplets } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Per la tua casa",
    text: "Ti guido nella scelta della macchina caffè Lavazza in Black e delle capsule più adatte al tuo gusto, con formule trasparenti e un servizio di riordino semplice e puntuale.",
  },
  {
    icon: Briefcase,
    title: "Per il tuo ufficio",
    text: "Soluzioni pensate per uffici, studi professionali e attività commerciali. Una pausa caffè di qualità per il tuo team e i tuoi clienti, con macchine in comodato d'uso gratuito e costi chiari.",
  },
  {
    icon: Droplets,
    title: "Acqua microfiltrata Star Tap",
    text: "Sistemi di acqua microfiltrata Star Tap: liscia, fredda o frizzante direttamente dal rubinetto. Meno plastica, più qualità ogni giorno.",
  },
];

const ServiziSection = () => (
  <section className="section-padding bg-secondary" id="servizi">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block bg-primary/8 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-5">
          Servizi
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-foreground">
          Soluzioni Lavazza per casa, ufficio e attività commerciali
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-2xl p-8 shadow-soft text-center hover:shadow-vibrant transition-all duration-300 border border-border">
            <div className="w-14 h-14 rounded-full bg-primary/8 flex items-center justify-center mx-auto mb-6">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-display text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiziSection;