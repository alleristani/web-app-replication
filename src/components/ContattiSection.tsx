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
    <section className="section-padding bg-background" id="contatti">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Contatti
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">
            Parliamone!
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Compila il modulo e ti richiamerò per una consulenza gratuita e senza impegno.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-soft space-y-4 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Nome *</label>
              <Input required placeholder="Il tuo nome" className="h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Cognome *</label>
              <Input required placeholder="Il tuo cognome" className="h-12 rounded-xl" />
            </div>
          </div>
          <div>
            <label className="text-sm font-bold text-foreground mb-1.5 block">Numero di telefono *</label>
            <Input required type="tel" inputMode="numeric" placeholder="Es. 333 1234567" className="h-12 rounded-xl" />
          </div>
          <div>
            <label className="text-sm font-bold text-foreground mb-1.5 block">Indirizzo *</label>
            <Input required placeholder="Via, città, provincia" className="h-12 rounded-xl" />
          </div>
          <div>
            <label className="text-sm font-bold text-foreground mb-1.5 block">Note (facoltativo)</label>
            <Textarea placeholder="Raccontami brevemente per cosa ti serve il caffè: casa, ufficio, attività…" rows={3} className="rounded-xl" />
          </div>
          <p className="text-xs text-muted-foreground">
            I tuoi dati saranno utilizzati solo per ricontattarti. Nessuna comunicazione indesiderata.
          </p>
          <Button type="submit" size="lg" className="w-full h-14 text-base gap-2 rounded-full" disabled={loading}>
            <Send className="w-5 h-5" />
            {loading ? "Invio in corso..." : "Invia richiesta e fatti richiamare"}
          </Button>
        </form>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <a href="tel:+393491063216" className="flex items-center gap-2 text-primary font-bold hover:underline">
            <Phone className="w-4 h-4" /> 349 106 3216
          </a>
          <Button variant="whatsapp" size="sm" asChild className="gap-2 rounded-full">
            <a href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20informazioni%20sui%20servizi%20Nims%20Lavazza." target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" /> Scrivimi su WhatsApp
            </a>
          </Button>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" /> Tutta Italia
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContattiSection;
