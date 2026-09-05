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
  <section className="section-padding bg-background" id="faq">
    <div className="container-page">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-[2.5rem]">
            Domande frequenti
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-medium text-foreground hover:no-underline md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="measure pb-5 text-[15px] leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);

export default FAQSection;
