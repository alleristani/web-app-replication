import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CapsuleCard {
  name: string;
  image: string;
  badge?: string;
  description: string;
  info: string;
  buttonLabel: string;
  whatsappLink: string;
}

const coffeCapsules: CapsuleCard[] = [
  {
    name: "Top Selection Deciso",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10083.webp",
    badge: "Intensità 10/11",
    description: "Una miscela di caffè intensa, perfetta per assaporare un buon espresso tutte le volte che vuoi. 100% Arabica naturali brasiliane e asiatiche per un espresso aromatico con un finale di cacao e spezie.",
    info: "Capsule monodose · atmosfera protettiva",
    buttonLabel: "Chiedi info su Deciso",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20su%20Top%20Selection%20Deciso",
  },
  {
    name: "Top Selection Deciso x2",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10086.webp",
    badge: "Intensità 10/11",
    description: "L'aroma intenso della miscela Top Selection Deciso nella pratica capsula bidose: due caffè in un solo gesto. 100% Arabica brasiliane e asiatiche, finale di cacao e spezie.",
    info: "Capsule bidose · atmosfera protettiva",
    buttonLabel: "Chiedi info su Deciso x2",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20su%20Top%20Selection%20Deciso%20x2",
  },
  {
    name: "Top Selection Bilanciato",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10510.webp",
    badge: "Intensità 8/11",
    description: "Un caffè pieno, corposo e persistente. Una raffinata miscela di dolci Arabica naturali brasiliane per un espresso dal gusto rotondo e con note di nocciola e cioccolato.",
    info: "Capsule monodose · atmosfera protettiva",
    buttonLabel: "Chiedi info su Bilanciato",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20su%20Top%20Selection%20Bilanciato",
  },
  {
    name: "Top Selection Bilanciato x2",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10513.webp",
    badge: "Intensità 8/11",
    description: "La miscela Bilanciato nella versione bidose: due ottimi caffè in un solo gesto. Arabica brasiliane, note di nocciola e cioccolato.",
    info: "Capsule bidose · atmosfera protettiva",
    buttonLabel: "Chiedi info su Bilanciato x2",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20su%20Top%20Selection%20Bilanciato%20x2",
  },
  {
    name: "Top Selection Corposo",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10516.webp",
    badge: "Intensità 9/11",
    description: "Una raffinata miscela di dolci Arabica naturali brasiliane e asiatiche, per un espresso aromatico con un finale di cacao e spezie. Gusto ricco e avvolgente.",
    info: "Capsule monodose · atmosfera protettiva",
    buttonLabel: "Chiedi info su Corposo",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20su%20Top%20Selection%20Corposo",
  },
  {
    name: "Single Origin Brasile",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10519.webp",
    badge: "Intensità 8/11 · 100% Arabica",
    description: "Una miscela pregiata che sprigiona il profumo di terre lontane. Un single-origin eccezionale: ciliegie 100% Arabica lasciate appassire sui rami per esprimere al massimo la dolcezza e le note mielose e cioccolatate.",
    info: "Capsule monodose · atmosfera protettiva",
    buttonLabel: "Chiedi info sul Brasile",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20su%20Single%20Origin%20Brasile",
  },
  {
    name: "Intense Aroma",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10522.webp",
    badge: "Intensità 11/11 · Il più intenso",
    description: "Una sapiente miscela dal gusto intenso, cremoso e bilanciato. Arabica del Centro e Sud America e Robusta africane e asiatiche per un caffè con sentori di legno e dall'amabile retrogusto di cacao amaro, persistente e bilanciato.",
    info: "Capsule monodose · atmosfera protettiva",
    buttonLabel: "Chiedi info su Intense Aroma",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20su%20Intense%20Aroma",
  },
  {
    name: "Intense Aroma x2",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10525.webp",
    badge: "Intensità 11/11 · Bidose",
    description: "L'intensità di Intense Aroma nella capsula bidose. Arabica e Robusta per un caffè con sentori di legno e retrogusto di cacao amaro, persistente e bilanciato: due tazze in un solo gesto.",
    info: "Capsule bidose · atmosfera protettiva",
    buttonLabel: "Chiedi info su Intense Aroma x2",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20su%20Intense%20Aroma%20x2",
  },
  {
    name: "Decaffeinato",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10528.webp",
    badge: "Intensità 7/11 · Senza caffeina",
    description: "Un caffè dolce e vellutato. Miscela di 100% Arabica dolci per un espresso decaffeinato dalla crema vellutata e persistente, con note di frutta secca e cereali. Caffeina non superiore allo 0,10%.",
    info: "Capsule monodose · atmosfera protettiva",
    buttonLabel: "Chiedi info sul Decaffeinato",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20sul%20Decaffeinato",
  },
  {
    name: "Intense Americano",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-100130.webp",
    badge: "Intensità 10/11 · 240 ml",
    description: "Miscela elegante, ricca e corposa. Arabica del Centro e Sud America e Robusta africane si uniscono per creare un caffè dai sentori di cacao e frutta secca. Da degustare in ogni momento della giornata, con erogazione da 240 ml.",
    info: "Capsule monodose · atmosfera protettiva",
    buttonLabel: "Chiedi info sull'Americano",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20su%20Intense%20Americano",
  },
];

const extraCapsules: CapsuleCard[] = [
  {
    name: "Orzo",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-10090.webp",
    description: "Delicato orzo solubile dal gusto fragrante e ricco. Ottimo in ogni momento della giornata, dal mattino alla sera. Una pausa caffè tutta nuova.",
    info: "Orzo solubile. Può contenere tracce di LATTE. · Capsule monodose.",
    buttonLabel: "Chiedi info sull'Orzo",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20sulla%20capsula%20Orzo",
  },
  {
    name: "Tè al Limone",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-14503.webp",
    description: "Gustoso e rotondo con note agrumate. Un piacevole momento di relax pomeridiano o una colazione leggera, sempre pronto in capsula.",
    info: "Preparato in polvere per the solubile al gusto limone. Può contenere tracce di GLUTINE e LATTE. · Capsule monodose.",
    buttonLabel: "Chiedi info sul Tè al Limone",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20sulla%20capsula%20Te%20al%20Limone",
  },
  {
    name: "Caffè al Ginseng",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-24709.webp",
    description: "Crema dorata e profumo intenso per godere della speziata carica del ginseng. Una pausa caffè alternativa, energizzante e aromatica.",
    info: "Preparato in polvere per bevanda al caffè con ginseng. Può contenere tracce di GLUTINE. · Capsule monodose.",
    buttonLabel: "Chiedi info sul Ginseng",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20sulla%20capsula%20Ginseng",
  },
  {
    name: "Cioccolata Fondente",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-92304.webp",
    description: "Deliziosa bevanda al gusto di cioccolato fondente. Perfetta in ogni momento della giornata per chi vuole una pausa golosa e appagante, dall'aroma intenso.",
    info: "Preparato in polvere per bevanda al gusto cioccolata. Può contenere tracce di GLUTINE. · Capsule monodose.",
    buttonLabel: "Chiedi info sulla Cioccolata",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20sulla%20capsula%20Cioccolata%20Fondente",
  },
  {
    name: "Camomilla",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-86752.webp",
    description: "Delicata, floreale e naturale. La camomilla è la quintessenza delle infusioni di erbe, ideale per una pausa rilassante in qualsiasi momento della giornata.",
    info: "Preparato in polvere per camomilla solubile. Può contenere tracce di GLUTINE e LATTE. · Capsule monodose.",
    buttonLabel: "Chiedi info sulla Camomilla",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20sulla%20capsula%20Camomilla",
  },
  {
    name: "Bevanda Bianca",
    image: "https://www.nims.it/nims2.xtro.it/repository/webp/ita-86755.webp",
    description: "Una deliziosa bevanda al latte, delicata e appagante. Ideale per preparare gustose bevande al cioccolato, caffè macchiato o un perfetto tè all'inglese con latte.",
    info: "Preparato in polvere per bevanda al gusto latte. Può contenere tracce di GLUTINE. · Capsule monodose.",
    buttonLabel: "Chiedi info sulla Bevanda Bianca",
    whatsappLink: "https://wa.me/393491063216?text=Ciao%20Alessio%2C%20vorrei%20info%20sulla%20capsula%20Bevanda%20Bianca",
  },
];

const CapsuleCardComponent = ({ capsule }: { capsule: CapsuleCard }) => (
  <div className="relative bg-card rounded-2xl shadow-soft border border-border overflow-hidden flex flex-col">
    {capsule.badge && (
      <Badge className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-wider">
        {capsule.badge}
      </Badge>
    )}
    <div className="flex items-center justify-center p-6 bg-secondary/30">
      <img
        src={capsule.image}
        alt={capsule.name}
        className="h-48 w-auto object-contain"
        loading="lazy"
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h4 className="text-lg font-display font-bold text-foreground mb-2">{capsule.name}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{capsule.description}</p>
      <p className="text-xs text-muted-foreground mb-4 italic">{capsule.info}</p>
      <div className="mt-auto">
        <Button variant="whatsapp" size="sm" className="w-full gap-2" asChild>
          <a href={capsule.whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" /> {capsule.buttonLabel}
          </a>
        </Button>
      </div>
    </div>
  </div>
);

const CapsuleSection = () => (
  <section className="section-padding bg-background" id="capsule">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
          Le Capsule
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">
          Le capsule Lavazza in Black
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Frutto di oltre 125 anni di esperienza Lavazza nell'arte della miscelazione, le capsule Lavazza in Black sono disponibili in esclusiva per i clienti Nims. Pratiche, di alta qualità e pelabili per uno smaltimento semplice. Ti aiuto a scegliere la miscela giusta per il tuo gusto e per la tua macchina — dal più delicato al più intenso.
        </p>
      </div>

      {/* Sottosezione Caffè */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2">Capsule Caffè</h3>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Sette miscele per trovare il tuo espresso perfetto. Ogni capsula è confezionata in atmosfera protettiva per preservare freschezza e aroma. Disponibili in versione monodose e bidose (x2).
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffeCapsules.map((c) => (
            <CapsuleCardComponent key={c.name} capsule={c} />
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
          Tutte le capsule sono pelabili per facilitare la separazione dei materiali e uno smaltimento corretto. Disponibili anche in formato bidose per preparare due caffè in un solo gesto.
        </p>
      </div>

      {/* Separatore */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Extra Caffè</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Sottosezione Extra */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2">Extra Caffè e bevande calde</h3>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Non solo espresso. Con le capsule Lavazza in Black puoi preparare anche bevande alternative calde: orzo, ginseng, tè al limone, camomilla, cioccolata e tanto altro. Perfette per famiglie, uffici e attività che vogliono offrire qualcosa in più a ogni ora del giorno.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extraCapsules.map((c) => (
            <CapsuleCardComponent key={c.name} capsule={c} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CapsuleSection;
