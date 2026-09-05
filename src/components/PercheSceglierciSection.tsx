import { Check } from "lucide-react";

const benefits = [
  "Un'esperienza personalizzata, non una semplice vendita online.",
  "Consigli da un professionista che conosce a fondo i prodotti Nims Lavazza.",
  "Nessun tempo perso: ti guido subito verso la scelta più adatta.",
  "Un consulente dedicato, raggiungibile via telefono o WhatsApp ovunque in Italia.",
];

const PercheSceglierciSection = () => (
  <section className="section-padding bg-cream" id="perche">
    <div className="container-page grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
      <div>
        <span className="eyebrow mb-3 block">I vantaggi</span>
        <h2 className="text-2xl md:text-4xl font-display text-foreground">
          Perché affidarti a un consulente dedicato
        </h2>
      </div>
      <ul className="space-y-4">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-3 border-b border-border pb-4 last:border-0">
            <Check className="w-[18px] h-[18px] text-primary shrink-0 mt-1" strokeWidth={1.8} />
            <span className="text-foreground text-base measure">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PercheSceglierciSection;
