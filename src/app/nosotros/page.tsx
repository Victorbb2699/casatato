import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Restaurante La Mesa",
  description: "Conoce la historia, visión y pasión detrás de La Mesa.",
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-16 px-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nuestra Historia</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          La Mesa nació del deseo de compartir experiencias gastronómicas memorables en un ambiente acogedor. Desde nuestros inicios, nos hemos comprometido con ingredientes frescos, recetas auténticas y un servicio excepcional.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Filosofía</h2>
          <p className="text-gray-700 mb-4">
            Creemos en la cocina como un puente entre culturas y personas. Nuestro equipo de chefs fusiona tradición y creatividad en cada plato.
          </p>
          <p className="text-gray-700">
            Más allá del sabor, buscamos crear momentos que perduren. Cada visita a La Mesa es una oportunidad de celebrar lo cotidiano con un toque especial.
          </p>
        </div>
        <div>
          <img src="/equipo.jpg" alt="Nuestro equipo" className="rounded-2xl shadow-md w-full" />
        </div>
      </section>

      <section className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Visítanos</h2>
        <p className="text-gray-600">
          Te esperamos para disfrutar juntos de una experiencia única en cada plato. Reserva tu mesa y déjate sorprender.
        </p>
      </section>
    </main>
  );
}
