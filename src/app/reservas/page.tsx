import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservas | Restaurante La Mesa",
  description: "Reserva tu mesa fácilmente en nuestro restaurante La Mesa.",
};

export default function ReservasPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-16 px-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Reserva tu Mesa</h1>
        <p className="text-gray-600 text-lg">Completa el formulario para reservar una experiencia gastronómica única.</p>
      </section>

      <section className="max-w-2xl mx-auto">
        <form className="bg-gray-100 p-8 rounded-2xl shadow space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block font-medium mb-1">Fecha</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label htmlFor="time" className="block font-medium mb-1">Hora</label>
            <input
              type="time"
              id="time"
              name="time"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label htmlFor="guests" className="block font-medium mb-1">Número de personas</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Reservar ahora
          </button>
        </form>
      </section>
    </main>
  );
}
