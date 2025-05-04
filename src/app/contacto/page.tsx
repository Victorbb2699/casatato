import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Restaurante La Mesa",
  description: "Ponte en contacto con nosotros para cualquier consulta o sugerencia.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-16 px-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
        <p className="text-gray-600 text-lg">¿Tienes preguntas, sugerencias o quieres saludarnos? Estamos aquí para escucharte.</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Información de contacto */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Dirección</h2>
            <p className="text-gray-700">Calle Falsa 123, Ciudad Gastronómica</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Teléfono</h2>
            <p className="text-gray-700">+34 123 456 789</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Correo</h2>
            <p className="text-gray-700">contacto@lamesarestaurante.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Redes Sociales</h2>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:underline">Facebook</a>
              <a href="#" className="text-pink-500 hover:underline">Instagram</a>
              <a href="#" className="text-sky-500 hover:underline">Twitter</a>
            </div>
          </div>
        </div>

        {/* Mapa embebido */}
        <div className="rounded-2xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.926519526591!2d-122.08424968469231!3d37.42206577982511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0b4c4e4dbfb%3A0xf88fbd2c35f2b7b0!2sGoogleplex!5e0!3m2!1ses!2ses!4v1669999999999"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
