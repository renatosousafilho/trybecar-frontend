'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Travel } from '../types/Travel';
import { Waypoint } from '../types/Waypoint';
import { createTravel } from '../service/api';
import WaypointField from './waypoint_field';

export default function RequestTravel() {  
  const [message, setMessage] = useState<string>(''); 
  // const router = useRouter();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [waypoints, setWaypoints] = useState<Waypoint[]>([]);

  const handleAddWaypoint = () => {
    setWaypoints([...waypoints, { address: '', stopOrder: waypoints.length + 1 }]);
  };

  const handleRemoveWaypoint = (index: number) => {
    const newWaypoints = [...waypoints];
    newWaypoints.splice(index, 1);
    setWaypoints(newWaypoints);
  };

  const handleWaypointChange = (index: number, waypoint: Waypoint) => {
    const newWaypoints = [...waypoints];
    newWaypoints[index] = waypoint;
    setWaypoints(newWaypoints);
  };
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // criar o objeto Travel
    const travel: Travel = {
      origin,
      destination,
      waypoints,
    };

    

    createTravel(travel).then(() => {
      setMessage('Viagem solicitada com sucesso!');
      // setTimeout(() => {
      //   // router.push('/travels');    
      // }, 3000);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-4 bg-transparent">Solicitar Viagem</h1>
      {message && (
        <p className="text-center text-green-500">{message}</p>
      )}

      <form 
        onSubmit={handleSubmit} 
        className="w-6/12 mx-auto">
        <div className="flex flex-col">
          <label htmlFor="origin" className="text-gray-800 font-medium mb-2">Origem:</label>
          <input
            type="text"
            id="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="border rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md"
            placeholder="Localização atual"
          />
        </div>

        
        <div className="flex flex-col mt-4">
          <label htmlFor="waypoints" className="text-gray-800 font-medium mb-2">Pontos de Parada:</label>
          <div className="flex flex-col">
            {waypoints.map((waypoint, index) => (
              <WaypointField
                key={index}
                waypoint={waypoint}
                index={index}
                onChange={handleWaypointChange}
                onRemove={handleRemoveWaypoint} />
            ))}
            <button
              type="button"
              onClick={handleAddWaypoint}
              data-testid="add-waypoint-button"
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mt-2">➕ Adicionar Ponto de Parada</button>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="destination" className="text-gray-800 font-medium mb-2">Destino:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md"
            placeholder='Para onde você vai?'
          />
        </div>

        <button type="submit" className="w-full bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mt-4">
          Solicitar Viagem
        </button>
    </form>
    </div>
  );
}
       