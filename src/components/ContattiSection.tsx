import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContattiSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          nome: formData.get("nome"),
          cognome: formData.get("cognome"),
          telefono: formData.get("telefono"),
          indirizzo: formData.get("indirizzo"),
          paese: formData.get("paese"),
          provincia: formData.get("provincia"),
          note: formData.get("note"),
        },
      });

      if (error) throw error;

      toast({
        title: "Richiesta inviata!",
        description: "Ti ricontatterò il prima possibile. Grazie!",
      });
      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova o contattami su WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = "h-12 rounded-md border-border bg-card focus-visible:ring-primary";

  return (
    <section className="section-padding bg-background" id="contatti">
      <div className="container-page grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start">
        <div>
          <span className="eyebrow mb-3 block">Contatti</span>
          <h2 className="text-2xl md:text-4xl font-display text-foreground mb-4">
            Contattami: Consulenza Gratuita Nims Lavazza
          </h2>
          <p className="text-muted-foreground text-sm md:text-base measure mb-6">
            Compila il modulo e ti ricontatto entro la giornata lavorativa. Servizio disponibile in tutta Italia.
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+393491063216" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors duration-150 py-1">
                <Phone className="w-4 h-4 text-primary" strokeWidth={1.6} /> 349 106 3216
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20alle%20soluzioni%20Nims%20Lavazza%20per%20il%20caffe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors duration-150 py-1"
              >
                <MessageCircle className="w-4 h-4 text-primary" strokeWidth={1.6} /> Scrivimi su WhatsApp
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-muted-foreground py-1">
              <MapPin className="w-4 h-4 text-primary" strokeWidth={1.6} /> Massafra (TA) – Tutta Italia
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 md:p-8 border border-border space-y-5">
          {sent && (
            <div
              role="status"
              className="flex items-start gap-2.5 rounded-md border border-fresh/30 bg-fresh/[0.07] p-4 text-sm text-foreground"
            >
              <CheckCircle2 className="w-[18px] h-[18px] text-fresh shrink-0 mt-0.5" strokeWidth={1.8} />
              <span>Grazie, ti ricontatto entro la giornata lavorativa.</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nome" className="text-sm font-medium text-foreground mb-1.5 block">Nome *</label>
              <Input id="nome" required name="nome" placeholder="Il tuo nome" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="cognome" className="text-sm font-medium text-foreground mb-1.5 block">Cognome</label>
              <Input id="cognome" name="cognome" placeholder="Il tuo cognome" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="telefono" className="text-sm font-medium text-foreground mb-1.5 block">Numero di telefono *</label>
              <Input id="telefono" required name="telefono" type="tel" inputMode="numeric" placeholder="Es. 349 1234567" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="indirizzo" className="text-sm font-medium text-foreground mb-1.5 block">Indirizzo</label>
              <Input id="indirizzo" name="indirizzo" placeholder="Via e numero civico" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="paese" className="text-sm font-medium text-foreground mb-1.5 block">Paese / Città</label>
              <Input id="paese" name="paese" placeholder="Es. Massafra" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="provincia" className="text-sm font-medium text-foreground mb-1.5 block">Provincia</label>
              <Input id="provincia" name="provincia" placeholder="Es. TA" className={fieldClass} />
            </div>
          </div>

          <div>
            <label htmlFor="note" className="text-sm font-medium text-foreground mb-1.5 block">Note</label>
            <Textarea id="note" name="note" placeholder="Raccontami brevemente per cosa ti serve il caffè: casa, ufficio, attività…" rows={4} className="rounded-md border-border bg-card focus-visible:ring-primary" />
          </div>

          <p className="text-xs text-muted-foreground">
            I tuoi dati saranno utilizzati solo per ricontattarti. Nessuna comunicazione indesiderata.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" size="lg" className="gap-2" disabled={loading}>
              <Send className="w-4 h-4" />
              {loading ? "Invio in corso..." : "Invia richiesta e fatti richiamare"}
            </Button>
            <span className="text-xs text-muted-foreground">Di solito rispondo entro la giornata lavorativa.</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContattiSection;
