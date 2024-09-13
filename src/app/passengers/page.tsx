'use server'
import { Passenger } from '../types/Passenger';
import { getAllPassengers } from '../service/api';
import Link from 'next/link';

export default async function Passengers() {
  const passengers: Passenger[] = await getAllPassengers();

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold text-center my-4 bg-transparent">Lista de Pessoas Passageiras</h1>

      <div className='flex justify-start items-center'>
        <Link href="/passengers/add" className="bg-trybe-green text-white px-4 py-2 rounded mb-4">
          Adicionar passageiro
        </Link>
      </div>
      

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-trybe-green text-gray-200">Nome</th>
            <th className="px-4 py-2 bg-trybe-green text-gray-200">E-mail</th>
            <th className="px-4 py-2 bg-trybe-green text-gray-200">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr key={passenger.email}>
              <td className="border px-4 py-2">{passenger.name}</td>
              <td className="border px-4 py-2">{passenger.email}</td>
              <td className="border px-4 py-2">{passenger.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}