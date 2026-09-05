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

  const labelClass = "mb-2 block text-[13px] font-medium tracking-tight text-foreground";
  const fieldClass = "h-12 rounded-md border-input bg-background";

  return (
    <section className="section-padding bg-secondary" id="contatti">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Colonna informativa */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Contatti</span>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-[2.5rem]">
              Contattami: Consulenza Gratuita Nims Lavazza
            </h2>
            <p className="measure mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Compila il modulo e ti ricontatto entro la giornata lavorativa. Servizio disponibile in tutta Italia.
            </p>

            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 text-sm">
              <a href="tel:+393491063216" className="inline-flex min-h-[44px] items-center gap-3 text-foreground transition-colors duration-150 hover:text-accent">
                <Phone className="h-4 w-4 text-accent" strokeWidth={1.5} /> 349 106 3216
              </a>
              <Button variant="whatsapp" asChild className="w-full gap-2 sm:w-auto sm:self-start">
                <a href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20alle%20soluzioni%20Nims%20Lavazza%20per%20il%20caffe" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> Scrivimi su WhatsApp
                </a>
              </Button>
              <span className="inline-flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" strokeWidth={1.5} /> Massafra (TA) – Tutta Italia
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-border bg-card p-6 md:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Nome *</label>
                  <Input required name="nome" placeholder="Il tuo nome" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>Cognome *</label>
                  <Input required name="cognome" placeholder="Il tuo cognome" className={fieldClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Numero di telefono *</label>
                <Input required name="telefono" type="tel" inputMode="numeric" placeholder="Es. 349 1234567" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Indirizzo *</label>
                <Input required name="indirizzo" placeholder="Via e numero civico" className={fieldClass} />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Paese / Città *</label>
                  <Input required name="paese" placeholder="Es. Massafra" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>Provincia *</label>
                  <Input required name="provincia" placeholder="Es. TA" className={fieldClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Note (facoltativo)</label>
                <Textarea name="note" placeholder="Raccontami brevemente per cosa ti serve il caffè: casa, ufficio, attività…" rows={4} className="rounded-md border-input bg-background" />
              </div>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                I tuoi dati saranno utilizzati solo per ricontattarti. Nessuna comunicazione indesiderata.
              </p>
              <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
                <Send className="h-4 w-4" />
                {loading ? "Invio in corso..." : "Invia richiesta e fatti richiamare"}
              </Button>
              <p className="text-[13px] text-muted-foreground">
                Di solito rispondo entro la giornata lavorativa.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContattiSection;
