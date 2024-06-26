const BASE_URL = process.env.API_URL;

export const getAllPassengers = async () => {
  console.log(BASE_URL);
  const response = await fetch(`${BASE_URL}/passengers`);
  const data = await response.json();
  return data;
};