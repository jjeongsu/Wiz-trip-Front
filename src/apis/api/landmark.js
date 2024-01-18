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
  }
}

export async function getLandmarkPage() {
  try {
    const response = await axios.get(
      '/landmarks/paging?pageNo=0&numOfRows=10&sort=id',
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
