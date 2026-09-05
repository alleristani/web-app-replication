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
  <section className="section-padding bg-background" id="recensioni">
    <div className="container-page">
      <div className="mb-10 md:mb-14">
        <span className="eyebrow mb-3 block">Testimonianze</span>
        <h2 className="text-2xl md:text-4xl font-display text-foreground measure">
          Recensioni Clienti: Cosa Dicono di Nims Lavazza
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <figure
            key={r.author}
            className="bg-card rounded-lg p-6 border border-border flex flex-col h-full"
          >
            <div className="flex gap-0.5 mb-4" aria-label="Valutazione 5 stelle su 5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-foreground/85 text-sm mb-5 flex-1">"{r.text}"</blockquote>
            <figcaption className="pt-4 border-t border-border text-sm">
              <span className="text-foreground font-medium">{r.author}</span>
              <span className="text-muted-foreground"> · {r.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default RecensioniSection;
