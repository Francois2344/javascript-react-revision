import axios from "axios";

/**
 * Fetch all wilders from the api.
 * @returns {Promise<any>} a Promise which contains an array of wilders
 */
export const fetchWilders = async () => {
  const response = await axios.get('http://localhost:5000/wilders')
  return response.data;
}

/**
 * Create a new wilder with a name and a city.
 * @param name wilder name
 * @param city wilder city
 * @param skills wilder skills
 * @returns {Promise<any>} a Promise which contains a wilder
 */
export const createWilder = async (name, city, skills) => {
  const response = await axios.post('http://localhost:5000/wilders', {
    name,
    city,
    skills
  });
  return response.data;
}

/**
 * Remove a wilder relative to the id in parameter.
 * @param id wilder id
 * @returns {Promise<void>} a Promise
 */
export const removeWilder = async (id) => {
  await axios.delete(`http://localhost:5000/wilders/${id}`);
}