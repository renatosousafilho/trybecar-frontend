'use client'

import { Passenger } from '../types/Passenger';
import { getAllPassengers } from '../service/api';
import { useState, useEffect } from 'react';

export default function Passengers() {
  const [passengers, setPassengers] = useState<Passenger[]>([]);

  useEffect(() => {
    console.log('fetching passengers');
    async function fetchPassengers() {
      const BASE_URL = process.env.API_URL;
      const response = await fetch(`${BASE_URL}/passengers`);
      const data = await response.json();
      setPassengers(data);
    }
    fetchPassengers();
  }, []);

  // const passengers: Passenger[] = await getAllPassengers();

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold text-center my-4 bg-transparent">Lista de Pessoas Passageiras</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-[#0C6D18] text-gray-200">Nome</th>
            <th className="px-4 py-2 bg-[#0C6D18] text-gray-200">Ativo</th>
            <th className="px-4 py-2 bg-[#0C6D18] text-gray-200">Ações</th>
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