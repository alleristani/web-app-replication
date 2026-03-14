import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContattiSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

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

  return (
    <section className="section-padding bg-background" id="contatti">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/8 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-5">
            Contatti
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">
            Contattami: Consulenza Gratuita Nims Lavazza
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Compila il modulo e ti ricontatto entro la giornata lavorativa. Servizio disponibile in tutta Italia.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-soft space-y-4 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Nome *</label>
              <Input required name="nome" placeholder="Il tuo nome" className="h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Cognome *</label>
              <Input required name="cognome" placeholder="Il tuo cognome" className="h-12 rounded-xl" />
            </div>
          </div>
          <div>
            <label className="text-sm font-bold text-foreground mb-1.5 block">Numero di telefono *</label>
            <Input required name="telefono" type="tel" inputMode="numeric" placeholder="Es. 349 1234567" className="h-12 rounded-xl" />
          </div>
          <div>
            <label className="text-sm font-bold text-foreground mb-1.5 block">Indirizzo *</label>
            <Input required name="indirizzo" placeholder="Via e numero civico" className="h-12 rounded-xl" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Paese / Città *</label>
              <Input required name="paese" placeholder="Es. Massafra" className="h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Provincia *</label>
              <Input required name="provincia" placeholder="Es. TA" className="h-12 rounded-xl" />
            </div>
          </div>
          <div>
            <label className="text-sm font-bold text-foreground mb-1.5 block">Note (facoltativo)</label>
            <Textarea name="note" placeholder="Raccontami brevemente per cosa ti serve il caffè: casa, ufficio, attività…" rows={3} className="rounded-xl" />
          </div>
          <p className="text-xs text-muted-foreground">
            I tuoi dati saranno utilizzati solo per ricontattarti. Nessuna comunicazione indesiderata.
          </p>
          <Button type="submit" size="lg" className="w-full h-14 text-base gap-2 rounded-full" disabled={loading}>
            <Send className="w-5 h-5" />
            {loading ? "Invio in corso..." : "Invia richiesta e fatti richiamare"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Di solito rispondo entro la giornata lavorativa.
          </p>
        </form>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <a href="tel:+393491063216" className="flex items-center gap-2 text-primary font-bold hover:underline">
            <Phone className="w-4 h-4" /> 349 106 3216
          </a>
          <Button variant="whatsapp" size="sm" asChild className="gap-2 rounded-full">
            <a href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20alle%20soluzioni%20Nims%20Lavazza%20per%20il%20caffe" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" /> Scrivimi su WhatsApp
            </a>
          </Button>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" /> Massafra (TA) – Tutta Italia
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContattiSection;