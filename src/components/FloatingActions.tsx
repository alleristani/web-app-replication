import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="h-11 w-11 rounded-full bg-card border border-border shadow-soft flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-150"
          aria-label="Torna su"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      <a
        href="https://wa.me/393491063216?text=Ciao%20Alessio%2C%20sono%20interessato%20alle%20soluzioni%20Nims%20Lavazza"
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-14 rounded-full bg-fresh text-fresh-foreground shadow-vibrant flex items-center justify-center hover:bg-fresh/90 transition-colors duration-150"
        aria-label="Scrivimi su WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingActions;
