import React from 'react';
import * as L from '../styles/login.style';
import { emailRegex, passwordRegex } from '../utils/regex';
import { useForm } from 'react-hook-form';
import Kakaologin from '../components/Login/Kakaologin';
import axios from 'axios';
import {setCookie, getCookie} from '../utils/cookies';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DecodingInfo from '../utils/decodingInfo';
import { useDispatch } from 'react-redux';
import { authUser } from '../services/user';

function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();


  //로그인 요청 코드
  const onSubmit = async (e) => {
    const {username, password} = getValues();
    try{
      const res = await axios.post('/login',{
        username: username,
        password: password
      });
      console.log('로그인 응답', res);

      //header jwt 토큰 정보 받아오기 
      let jwtToken = res.headers.get("Authorization"); 
      let refreshToken = res.headers.get("refresh");
      console.log(jwtToken);
      console.log(refreshToken);

      //쿠키에 jwtToken, refreshToken 저장
      setCookie('jwtToken', jwtToken, {path: '/'});
      setCookie('refreshToken', refreshToken, {path: '/'});

      // //jwt토큰 디코딩 
      let decodingInfo = DecodingInfo(jwtToken);

      console.log(decodingInfo);
      console.log(decodingInfo.id);
  
      //userId 추출 
      let userId = decodingInfo.id;

      //사용자 정보 API 요청 
      const response = await axios.get(`/users/${userId}?userId=${userId}`);
      console.log(response.data);


      //사용자 정보 리덕스 저장 
      dispatch(authUser({
        userIdx: userId,
        userProfile: response.data.image,
        nickname: response.data.nickname,
      }));

      //메인화면 이동 
      navigate('/')
    } catch (error) {
      console.log('Login Error', error);
      const statusCode = error.response.status;
      const statusText = error.response.statusText;
      const message = error.response.data.message;
      console.log(`${statusCode} - ${statusText} : ${message}`);

      switch(error.response.data.message){
        //401-Unauthorized: Password Invalid
        case "Password Invalid":
          return alert("비밀번호가 맞지 않습니다. 비밀번호를 다시 확인해주세요")
        //401-Unauthorized: Username Invalid
          case "Username Invalid":
          return alert("존재하지 않는 아이디입니다. 아이디를 다시 확인해주세요")
      }

  }

};

// JWT 토큰 만료 감지 및 새 토큰 요청 함수
// const AuthToken = async () => {
//   try {
//     // 쿠키에서 refreshToken을 가져옴
//     const refreshToken = getCookie('refreshToken');
    
//     // refreshToken을 서버로 보내 새로운 JWT 토큰을 요청
//     const res = await axios.post('/refresh_token', {
//       'refresh': refreshToken
//     });
    
//     // 새로운 JWT 토큰과 refreshToken을 받아옴 
//     const newJwtToken = res.headers.get("Authorization");
//     const newRefreshToken = res.headers.get("refresh");

//     // 쿠키를 업데이트
//     setCookie('jwtToken', newJwtToken, { path: '/' });
//     setCookie('refreshToken', newRefreshToken, { path: '/' });

//     // axios의 기본 헤더를 업데이트
//     axios.defaults.headers.common['x-access-token'] = `Bearer ${newJwtToken}`;

//     return newJwtToken;
//   } catch (error) {
//     // 새로운 토큰을 받아오는 데 실패한 경우, 로그인 페이지로 리다이렉트할 수 있습니다.
//     console.error('Failed to refresh token', error);
//     navigate('/login');
//   }
// };

// // API 요청을 보낼 때마다 호출되는 인터셉터를 설정
// axios.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;
//     if (error.response.message === "JWT Token Expired" && !originalRequest._retry) {
//       // JWT 토큰이 만료되었다는 응답을 받으면, 토큰 새로고침을 시도
//       originalRequest._retry = true;
//       const newJwtToken = await AuthToken();
//       axios.defaults.headers.common['x-access-token'] = `Bearer ${newJwtToken}`;
//       originalRequest.headers['x-access-token'] = `Bearer ${newJwtToken}`;

//       // 새 토큰으로 원래 요청을 다시 시도합니다.
//       return axios(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

  return (
    <L.LoginWrapper>
      <L.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Link to='/' className='logo'>Wiz-trip</Link>
        <span className="form-text">여행을 즐기는 새로운 경험,</span>
        <span className="form-text">
          위즈 트립에서 여행계획을 함께 짜고 공유해보세요
        </span>
        <br />
        <input
          className="input-container"
          type="text"
          name="username"
          placeholder="아이디"
          {...register('username', {
            required: '* 아이디를 입력하세요',
          })}
        />
        {errors.username && <span className="error">{errors.username.message}</span>}
        <input
          className="input-container"
          type="password"
          placeholder="비밀번호"
          {...register('password', { 
            required: '* 비밀번호를 입력하세요', 
            pattern: {
              value:
                passwordRegex,
              message: '* 비밀번호 형식을 확인해주세요',
            }})}
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
        <button type="submit" className="submit-button">
           로그인
        </button>

        <L.LineContainer>
          <hr />
          <span>or</span>
          <hr />
        </L.LineContainer>
        <Kakaologin />
        <p className="bottom-text">
          아직 회원이 아닌가요? <a href="/join">회원가입 하러가기</a>
        </p>
      </L.LoginForm>
    </L.LoginWrapper>
  );
}

export default Login;
