//유저 관련 api
import api from '../../axiosConfig';

export async function loginUser(username, password) {
  try {
    const res = await api.post('/login', {
      username: username,
      password: password,
    });
    return res;
  } catch (error) {
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);

    switch (error.response.data.message) {
      //401-Unauthorized: Password Invalid
      case 'Password Invalid':
        return alert('비밀번호가 맞지 않습니다. 비밀번호를 다시 확인해주세요');
      //401-Unauthorized: Username Invalid
      case 'Username Invalid':
        return alert('존재하지 않는 아이디입니다. 아이디를 다시 확인해주세요');
    }
  }
}

export async function getUser(userId) {
  try {
    const res = await api.get(`/users/${userId}?userId=${userId}`);
    return res.data;
  } catch (error) {
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}

export async function getUserProfile(userId) {
  try {
    const res = await api.get(`/users/${userId}?userId=${userId}`);
    return res.data.image;
  } catch (error) {
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}

export async function patchUser(userId, data) {
  try {
    const res = await api.patch(`/users/${userId}`, data);
    return res.data;
  } catch (error) {
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
}