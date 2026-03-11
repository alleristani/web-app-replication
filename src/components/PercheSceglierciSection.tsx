import { Check } from "lucide-react";

const benefits = [
  "Un'esperienza personalizzata, non una semplice vendita online.",
  "Consigli da un professionista che conosce a fondo i prodotti Nims Lavazza.",
  "Nessun tempo perso: ti guido subito verso la scelta più adatta.",
  "Un consulente dedicato, raggiungibile via telefono o WhatsApp ovunque in Italia.",
];

const PercheSceglierciSection = () => (
  <section className="section-padding bg-primary" id="perche">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-primary-foreground/15 text-primary-foreground text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-5">
          I vantaggi
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-primary-foreground">
          Perché affidarti a un consulente dedicato
        </h2>
      </div>
      <ul className="space-y-4">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-4 bg-primary-foreground/8 backdrop-blur-sm rounded-2xl p-5">
            <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-5 h-5 text-primary" />
            </div>
            <span className="text-primary-foreground text-sm md:text-base font-medium">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PercheSceglierciSection;
