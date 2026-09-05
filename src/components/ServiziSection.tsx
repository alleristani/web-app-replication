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
  <section className="section-padding bg-cream" id="servizi">
    <div className="container-page">
      <div className="mb-10 md:mb-14">
        <span className="eyebrow mb-3 block">Servizi</span>
        <h2 className="text-2xl md:text-4xl font-display text-foreground measure">
          Caffè Lavazza e depuratori acqua: soluzioni per casa, ufficio e aziende
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-lg p-7 border border-border h-full flex flex-col">
            <div className="flex items-center gap-2.5 mb-3">
              <s.icon className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={1.6} />
              <h3 className="text-lg font-display text-foreground">{s.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiziSection;
