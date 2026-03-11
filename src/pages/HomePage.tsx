import { Link } from "react-router-dom";
import heroCoffee from "@/assets/hero-coffee.jpg";

const productos = [
  { nombre: "Espresso", precio: "$45", desc: "Intenso y puro, la esencia del café.", img: "☕" },
  { nombre: "Cappuccino", precio: "$55", desc: "Espresso con leche espumada y un toque de canela.", img: "☕" },
  { nombre: "Latte", precio: "$50", desc: "Suave y cremoso, perfecto para cualquier momento.", img: "☕" },
  { nombre: "Mocha", precio: "$60", desc: "Chocolate y café, una combinación irresistible.", img: "☕" },
  { nombre: "Americano", precio: "$40", desc: "Clásico y ligero, ideal para empezar el día.", img: "☕" },
  { nombre: "Frappé", precio: "$65", desc: "Refrescante y delicioso, perfecto para el calor.", img: "☕" },
];

const categorias = [
  { nombre: "Café Caliente", desc: "Espresso, Cappuccino, Latte y más" },
  { nombre: "Café Frío", desc: "Frappé, Cold Brew, Iced Latte" },
  { nombre: "Postres", desc: "Acompañantes perfectos para tu café" },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={heroCoffee}
          alt="Coffee Whisper hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-12">
          <div className="text-center">
            <h1 className="shimmer-text text-4xl md:text-5xl font-bold mb-4">
              COFFEE WHISPER
            </h1>
            <p className="text-coffee-accent text-lg opacity-90">
              Cada taza cuenta una historia
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main className="flex-1 px-6 py-10 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Categories */}
          <aside className="md:w-[240px] flex md:flex-col gap-4">
            <h3 className="text-xl font-bold text-foreground mb-2 hidden md:block">Categorías</h3>
            {categorias.map((cat) => (
              <div
                key={cat.nombre}
                className="rounded-lg p-4 shadow-coffee cursor-pointer transition-transform hover:scale-[1.03]"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="font-bold text-sm">{cat.nombre}</div>
                <div className="text-xs text-muted-foreground">{cat.desc}</div>
              </div>
            ))}
          </aside>

          {/* Products Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productos.map((p) => (
              <div
                key={p.nombre}
                className="rounded-lg shadow-coffee p-5 text-center flex flex-col gap-2 transition-transform hover:scale-105 cursor-pointer"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="text-5xl mb-2">{p.img}</div>
                <div className="font-bold text-base">{p.nombre}</div>
                <div className="text-xs text-muted-foreground flex-1">{p.desc}</div>
                <div className="font-bold text-secondary">{p.precio}</div>
                <button className="bg-primary text-primary-foreground border-none py-2 px-3 rounded-lg cursor-pointer font-bold text-sm hover:bg-secondary transition-colors">
                  Agregar
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
