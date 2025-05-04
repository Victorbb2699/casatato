'use client';
import Link from "next/link";

export const Navbar = () => (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold text-gray-900">
            La Mesa
        </Link>
        <ul className="flex gap-6 text-gray-700 font-medium">
            <li><Link href="/menu" className="hover:text-yellow-600 transition">Menú</Link></li>
            <li><Link href="/reservas" className="hover:text-yellow-600 transition">Reservas</Link></li>
            <li><Link href="/nosotros" className="hover:text-yellow-600 transition">Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-yellow-600 transition">Contacto</Link></li>
        </ul>
    </nav>
);