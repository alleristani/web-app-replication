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
      <div className="max-w-3xl">
        <span className="eyebrow">Come funziona</span>
        <h2 className="mt-4 font-display text-3xl text-foreground md:text-[2.5rem]">
          Un percorso semplice e trasparente
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.title} className="flex flex-col bg-card p-7">
            <div className="flex items-center gap-3">
              <span className="font-display text-sm text-accent">{s.num}</span>
              <s.icon className="h-[18px] w-[18px] text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="mt-5 font-display text-lg text-foreground">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComeFunzionaSection;
