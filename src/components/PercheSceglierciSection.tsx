import { Check } from "lucide-react";

const benefits = [
  "Un'esperienza personalizzata, non una semplice vendita online.",
  "Consigli da un professionista che conosce a fondo i prodotti Nims Lavazza.",
  "Nessun tempo perso: ti guido subito verso la scelta più adatta.",
  "Un consulente dedicato, raggiungibile via telefono o WhatsApp ovunque in Italia.",
];

const PercheSceglierciSection = () => (
  <section className="section-padding bg-primary" id="perche">
    <div className="container-page">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow text-accent">I vantaggi</span>
          <h2 className="mt-4 font-display text-3xl text-primary-foreground md:text-[2.5rem]">
            Perché affidarti a un consulente dedicato
          </h2>
        </div>
        <ul className="md:col-span-6 md:col-start-7">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-4 border-b border-primary-foreground/12 py-5 first:pt-0 last:border-b-0">
              <Check className="mt-1 h-[18px] w-[18px] shrink-0 text-accent" strokeWidth={1.5} />
              <span className="text-[15px] leading-relaxed text-primary-foreground/85 md:text-base">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default PercheSceglierciSection;
