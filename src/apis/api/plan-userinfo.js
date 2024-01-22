import axios from 'axios';
const PROXY = window.location.hostname === 'localhost' ? '' : 'proxy';

export async function getUserProfile(userIdx) {
  return (await axios.get(`${PROXY}/users/${userIdx}`)).data.image;
}
