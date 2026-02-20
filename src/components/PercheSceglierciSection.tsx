import { Check } from "lucide-react";

const benefits = [
  "Esperienza di acquisto personalizzata, non una semplice transazione.",
  "Consigli di un esperto del caffè che conosce prodotti e servizi Nims Lavazza.",
  "Risparmio di tempo: ti aiuto a scegliere subito la soluzione giusta.",
  "Un consulente di fiducia nel tuo territorio, sempre raggiungibile.",
];

const PercheSceglierciSection = () => (
  <section className="section-padding bg-coffee-warm" id="perche">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center font-display">
        Perché scegliere un Personal Shopper del Caffè
      </h2>
      <ul className="space-y-4">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-3 bg-card rounded-lg p-4 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <span className="text-foreground text-sm md:text-base">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PercheSceglierciSection;
