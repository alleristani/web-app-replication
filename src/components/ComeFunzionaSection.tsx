import { PhoneCall, HelpCircle, CheckCircle, HeartHandshake } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Contattami", text: "Scrivimi su WhatsApp, chiamami o compila il modulo. Ti rispondo in tempi rapidi.", num: "01" },
  { icon: HelpCircle, title: "Ascolto le tue esigenze", text: "Capisco il contesto: casa, ufficio o attività. Quanti caffè al giorno, quali preferenze di gusto.", num: "02" },
  { icon: CheckCircle, title: "Proposta su misura", text: "Ti suggerisco macchina, capsule e formula più adatte, con condizioni chiare e senza sorprese.", num: "03" },
  { icon: HeartHandshake, title: "Un riferimento continuo", text: "Per riordini, assistenza e promozioni hai sempre un contatto diretto e personale.", num: "04" },
];

const ComeFunzionaSection = () => (
  <section className="section-padding bg-background" id="come-funziona">
    <div className="container-page">
      <div className="mb-10 md:mb-14">
        <span className="eyebrow mb-3 block">Come funziona</span>
        <h2 className="text-2xl md:text-4xl font-display text-foreground measure">
          Un percorso semplice e trasparente
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.title} className="border-t border-border pt-5 h-full flex flex-col">
            <span className="text-xs font-medium tracking-[0.14em] text-muted-foreground block mb-3">{s.num}</span>
            <div className="flex items-center gap-2.5 mb-2">
              <s.icon className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={1.6} />
              <h3 className="text-base font-display text-foreground">{s.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComeFunzionaSection;
