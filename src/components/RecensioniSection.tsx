import { Star } from "lucide-react";

const reviews = [
  {
    text: "La nuova macchina Lavazza in Black che mi ha consigliato Alessio è fantastica: veloce, silenziosa e il caffè esce sempre cremoso come al bar.",
    author: "Marta R.",
    category: "Cliente domestico",
  },
  {
    text: "Il caffè 100% Arabica che mi ha suggerito Alessio è profumato e morbido, ma allo stesso tempo con un gusto deciso che rimane piacevole in bocca.",
    author: "Elena G.",
    category: "Cliente domestico",
  },
  {
    text: "Con Alessio è stato tutto semplice: è venuto a casa, ci ha fatto assaggiare vari caffè e ci ha aiutato a scegliere macchina e miscela più adatte a noi.",
    author: "Valentina S.",
    category: "Cliente domestico",
  },
  {
    text: "Con la nuova macchina Barista preparo cappuccini, cioccolata e americano con un solo tocco. È intuitiva e ha rivoluzionato la pausa caffè in ufficio.",
    author: "Giovanni P.",
    category: "Cliente ufficio",
  },
  {
    text: "Apprezzo molto avere un referente diretto: per ordini, dubbi o assistenza scrivo ad Alessio su WhatsApp e mi risponde sempre in tempi rapidi.",
    author: "Davide R.",
    category: "Cliente ufficio",
  },
  {
    text: "Le capsule dal gusto più intenso sono diventate le preferite di tutta la famiglia: caffè cremoso, dal sapore pieno ma mai troppo amaro.",
    author: "Marco D.",
    category: "Cliente domestico",
  },
];

const RecensioniSection = () => (
  <section className="section-padding bg-secondary" id="recensioni">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
          Recensioni
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-foreground">
          Cosa dicono i clienti
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.author}
            className="bg-card rounded-2xl p-6 flex flex-col justify-between shadow-soft hover:shadow-vibrant transition-shadow duration-300"
          >
            <div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                {r.text}
              </p>
            </div>
            <div className="pt-3 border-t border-border">
              <span className="text-foreground font-bold text-sm">{r.author} – {r.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecensioniSection;
