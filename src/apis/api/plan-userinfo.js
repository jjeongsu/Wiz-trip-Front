import axios from 'axios';

export async function getUserProfile(userIdx) {
  return (await axios.get(`/users/${userIdx}`)).data.image;
}
