import { PhoneCall, HelpCircle, CheckCircle, HeartHandshake } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Mi contatti", text: "Mi chiami, mi scrivi su WhatsApp o compili il form: ti rispondo il prima possibile." },
  { icon: HelpCircle, title: "Ti faccio qualche domanda", text: "Capisco quante persone usano la macchina, quante pause caffè fate al giorno, se si tratta di casa, ufficio o attività." },
  { icon: CheckCircle, title: "Ti propongo la soluzione su misura", text: "Ti suggerisco macchina, capsule e servizi più adatti a te, con spiegazione chiara di costi e condizioni." },
  { icon: HeartHandshake, title: "Resto il tuo riferimento", text: "Per ordini, assistenza e promozioni hai sempre un contatto diretto: niente call center impersonali." },
];

const ComeFunzionaSection = () => (
  <section className="section-padding bg-card" id="come-funziona">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-10 text-center font-display">
        Come funziona il mio servizio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-3 relative">
              <s.icon className="w-6 h-6 text-accent" />
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="text-base font-bold text-foreground mb-2 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComeFunzionaSection;
