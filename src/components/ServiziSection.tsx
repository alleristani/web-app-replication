import { Home, Briefcase, Droplets } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Per la casa",
    text: "Ti aiuto a scegliere la macchina e le capsule Lavazza più adatte al tuo gusto, ti spiego le formule Nims e seguo i riordini e le promozioni dedicate.",
  },
  {
    icon: Briefcase,
    title: "Per uffici e attività",
    text: "Soluzioni per uffici, studi professionali, negozi e piccoli business, con attenzione a comodità, immagine e costi chiari.",
  },
  {
    icon: Droplets,
    title: "Acqua microfiltrata",
    text: "Soluzioni per acqua microfiltrata Nims (Star Tap), ideali per famiglie e uffici che vogliono ridurre plastica e avere acqua di qualità sempre disponibile.",
  },
];

const ServiziSection = () => (
  <section className="section-padding bg-coffee-warm" id="servizi">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-10 text-center font-display">
        Cosa posso fare per te
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-lg p-6 shadow-coffee text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiziSection;
