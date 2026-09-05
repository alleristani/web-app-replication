import { Phone, MessageCircle, Mail } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-page px-5 py-14 md:px-10 md:py-16">
      {/* Microdata Person */}
      <div itemScope itemType="https://schema.org/Person" className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl tracking-tight" itemProp="name">
            Alessio Ristani
          </p>
          <p className="mt-2 text-sm text-primary-foreground/55" itemProp="jobTitle">
            Consulente Nims · Gruppo Lavazza
          </p>
          <p className="mt-1 text-sm text-primary-foreground/55">
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Massafra</span> (<span itemProp="addressRegion">TA</span>)
            </span> · Servizio in tutta Italia
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm md:col-span-6 md:col-start-7 md:items-end">
          <a href="tel:+393491063216" className="inline-flex min-h-[44px] items-center gap-3 text-primary-foreground/75 transition-colors duration-150 hover:text-primary-foreground" itemProp="telephone">
            <Phone className="h-4 w-4" strokeWidth={1.5} /> 349 106 3216
          </a>
          <a href="mailto:alessioristani@gmail.com" className="inline-flex min-h-[44px] items-center gap-3 text-primary-foreground/75 transition-colors duration-150 hover:text-primary-foreground" itemProp="email">
            <Mail className="h-4 w-4" strokeWidth={1.5} /> alessioristani@gmail.com
          </a>
          <a href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20alle%20soluzioni%20Nims%20Lavazza" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-3 text-primary-foreground/75 transition-colors duration-150 hover:text-primary-foreground">
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-12 border-t border-primary-foreground/12 pt-6">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Alessio Ristani · Tutti i diritti riservati
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
