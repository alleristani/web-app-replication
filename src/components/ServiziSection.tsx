import { Home, Briefcase, Droplets } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Per la casa",
    text: "Ti aiuto a scegliere la macchina e le capsule Lavazza più adatte al tuo gusto, ti spiego le formule Nims e seguo i riordini e le promozioni dedicate.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Briefcase,
    title: "Per uffici e attività",
    text: "Soluzioni per uffici, studi professionali, negozi e piccoli business, con attenzione a comodità, immagine e costi chiari.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Droplets,
    title: "Acqua microfiltrata",
    text: "Soluzioni per acqua microfiltrata Nims (Star Tap), ideali per famiglie e uffici che vogliono ridurre plastica e avere acqua di qualità.",
    color: "bg-vibrant/10 text-vibrant",
  },
];

const ServiziSection = () => (
  <section className="section-padding bg-secondary" id="servizi">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
          Servizi
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-foreground">
          Cosa posso fare per te
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-2xl p-8 shadow-soft text-center hover:shadow-vibrant transition-shadow duration-300">
            <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mx-auto mb-5`}>
              <s.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiziSection;
