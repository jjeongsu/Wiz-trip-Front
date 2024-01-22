import api from '../../axiosConfig';
const PROXY = window.location.hostname === 'localhost' ? '' : 'proxy';
export async function getMemoData(tripId, category) {
  try {
    const res = await api.get(
      `${PROXY}/trips/${tripId}/memos?tripId=${tripId}&category=${category}`,
    );
    return res.data.list;
  } catch (error) {
    console.log('Trip 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}
export async function addMemoData({ tripId, data }) {
  try {
    console.log(data);
    const res = await api.post(
      `${PROXY}/trips/${tripId}/memos?tripId=${tripId}`,
      data,
    );
    return res;
  } catch (error) {
    console.log('Trip Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}

export async function deleteMemoData({ tripId, memoId }) {
  try {
    const res = await api.delete(
      `${PROXY}/trips/${tripId}/memos?tripId=${tripId}&memoId=${memoId}`,
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log('내 Trip 삭제 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}
