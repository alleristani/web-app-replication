const Footer = () => {
  return (
    <footer
      className="py-10 px-5 text-center mt-auto"
      style={{
        background: "var(--gradient-footer)",
        boxShadow: "0 -4px 12px hsl(0 0% 0% / 0.1)",
      }}
    >
      <div className="max-w-[900px] mx-auto flex flex-col items-center gap-3">
        <div className="text-2xl font-bold">
          Coffee <span className="shimmer-text-dark">Whisper</span>
        </div>
        <p className="text-coffee-accent text-sm opacity-85">Hecho con ☕ y amor</p>
        <p className="text-coffee-accent text-xs opacity-60">
          © {new Date().getFullYear()} Coffee Whisper by JSL. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
