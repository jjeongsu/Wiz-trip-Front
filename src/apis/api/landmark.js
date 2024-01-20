import axios from 'axios';

export async function getLandmarks() {
  try {
    const response = await axios.get('/landmarks');

    return response.data;
  } catch (error) {
    console.log('모든 랜드마크 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
    return error;
  }
}

export async function getLandmarkPage(pageNo, pageRow, sort) {
  try {
    const response = await axios.get(
      `/landmarks/paging?pageNo=${pageNo}&numOfRows=${pageRow}&sort=${sort}`,
    );
    return response.data;
  } catch (error) {
    console.log('랜드마크 페이징 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}

//랜드 마크 상세 조회
export async function getLandmarkDetail(contentId) {
  try {
    const response = await axios.get(
      `/landmarks/landmarks?contentId=${contentId}`,
    );
    return response.data;
  } catch (error) {
    console.log('랜드마크 상세정보 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
    return error;
  }
}
