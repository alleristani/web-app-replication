import { PhoneCall, HelpCircle, CheckCircle, HeartHandshake } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Mi contatti", text: "Mi chiami, mi scrivi su WhatsApp o compili il form: ti rispondo il prima possibile.", num: "01" },
  { icon: HelpCircle, title: "Ti faccio qualche domanda", text: "Capisco quante persone usano la macchina, quante pause caffè fate al giorno, se si tratta di casa, ufficio o attività.", num: "02" },
  { icon: CheckCircle, title: "Soluzione su misura", text: "Ti suggerisco macchina, capsule e servizi più adatti a te, con spiegazione chiara di costi e condizioni.", num: "03" },
  { icon: HeartHandshake, title: "Resto il tuo riferimento", text: "Per ordini, assistenza e promozioni hai sempre un contatto diretto: niente call center impersonali.", num: "04" },
];

const ComeFunzionaSection = () => (
  <section className="section-padding bg-background" id="come-funziona">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
          Come funziona
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-foreground">
          Semplice come un caffè
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.title} className="text-center bg-card rounded-2xl p-6 shadow-soft">
            <span className="text-4xl font-display text-primary/20 font-black block mb-2">{s.num}</span>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <s.icon className="w-6 h-6 text-primary" />
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
