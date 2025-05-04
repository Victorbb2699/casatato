import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurante La Mesa",
  description: "Descubre nuestros sabores únicos. Reserva, explora el menú y conócenos.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black bg-opacity-60 p-8 rounded-2xl text-center text-white max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a La Mesa</h1>
          <p className="text-lg md:text-xl mb-6">Sabores que cuentan historias. Reserva ahora o explora nuestro menú.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/reservas" className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition">Reservar</Link>
            <Link href="/menu" className="bg-transparent border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">Ver menú</Link>
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Nuestras Especialidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <img src="/plato1.jpg" alt="Plato especial 1" className="rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Risotto de Mar</h3>
            <p className="text-gray-600">Arroz cremoso con mariscos frescos y toque de limón.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <img src="/plato2.jpg" alt="Plato especial 2" className="rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Carne al Fuego</h3>
            <p className="text-gray-600">Corte premium a la parrilla, cocido a tu gusto.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <img src="/plato3.jpg" alt="Plato especial 3" className="rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Postre Artesanal</h3>
            <p className="text-gray-600">Dulce final con ingredientes locales y presentación única.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
