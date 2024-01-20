import React from 'react';
import * as L from '../styles/login.style';
import { passwordRegex } from '../utils/regex';
import { useForm } from 'react-hook-form';
import {getCookie, setCookie} from '../utils/cookies';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DecodingInfo from '../utils/decodingInfo';
import { useDispatch } from 'react-redux';
import { authUser } from '../services/user';
import { getUser, loginUser } from '../apis/api/user';
import { GoToTrip } from './Share';

function Login({setIsLogin}) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  //로그인 요청 코드
  const onSubmit = async (e) => {
    const {username, password} = getValues();

    //로그인 api 요청 
    const res = await loginUser(username, password);

    if(res){
      //header jwt 토큰 정보 받아오기 
      let jwtToken = res.headers.get("Authorization"); 
      let refreshToken = res.headers.get("refresh");

      //쿠키에 jwtToken, refreshToken 저장
      setCookie('jwtToken', jwtToken, {path: '/'});
      setCookie('refreshToken', refreshToken, {path: '/'});

      // jwt토큰 디코딩 
      let decodingInfo = DecodingInfo(jwtToken);
  
      //userId 추출 
      let userId = decodingInfo.id;

      //사용자 정보 API 요청 
      const userData = await getUser(userId);
      console.log(userData);

      //사용자 정보 리덕스 저장 
      dispatch(authUser({
        userIdx: userId,
        userProfile: userData.image,
        nickname: userData.nickname,
      }));

      //쿠키에 저장된 tripId가 있는 경우
      if(getCookie('tripId')){
        const tripId = await GoToTrip(getCookie('tripId'), userId);
        setIsLogin(true);
        navigate(`/plan/${tripId}`);
      }else{
        //메인화면 이동 
        setIsLogin(true);
        navigate('/')
      }

    }
};

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

        <p className="bottom-text">
          아직 회원이 아닌가요? <a href="/join">회원가입 하러가기</a>
        </p>
      </L.LoginForm>
    </L.LoginWrapper>
  );
}

export default Login;
