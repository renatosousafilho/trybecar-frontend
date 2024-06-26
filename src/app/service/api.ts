const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const getAllPassengers = async () => {
  const response = await fetch(`${BASE_URL}/passengers`);
  const data = await response.json();
  return data;
};