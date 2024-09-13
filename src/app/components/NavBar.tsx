'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const router = useRouter();

  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    localStorage.removeItem('token');
    router.push('/login');
  }

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
            <li>
              <Link href="/request_travel" className="text-white hover:text-gray-300">Solicitar Viagem</Link>
            </li>
            {localStorage.getItem('token') ? (
              <li>
                <Link href="/logout" className="text-white hover:text-gray-300" onClick={handleLogout}>Logout</Link>
              </li>
            ) : (
              <li>
                <Link href="/login" className="text-white hover:text-gray-300">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
