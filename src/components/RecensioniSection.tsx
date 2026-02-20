import { MessageSquareQuote } from "lucide-react";

const RecensioniSection = () => (
  <section className="section-padding bg-card" id="recensioni">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 font-display">
        Cosa dicono i clienti
      </h2>
      <div className="bg-muted rounded-lg p-8">
        <MessageSquareQuote className="w-10 h-10 text-muted-foreground/40 mx-auto mb-4" />
        <p className="text-muted-foreground italic text-sm md:text-base">
          Questa sezione raccoglierà le esperienze dei clienti che hanno scelto di affidare il loro caffè a Nims Lavazza con il mio supporto.
        </p>
      </div>
    </div>
  </section>
);

export default RecensioniSection;
