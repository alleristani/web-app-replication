import { Star } from "lucide-react";

const reviews = [
  {
    text: "La nuova macchina Lavazza in Black che mi ha consigliato Alessio è fantastica: veloce, silenziosa e il caffè esce sempre cremoso come al bar.",
    author: "Marta R.",
    category: "Macchina e Servizio",
  },
  {
    text: "Il caffè 100% Arabica che mi ha suggerito Alessio è profumato e morbido, ma allo stesso tempo con un gusto deciso che rimane piacevole in bocca.",
    author: "Elena G.",
    category: "Caffè e Miscele",
  },
  {
    text: "Con Alessio è stato tutto semplice: è venuto a casa, ci ha fatto assaggiare vari caffè e ci ha aiutato a scegliere macchina e miscela più adatte a noi.",
    author: "Valentina S.",
    category: "Personal Shopper",
  },
  {
    text: "Con la nuova macchina Barista preparo cappuccini, cioccolata e americano con un solo tocco. È intuitiva e ha rivoluzionato la pausa caffè in ufficio.",
    author: "Giovanni P.",
    category: "Macchina e Servizio",
  },
  {
    text: "Apprezzo molto avere un referente diretto: per ordini, dubbi o assistenza scrivo ad Alessio su WhatsApp e mi risponde sempre in tempi rapidi.",
    author: "Davide R.",
    category: "Personal Shopper",
  },
  {
    text: "Le capsule dal gusto più intenso sono diventate le preferite di tutta la famiglia: caffè cremoso, dal sapore pieno ma mai troppo amaro.",
    author: "Marco D.",
    category: "Caffè e Miscele",
  },
];

const RecensioniSection = () => (
  <section className="section-padding bg-card" id="recensioni">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-10 text-center font-display">
        Cosa dicono i clienti
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.author}
            className="bg-muted rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/85 text-sm leading-relaxed italic mb-4">
                "{r.text}"
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-foreground font-semibold text-sm">{r.author}</span>
              <span className="text-muted-foreground text-xs">{r.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecensioniSection;
