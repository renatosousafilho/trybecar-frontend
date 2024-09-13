import { Passenger } from '../types/Passenger';
import { Travel } from '../types/Travel';

const BASE_URL = process.env.API_URL || 'http://localhost:3001';

export const getAllPassengers = async () => {
  const response = await fetch(`${BASE_URL}/passengers`);
  const data = await response.json();
  return data;
};

export const createPassenger = async (passenger: Passenger) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/passengers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(passenger),
  });
  const data = await response.json();
  return data;
}

export const createTravel = async (travel: Travel) => {
  const response = await fetch(`${BASE_URL}/passengers/1/request/travel`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "startingAddress": travel.origin,
      "endingAddress": travel.destination,
      "waypoints": travel.waypoints.map(waypoint => ({
        "address": waypoint.address,
        "stopOrder": waypoint.stopOrder
      }))
    })
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  
  return data;
}

export const login = async (email: string, password: string) => {
  console.log(email, password);
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  
  return data;
}