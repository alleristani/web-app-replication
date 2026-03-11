import { Link } from "react-router-dom";
import quienesSomosImg from "@/assets/quienes-somos.jpg";
import visionImg from "@/assets/vision.jpg";
import misionImg from "@/assets/mision.jpg";
import valoresImg from "@/assets/valores.jpg";

const secciones = [
  {
    titulo: "¿QUIÉNES SOMOS?",
    imagen: quienesSomosImg,
    alt: "¿Quiénes somos?",
    contenido: (
      <p>
        Coffee Whisper nació de la pasión por el café y el deseo de brindar una experiencia
        única y acogedora. Nos especializamos en seleccionar granos de la más alta calidad y
        en prepararlos con dedicación artesanal.
      </p>
    ),
  },
  {
    titulo: "VISIÓN",
    imagen: visionImg,
    alt: "Visión",
    contenido: (
      <p>
        Ser reconocidos como una cafetería referente en experiencias sensoriales y hospitalidad,
        donde el café de calidad y la dedicación artesanal se unan para crear momentos memorables
        que inspiren a nuestros clientes a volver siempre.
      </p>
    ),
  },
  {
    titulo: "MISIÓN",
    imagen: misionImg,
    alt: "Misión",
    contenido: (
      <p>
        En Coffee Whisper trabajamos con pasión para ofrecer una experiencia única y acogedora
        a cada cliente. Seleccionamos granos de café de la más alta calidad y los preparamos
        con esmero artesanal, buscando transmitir calidez y excelencia en cada taza.
      </p>
    ),
  },
  {
    titulo: "NUESTROS VALORES",
    imagen: valoresImg,
    alt: "Nuestros valores",
    contenido: (
      <ul className="list-none p-0 space-y-3">
        <li><strong>Pasión:</strong> Amamos lo que hacemos y lo transmitimos en cada preparación.</li>
        <li><strong>Calidad:</strong> Seleccionamos granos excepcionales y cuidamos cada detalle en su elaboración.</li>
        <li><strong>Calidez:</strong> Creamos un ambiente acogedor donde cada persona se sienta bienvenida.</li>
        <li><strong>Compromiso:</strong> Nos esforzamos por ofrecer siempre lo mejor a nuestros clientes.</li>
        <li><strong>Autenticidad:</strong> Respetamos el arte del café y lo compartimos con dedicación sincera.</li>
      </ul>
    ),
  },
];

const NosotrosPage = () => {
  return (
    <main className="flex-1 py-10 px-5 max-w-[1000px] mx-auto">
      {secciones.map((sec) => (
        <section key={sec.titulo} className="mb-12">
          <h2 className="text-2xl font-bold text-secondary text-center mb-5">{sec.titulo}</h2>
          <div
            className="flex gap-5 items-center rounded-lg p-5 shadow-coffee flex-wrap"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="flex-shrink-0">
              <img
                src={sec.imagen}
                alt={sec.alt}
                className="w-[220px] h-auto rounded-xl shadow-coffee"
              />
            </div>
            <div className="flex-1 min-w-[200px] text-base leading-relaxed">
              {sec.contenido}
            </div>
          </div>
        </section>
      ))}

      <div className="text-center">
        <Link
          to="/contacto"
          className="inline-block bg-primary text-primary-foreground py-3 px-5 rounded-lg font-bold no-underline hover:bg-secondary transition-colors"
        >
          Contáctanos
        </Link>
      </div>
    </main>
  );
};

export default NosotrosPage;
