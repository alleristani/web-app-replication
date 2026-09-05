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
    <div className="container-page">
      <div className="max-w-3xl">
        <span className="eyebrow">Servizi</span>
        <h2 className="mt-4 font-display text-3xl text-foreground md:text-[2.5rem]">
          Caffè Lavazza e depuratori acqua: soluzioni per casa, ufficio e aziende
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="flex flex-col rounded-lg border border-border bg-card p-7">
            <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-xl text-foreground">{s.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiziSection;
