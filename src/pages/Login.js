import React from 'react';
import * as L from '../styles/login.style';
import { useForm } from 'react-hook-form';
import Kakaologin from '../components/Login/Kakaologin';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <L.LoginWrapper>
      <L.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <h1 className="logo">Wiz-trip</h1>
        <span className="form-text">여행을 즐기는 새로운 경험,</span>
        <span className="form-text">
          위즈 트립에서 여행계획을 함께 짜고 공유해보세요
        </span>
        <br />
        <input
          className="input-container"
          type="email"
          name="email"
          placeholder="이메일"
          {...register('email', {
            required: '이메일을 입력하세요',
            pattern: {
              value:
                /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
              message: '이메일 형식을 확인해주세요',
            },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
        <input
          className="input-container"
          type="password"
          placeholder="비밀번호"
          {...register('password', { required: '비밀번호를 입력하세요' })}
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
        <button type="submit" className="submit-button">
          이메일 로그인
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
