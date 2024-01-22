import api from '../../axiosConfig';
import axios from 'axios';
import { setCookie, getCookie } from '../../utils/cookies';
const PROXY = window.location.hostname === 'localhost' ? '' : 'proxy';

export async function getReview() {
  try {
    const res = await api.get(`${PROXY}/my-reviews`);
    return res.data;
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
    const res = await api.get(`${PROXY}/my-to-reviews/count`);
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
    const res = await api.get(`${PROXY}/my-reviews/count`);
    return res.data;
  } catch (error) {
    console.log('my-Review 개수 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}
export async function getTargetReview(tripId, reviewId) {
  try {
    const res = await api.get(
      `${PROXY}/trips/${tripId}/reviews?reviewId=${reviewId}`,
    );
    return res.data;
  } catch (error) {
    console.log('타겟 리뷰 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}
//Textreview 보내기
export async function addReviewText(tripId, data) {
  try {
    const res = await api.post(`${PROXY}/trips/${tripId}/reviews`, data);
    return res.data;
  } catch (error) {
    console.log('Review 텍스트 추가 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}
//text를 먼저 보낸 후 ReviewId를 반환받아 요청
export async function addReviewImage(tripId, reviewId, data) {
  try {
    const jwtToken = getCookie('jwtToken');
    const res = await axios.post(
      `${PROXY}/trips/${tripId}/reviews/${reviewId}`,
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

export async function deleteReview(tripId, reviewId) {
  try {
    const res = await api.delete(
      `${PROXY}/trips/${tripId}/reviews?reviewId=${reviewId}`,
    );
    return res;
  } catch (error) {
    console.log('Review 삭제 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}
