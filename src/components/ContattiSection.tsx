import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContattiSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Richiesta inviata!",
        description: "Ti ricontatterò il prima possibile. Grazie!",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section className="section-padding bg-coffee-warm" id="contatti">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-center font-display">
          Contattami
        </h2>
        <p className="text-muted-foreground text-center mb-8 text-sm md:text-base">
          Compila il modulo e ti richiamerò per una consulenza gratuita e senza impegno.
        </p>

        <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 md:p-8 shadow-coffee space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Nome *</label>
              <Input required placeholder="Il tuo nome" className="h-12" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Cognome *</label>
              <Input required placeholder="Il tuo cognome" className="h-12" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Numero di telefono *</label>
            <Input required type="tel" inputMode="numeric" placeholder="Es. 333 1234567" className="h-12" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Indirizzo *</label>
            <Input required placeholder="Via, città, provincia" className="h-12" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Note (facoltativo)</label>
            <Textarea placeholder="Raccontami brevemente per cosa ti serve il caffè: casa, ufficio, attività…" rows={3} />
          </div>
          <p className="text-xs text-muted-foreground">
            I tuoi dati saranno utilizzati solo per ricontattarti in merito ai servizi Nims Lavazza. Nessuna comunicazione indesiderata.
          </p>
          <Button type="submit" size="lg" className="w-full h-14 text-base gap-2" disabled={loading}>
            <Send className="w-5 h-5" />
            {loading ? "Invio in corso..." : "Invia richiesta e fatti richiamare"}
          </Button>
        </form>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <a href="tel:+393491063216" className="flex items-center gap-2 text-primary font-medium hover:underline">
            <Phone className="w-4 h-4" /> 349 106 3216
          </a>
          <Button variant="whatsapp" size="sm" asChild className="gap-2">
            <a href="https://wa.me/393491063216" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" /> Scrivimi su WhatsApp
            </a>
          </Button>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" /> Massafra (TA) – Puglia e Basilicata
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContattiSection;
