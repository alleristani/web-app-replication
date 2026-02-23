import { Check } from "lucide-react";

const benefits = [
  "Esperienza di acquisto personalizzata, non una semplice transazione.",
  "Consigli di un esperto del caffè che conosce prodotti e servizi Nims Lavazza.",
  "Risparmio di tempo: ti aiuto a scegliere subito la soluzione giusta.",
  "Un consulente di fiducia, raggiungibile rapidamente via telefono o WhatsApp ovunque tu sia in Italia.",
];

const PercheSceglierciSection = () => (
  <section className="section-padding bg-primary" id="perche">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-block bg-primary-foreground/20 text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
          Vantaggi
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-primary-foreground">
          Perché scegliere un Personal Shopper del Caffè
        </h2>
      </div>
      <ul className="space-y-4">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5">
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
