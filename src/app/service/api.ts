import { Passenger } from '../types/Passenger';

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