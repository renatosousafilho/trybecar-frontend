const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const getAllPassengers = async () => {
  const response = await fetch(`${BASE_URL}/passengers`);
  const data = await response.json();
  return data;
};