//trip 관련 api
import api from '../../axiosConfig';
import axios from 'axios';
const PROXY = window.location.hostname === 'localhost' ? '' : 'proxy';

export async function addTrip(data) {
  try {
    const res = await api.post(`${PROXY}/trips`, data);
    return res;
  } catch (error) {
    console.log('Trip Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}

export async function updateTrip(data) {
  try {
    const res = await api.patch(`${PROXY}/trips`, data);
    return res;
  } catch (error) {
    console.log('Trip Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}

export async function finishTrip(tripId) {
  try {
    const res = await api.patch(`${PROXY}/trips/${tripId}?tripId=${tripId}`);
    return res;
  } catch (error) {
    console.log('Trip finish Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);

    alert(message);
  }
}

export async function getTrip(tripId) {
  try {
    const res = await api.get(`${PROXY}/trips?tripId=${tripId}`);
    return res.data;
  } catch (error) {
    console.log('Trip 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);

    if (statusCode === 403) {
      return statusCode;
    }
  }
}

export async function getMyTrip() {
  try {
    const res = await api.get(`${PROXY}/trips/with-details/page`);
    console.log(res.data);
    return res.data.content;
  } catch (error) {
    console.log('내 Trip 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}

export async function getMyTripCount() {
  try {
    const res = await api.get(`${PROXY}/my-trips/count`);
    return res.data.tripNum;
  } catch (error) {
    console.log('계획중 여행 개수 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}

export async function deleteTrip(tripId) {
  try {
    const res = await api.delete(`${PROXY}/trips?tripId=${tripId}`);
    return res;
  } catch (error) {
    console.log('내 Trip 삭제 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}

//trip 공유 url 생성
export async function createUrl(tripId) {
  try {
    const res = await api.post(`${PROXY}/trips/share?tripId=${tripId}`);
    return res.data;
  } catch (error) {
    console.log('url 생성 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);

    if (statusCode == 409) {
      alert('이미 종료된 전체 여행 계획입니다.');
    }
  }
}

//trip 공유 url에서 tripId 조회
export async function getTripId(id) {
  try {
    const res = await axios.get(`${PROXY}/trips/share?url=${id}`);
    return res;
  } catch (error) {
    console.log('url 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);

    return alert(error.response.data.message);
  }
}

export async function addUserToTrip(tripId, userId) {
  try {
    const res = await api.post(
      `${PROXY}/trips/${tripId}/users/${userId}?tripId=${tripId}&userId=${userId}`,
    );
    return res.data;
  } catch (error) {
    console.log('user trip 추가 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);

    return alert(error.response.data.message);
  }
}
