import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menú | Restaurante La Mesa",
  description: "Explora nuestros platos principales, entradas y postres.",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-16 px-6">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Nuestro Menú</h1>
        <p className="text-gray-600 text-lg">Una selección de platos preparados con ingredientes frescos y locales.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Entradas</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          <li className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl">Bruschetta</h3>
            <p className="text-gray-600">Pan tostado con tomate, albahaca y aceite de oliva.</p>
            <span className="text-sm text-yellow-600 font-medium">$6.00</span>
          </li>
          <li className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl">Ceviche Clásico</h3>
            <p className="text-gray-600">Pescado fresco marinado con cítricos y cilantro.</p>
            <span className="text-sm text-yellow-600 font-medium">$8.50</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Platos Principales</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          <li className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl">Risotto de Mar</h3>
            <p className="text-gray-600">Arroz cremoso con mariscos frescos y toque de limón.</p>
            <span className="text-sm text-yellow-600 font-medium">$14.00</span>
          </li>
          <li className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl">Carne al Fuego</h3>
            <p className="text-gray-600">Corte premium a la parrilla, cocido a tu gusto.</p>
            <span className="text-sm text-yellow-600 font-medium">$18.00</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Postres</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          <li className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl">Tarta de Queso</h3>
            <p className="text-gray-600">Clásica, cremosa y servida con frutos rojos.</p>
            <span className="text-sm text-yellow-600 font-medium">$5.50</span>
          </li>
          <li className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl">Helado Artesanal</h3>
            <p className="text-gray-600">Sabores de temporada hechos en casa.</p>
            <span className="text-sm text-yellow-600 font-medium">$4.00</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
