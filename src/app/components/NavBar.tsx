'use client';
import Link from 'next/link';
export default function NavBar() {
  return (
    <nav className="bg-[#0C6D18] p-4">
      <div className="container mx-auto flex">
        <div className="text-white font-bold">🚖 TrybeCar</div>
        <div className="ml-auto">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">Início</Link>
            </li>
            <li>
              <Link href="/passengers" className="text-white hover:text-gray-300">Passageiros</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
