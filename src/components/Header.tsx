import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header
      className="flex justify-between items-center px-8 py-4"
      style={{ background: "var(--gradient-header)" }}
    >
      <Link to="/" className="shimmer-text font-bold text-2xl no-underline">
        COFFEE WHISPER
      </Link>
      <nav className="flex gap-4 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-coffee-accent no-underline font-semibold text-sm transition-opacity hover:opacity-80 ${
              location.pathname === link.to ? "opacity-100 underline underline-offset-4" : "opacity-75"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
