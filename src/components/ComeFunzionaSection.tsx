import { PhoneCall, HelpCircle, CheckCircle, HeartHandshake } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Contattami", text: "Scrivimi su WhatsApp, chiamami o compila il modulo. Ti rispondo in tempi rapidi.", num: "01" },
  { icon: HelpCircle, title: "Ascolto le tue esigenze", text: "Capisco il contesto: casa, ufficio o attività. Quanti caffè al giorno, quali preferenze di gusto.", num: "02" },
  { icon: CheckCircle, title: "Proposta su misura", text: "Ti suggerisco macchina, capsule e formula più adatte, con condizioni chiare e senza sorprese.", num: "03" },
  { icon: HeartHandshake, title: "Un riferimento continuo", text: "Per riordini, assistenza e promozioni hai sempre un contatto diretto e personale.", num: "04" },
];

const ComeFunzionaSection = () => (
  <section className="section-padding bg-background" id="come-funziona">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block bg-primary/8 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-5">
          Come funziona
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-foreground">
          Un percorso semplice e trasparente
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.title} className="text-center bg-card rounded-2xl p-6 shadow-soft border border-border">
            <span className="text-4xl font-display text-primary/15 font-black block mb-2">{s.num}</span>
            <div className="w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-display text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComeFunzionaSection;
