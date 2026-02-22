import { Phone, MessageCircle } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-foreground text-primary-foreground section-padding py-10">
    <div className="max-w-4xl mx-auto text-center space-y-4">
      <p className="font-display text-xl font-black">
        Alessio Ristani
      </p>
      <p className="text-primary-foreground/60 text-sm">
        Alessio Ristani – Personal Shopper del Caffè Nims, Gruppo Lavazza · Massafra (TA), opero in tutta Italia
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
        <a href="tel:+393491063216" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
          <Phone className="w-4 h-4" /> Chiama ora: 349 106 3216
        </a>
        <a href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20informazioni%20sui%20servizi%20Nims%20Lavazza." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
          <MessageCircle className="w-4 h-4" /> Scrivi su WhatsApp
        </a>
      </div>
      <p className="text-primary-foreground/30 text-xs mt-4">
        © {new Date().getFullYear()} Alessio Ristani. Tutti i diritti riservati.
      </p>
    </div>
  </footer>
);

export default FooterSection;
