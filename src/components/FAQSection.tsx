import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Come funziona il comodato d'uso gratuito delle macchine Lavazza?",
    answer: "Con Nims Lavazza puoi avere la macchina caffè in comodato d'uso completamente gratuito. Non paghi la macchina: acquisti solo le capsule Lavazza in Black che ti servono.",
  },
  {
    question: "Quali macchine caffè Lavazza sono disponibili?",
    answer: "Sono disponibili tre modelli Lavazza in Black: Elogy Bluetooth, Elogy Milk (con cappuccinatore) e Elogy Barista (top di gamma con oltre 30 ricette).",
  },
  {
    question: "Posso ricevere la consulenza anche fuori dalla Puglia?",
    answer: "Sì, il servizio è disponibile in tutta Italia. Offro consulenza telefonica, via WhatsApp e videochiamata per privati, uffici e attività commerciali.",
  },
  {
    question: "Cos'è il sistema Star Tap per l'acqua microfiltrata?",
    answer: "Star Tap è il sistema di acqua microfiltrata Nims: eroga acqua fredda, liscia o frizzante direttamente dal rubinetto, eliminando la plastica delle bottiglie.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-secondary" id="faq">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-primary/8 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-5">
          FAQ
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-foreground">
          Domande frequenti
        </h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-2xl border border-border px-6 shadow-soft"
          >
            <AccordionTrigger className="text-left text-foreground font-display font-bold text-base hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;