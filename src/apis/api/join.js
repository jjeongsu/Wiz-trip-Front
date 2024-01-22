import axios from 'axios';
import useNavigate from 'react-router-dom';
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
//1. 이메일 인증용 코드발송을 요청
export const sendCode = async (email) => {
  try {
    const response = await axios.post(
      `${PROXY}/email-verification?email=${email}`,
    );
    if (response.status === 200) {
      alert(`${email}로 인증코드가 전송되었습니다.`);
    }
  } catch (error) {
    console.log('Send Verify-Code Err', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
};

//2. 올바른 이메일 인증 코드인지 확인하기
export const checkCode = async (emailcheck, email, setIsEmailChecked) => {
  try {
    const response = await axios.get(
      `/email-verification?email=${email}&code=${emailcheck}`,
    );
    if (response.data === true) {
      alert('이메일 인증에 성공하였습니다!');
      setIsEmailChecked(true);
    } else {
      alert('이메일 인증에 실패하였습니다. 코드를 확인하여 주십시오');
    }
  } catch (error) {
    console.log('Check Verify-Code Err : ', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
};

//3. 닉네임 중복 확인 과정 추가하기
export const checkNickname = async (nickname, setIsNicknameChecked) => {
  try {
    console.log('닉네임 확인중');
    const response = await axios.get(
      `/users/nickname/exist?nickname=${nickname}`,
    );
    if (response.data === false) {
      alert('사용가능한 닉네임 입니다.');
      setIsNicknameChecked(true);
    } else {
      alert('사용할수 없는 닉네임입니다.');
    }
  } catch (error) {
    console.log('Check Verify-Nickname Err : ', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
};
//4. 회원가입 처리

export const onRegister = async (
  data,
  isEmailChecked,
  isNicknameChecked,
  navigate,
) => {
  const { email, password, nickname, passwordcheck, id } = data;
  if (isEmailChecked && isNicknameChecked) {
    try {
      const response = await axios.post('/users/signup', {
        username: id,
        email: email,
        password: password,
        confirmPassword: passwordcheck,
        nickname: nickname,
      });
      console.log('회원가입 응답', response);
      //로그인 화면으로 이동
      navigate('/login');
    } catch (error) {
      console.log('Join Error', error);
      const statusCode = error.response.status;
      const statusText = error.response.statusText;
      const message = error.response.data.message;
      console.log(`${statusCode} - ${statusText} : ${message}`);
    }
  } else {
    alert('이메일인증과 닉네임중복확인을 진행하여 주십시오.');
  }
};
