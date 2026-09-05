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
  <section className="section-padding bg-cream" id="faq">
    <div className="container-page grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
      <div>
        <span className="eyebrow mb-3 block">FAQ</span>
        <h2 className="text-2xl md:text-4xl font-display text-foreground">Domande frequenti</h2>
      </div>
      <Accordion type="single" collapsible className="border-t border-border">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
            <AccordionTrigger className="text-left text-foreground font-display text-base md:text-lg py-5 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm measure pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
