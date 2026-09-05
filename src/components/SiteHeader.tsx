import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Offerta", id: "promo-elogy" },
  { label: "Chi sono", id: "chi-sono" },
  { label: "Macchine", id: "macchine" },
  { label: "Acqua", id: "acqua" },
  { label: "Capsule", id: "capsule" },
  { label: "FAQ", id: "faq" },
  { label: "Contatti", id: "contatti" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex items-center justify-between h-[68px]">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-left leading-tight"
          aria-label="Torna all'inizio della pagina"
        >
          <span className="block font-display text-base md:text-lg font-semibold text-foreground">
            Alessio Ristani
          </span>
          <span className="block text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Consulente Nims · Gruppo Lavazza
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Navigazione principale">
          {links.slice(0, -1).map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              {l.label}
            </button>
          ))}
          <Button size="sm" onClick={() => go("contatti")}>
            Contattami
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button size="sm" onClick={() => go("contatti")} className="hidden sm:inline-flex">
            Contattami
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="h-11 w-11 inline-flex items-center justify-center rounded-md border border-border text-foreground"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <Menu className="w-5 h-5 hidden" /> : null}
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background h-[calc(100vh-68px)] overflow-y-auto">
          <nav className="container-page py-4 flex flex-col" aria-label="Navigazione mobile">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                className="text-left py-4 text-base text-foreground border-b border-border/60"
              >
                {l.label}
              </button>
            ))}
            <Button className="mt-6 h-12" onClick={() => go("contatti")}>
              Contattami
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
