import axios from 'axios';

export async function getLandmarks() {
  return await axios.get('/landmarks').data;
}
