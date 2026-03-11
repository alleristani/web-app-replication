import { Star } from "lucide-react";

const reviews = [
  {
    text: "La macchina Lavazza in Black che mi ha consigliato Alessio è perfetta: veloce, silenziosa e il caffè esce sempre con una crema impeccabile.",
    author: "Marta R.",
    category: "Casa",
  },
  {
    text: "Il caffè 100% Arabica che mi ha suggerito è profumato, morbido ma con un gusto deciso. Finalmente un espresso come al bar, ogni mattina.",
    author: "Elena G.",
    category: "Casa",
  },
  {
    text: "Alessio è venuto a casa, ci ha fatto provare diverse miscele e ci ha guidato nella scelta con grande professionalità. Esperienza impeccabile.",
    author: "Valentina S.",
    category: "Casa",
  },
  {
    text: "Con la Barista prepariamo cappuccini e americani con un solo tocco. Ha rivoluzionato la pausa caffè del nostro studio.",
    author: "Giovanni P.",
    category: "Ufficio",
  },
  {
    text: "Avere un referente diretto fa la differenza: scrivo ad Alessio su WhatsApp e ricevo risposte rapide e puntuali. Servizio eccellente.",
    author: "Davide R.",
    category: "Ufficio",
  },
  {
    text: "Le capsule dal gusto più intenso sono diventate le preferite di tutta la famiglia. Caffè cremoso, pieno ma mai troppo amaro.",
    author: "Marco D.",
    category: "Casa",
  },
];

const RecensioniSection = () => (
  <section className="section-padding bg-secondary" id="recensioni">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block bg-primary/8 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-5">
          Testimonianze
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-foreground">
          La soddisfazione dei nostri clienti
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.author}
            className="bg-card rounded-2xl p-6 flex flex-col justify-between shadow-soft border border-border hover:shadow-vibrant transition-shadow duration-300"
          >
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                "{r.text}"
              </p>
            </div>
            <div className="pt-3 border-t border-border">
              <span className="text-foreground font-bold text-sm">{r.author}</span>
              <span className="text-muted-foreground text-xs ml-2">· {r.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecensioniSection;
