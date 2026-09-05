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
    <div className="container-page">
      <div className="max-w-3xl">
        <span className="eyebrow">Testimonianze</span>
        <h2 className="mt-4 font-display text-3xl text-foreground md:text-[2.5rem]">
          Recensioni Clienti: Cosa Dicono di Nims Lavazza
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure
            key={r.author}
            className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-7"
          >
            <div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-[14px] w-[14px] fill-accent text-accent" strokeWidth={1.5} />
                ))}
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-foreground/85">
                "{r.text}"
              </blockquote>
            </div>
            <figcaption className="mt-6 border-t border-border pt-4 text-sm">
              <span className="font-medium text-foreground">{r.author}</span>
              <span className="ml-2 text-muted-foreground">· {r.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default RecensioniSection;
