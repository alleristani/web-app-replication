import { Home, Briefcase, Droplets } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Macchine caffè Lavazza per casa",
    text: "Ti guido nella scelta della macchina caffè Lavazza in Black in comodato d'uso gratuito e delle capsule Lavazza in Black più adatte al tuo gusto, con riordino semplice e puntuale a domicilio in tutta Italia.",
  },
  {
    icon: Briefcase,
    title: "Caffè Lavazza per ufficio e aziende",
    text: "Soluzioni Nims Lavazza per uffici, studi professionali, partite IVA e attività commerciali: macchine caffè in comodato d'uso gratuito, capsule Lavazza in Black e costi chiari per offrire una pausa caffè di qualità al tuo team.",
  },
  {
    icon: Droplets,
    title: "Depuratori acqua microfiltrata Star Tap",
    text: "Depuratori acqua Star Tap: acqua microfiltrata liscia, fredda o frizzante direttamente dal rubinetto. Disponibili in acquisto o noleggio mensile per famiglie, uffici e aziende. Meno plastica, più qualità ogni giorno.",
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
          Caffè Lavazza e depuratori acqua: soluzioni per casa, ufficio e aziende
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-lg p-8 shadow-soft text-center hover:shadow-soft transition-all duration-300 border border-border">
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