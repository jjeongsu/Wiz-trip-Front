import api from '../../axiosConfig';
import axios from 'axios';
import { setCookie, getCookie } from '../../utils/cookies';

export async function getReview() {
  try {
    const res = await api.get('/my-reviews');
    return res;
  } catch (error) {
    console.log('Review 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}
export async function addReview(tripId, data) {
  try {
    const jwtToken = getCookie('jwtToken');
    const res = await api.post(`/trips/${tripId}/reviews`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return res;
  } catch (error) {
    console.log('Review 생성 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}
