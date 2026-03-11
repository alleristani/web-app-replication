import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const ContactoPage = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Nos comunicaremos contigo pronto.");
    setForm({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      <main className="py-10 px-5 text-center">
        <h2 className="text-3xl font-bold text-secondary mb-5">Información de contacto</h2>
      </main>

      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1759335533994!5m2!1ses-419!2smx!6m8!1m7!1sKH0oHcxhZY4vDl6lsaLQ8Q!2m2!1d19.41169902608284!2d-99.32048052557049!3f143.8490467849229!4f-7.37793364524282!5f0.7820865974627469"
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-coffee mx-auto block"
        title="Ubicación Coffee Whisper"
      />

      {/* Contact Form */}
      <section className="py-10 px-5 max-w-[800px] mx-auto w-full">
        <h3 className="text-2xl font-bold text-secondary text-center mb-4">Contáctanos</h3>
        <p className="text-center text-muted-foreground mb-6">
          Déjanos tus datos y nosotros nos comunicamos contigo
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
          <input
            type="text"
            placeholder="Nombre"
            required
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className="p-3 rounded-lg border border-border text-base bg-accent"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 rounded-lg border border-border text-base bg-accent"
          />
          <input
            type="text"
            placeholder="Teléfono"
            required
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            className="p-3 rounded-lg border border-border text-base bg-accent"
          />
          <input
            type="text"
            placeholder="Asunto"
            required
            value={form.asunto}
            onChange={(e) => setForm({ ...form, asunto: e.target.value })}
            className="p-3 rounded-lg border border-border text-base bg-accent"
          />
          <textarea
            rows={4}
            placeholder="Mensaje"
            required
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            className="p-3 rounded-lg border border-border text-base bg-accent resize-y"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground border-none p-3 rounded-lg cursor-pointer font-bold hover:bg-secondary transition-colors"
          >
            Enviar
          </button>
        </form>

        <div className="mt-5 text-base leading-relaxed">
          <p className="mb-2">📍 Dirección: De las Flores 19, 52773 Magdalena Chichicaspa, Méx.</p>
          <p className="mb-2">
            📞 Teléfonos: <br />
            55 87 99 58 40 <br />
            55 61 47 56 65 <br />
            55 61 31 42 35
          </p>
        </div>
      </section>

      <div className="text-center pb-8">
        <Link
          to="/"
          className="inline-block bg-coffee-light text-primary py-3 px-5 rounded-lg font-bold no-underline hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Regresar al inicio
        </Link>
      </div>
    </div>
  );
};

export default ContactoPage;
