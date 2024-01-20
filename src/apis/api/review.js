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

export async function getToReviewLength() {
  try {
    const res = await api.get('/my-to-reviews/count');
    return res.data;
  } catch (error) {
    console.log('to-Review 개수 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}

export async function getMyReviewLength() {
  try {
    const res = await api.get('/my-reviews/count');
    return res.data;
  } catch (error) {
    console.log('my-Review 개수 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}

//Textreview 보내기
export async function addReviewText(tripId, data) {
  try {
    const res = await api.post(`/trips/${tripId}/reviews`, data);
    return res;
  } catch (error) {
    console.log('Review 텍스트 추가 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}
//text를 먼저 보낸 후 ReviewId를 반환받아 요청
export async function addReviewImage(reviewId, data) {
  try {
    const jwtToken = getCookie('jwtToken');
    const res = await axios.post(
      `/reviews/${reviewId}?reviewId=${reviewId}`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${jwtToken}`,
        },
      },
    );
    return res;
  } catch (error) {
    console.log('Review 이미지 추가 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}
