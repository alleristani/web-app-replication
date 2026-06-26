import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import PromoElogySection from "@/components/PromoElogySection";
import ChiSonoSection from "@/components/ChiSonoSection";
import ServiziSection from "@/components/ServiziSection";
import MacchineSection from "@/components/MacchineSection";
import CapsuleSection from "@/components/CapsuleSection";
import ComeFunzionaSection from "@/components/ComeFunzionaSection";
import PercheSceglierciSection from "@/components/PercheSceglierciSection";
import RecensioniSection from "@/components/RecensioniSection";
import LavoraConNoiSection from "@/components/LavoraConNoiSection";
import ContattiSection from "@/components/ContattiSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main>
    <Helmet>
      <title>Macchine Lavazza e Depuratori Acqua | Alessio Ristani Nims</title>
      <meta
        name="description"
        content="Macchine caffè Lavazza in comodato d'uso gratuito e depuratori acqua Star Tap. Consulente Nims Alessio Ristani: assistenza in tutta Italia."
      />
      <link rel="canonical" href="https://alessionims.it/" />
      <meta property="og:title" content="Macchine Lavazza e Depuratori Acqua | Alessio Ristani Nims" />
      <meta
        property="og:description"
        content="Macchine caffè Lavazza in comodato d'uso gratuito e depuratori acqua Star Tap. Consulente Nims Alessio Ristani."
      />
      <meta property="og:url" content="https://alessionims.it/" />
    </Helmet>
    <HeroSection />
    <PromoElogySection />
    <ChiSonoSection />
    <ServiziSection />
    <MacchineSection />
    <CapsuleSection />
    <ComeFunzionaSection />
    <PercheSceglierciSection />
    <RecensioniSection />
    <LavoraConNoiSection />
    <ContattiSection />
    <FAQSection />
    <FooterSection />
  </main>
);

export default Index;
