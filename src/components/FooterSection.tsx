import { Phone, MessageCircle, Mail } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-ink py-14 md:py-16">
    <div className="container-page">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div itemScope itemType="https://schema.org/Person">
          <p className="font-display text-lg text-ink-foreground" itemProp="name">
            Alessio Ristani
          </p>
          <p className="text-ink-foreground/55 text-sm mt-1" itemProp="jobTitle">
            Consulente Nims · Gruppo Lavazza
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-foreground/45 mb-4">Contatti</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="tel:+393491063216" className="inline-flex items-center gap-2 text-ink-foreground/75 hover:text-ink-foreground transition-colors duration-150 py-1">
                <Phone className="w-4 h-4" strokeWidth={1.6} /> 349 106 3216
              </a>
            </li>
            <li>
              <a href="mailto:alessioristani@gmail.com" className="inline-flex items-center gap-2 text-ink-foreground/75 hover:text-ink-foreground transition-colors duration-150 py-1">
                <Mail className="w-4 h-4" strokeWidth={1.6} /> alessioristani@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20alle%20soluzioni%20Nims%20Lavazza" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink-foreground/75 hover:text-ink-foreground transition-colors duration-150 py-1">
                <MessageCircle className="w-4 h-4" strokeWidth={1.6} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-foreground/45 mb-4">Area servita</p>
          <p className="text-sm text-ink-foreground/75">
            Massafra (TA) e provincia di Taranto
          </p>
          <p className="text-sm text-ink-foreground/75 mt-1">Servizio in tutta Italia</p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-foreground/45 mb-4">Dati fiscali</p>
          <ul className="text-sm text-ink-foreground/55 space-y-1">
            <li>Ragione sociale: —</li>
            <li>P. IVA: —</li>
            <li>Sede: —</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10 mt-12 pt-6">
        <p className="text-ink-foreground/40 text-xs">
          © {new Date().getFullYear()} Alessio Ristani · Tutti i diritti riservati
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
