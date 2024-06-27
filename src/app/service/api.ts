import { Passenger } from '../types/Passenger';
import { Travel } from '../types/Travel';

const BASE_URL = process.env.API_URL || 'http://localhost:3001';

export const getAllPassengers = async () => {
  const response = await fetch(`${BASE_URL}/passengers`);
  const data = await response.json();
  return data;
};

export const createPassenger = async (passenger: Passenger) => {
  const response = await fetch(`${BASE_URL}/passengers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(passenger),
  });
  const data = await response.json();
  return data;
}

export const createTravel = async (travel: Travel) => {
  const response = await fetch(`${BASE_URL}/request_travel`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(travel),
  });
  const data = await response.json();
  return data;
}