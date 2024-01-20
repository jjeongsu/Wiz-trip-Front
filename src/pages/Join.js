import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import FormLayout from '../components/FormLayout';
import { emailRegex, passwordRegex } from '../utils/regex';
import * as S from '../styles/join.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  onRegister,
  sendCode,
  checkCode,
  checkNickname,
} from '../apis/api/join';
function Join() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setError,
    clearErrors,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false); //닉네임 중복확인 api 연결후 false로 바꾸기
  const navigate = useNavigate();

  //4. 회원가입 처리
  const onSubmit = async (data) => {
    onRegister(data, isEmailChecked, isNicknameChecked, navigate);
  };

  useEffect(() => {
    if (
      watch('password') !== watch('passwordCheck') &&
      watch('passwordCheck')
    ) {
      setError('passwordCheck', {
        type: 'password-mismatch',
        message: '비밀번호가 일치하지 않습니다',
      });
    } else {
      // 비밀번호 일치시 오류 제거
      clearErrors('passwordCheck');
    }
  }, [watch('password'), watch('passwordcheck')]);

  console.log(watch());
  console.log(errors);
  console.log('이메일 인증여부 ', isEmailChecked);
  console.log('닉네임 중복여부', isNicknameChecked);
  return (
    <FormLayout title="Join Us">
      <S.JoinForm onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <input
            name="email"
            placeholder="이메일"
            type="email"
            {...register('email', {
              required: '* 이메일을 입력해주세요',
              pattern: {
                value: emailRegex,
                message: '* 이메일 형식을 확인해주세요',
              },
              minLength: {
                value: 3,
                message: '최소한 3글자 이상이여야 합니다.',
              },
            })}
          />
          <S.Button
            className="button"
            onClick={() => {
              const { email } = getValues();
              sendCode(email);
            }}
          >
            인증코드
          </S.Button>

          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
          <input
            className="input-check"
            type="text"
            placeholder="인증코드를 입력하세요"
            {...register('emailcheck', {
              required: '이메일 인증코드를 입력해주세요',
            })}
          />
          <S.Button
            className="button"
            onClick={() => {
              const { emailcheck, email } = getValues();
              checkCode(emailcheck, email, setIsEmailChecked);
            }}
          >
            코드확인
          </S.Button>
          <input
            name="id"
            type="text"
            placeholder="아이디"
            {...register('id', {
              required: '아이디를 입력해주세요',
            })}
          />
          {errors.id && (
            <span className="error-message">{errors.id.message}</span>
          )}
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              pattern: {
                value: passwordRegex,
                message:
                  '영문, 숫자, 특수문자 중 2가지 이상 조합하여 10자리 이내',
              },
            })}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
          <input
            className="input-check"
            type="password"
            placeholder="비밀번호확인"
            name="passwordcheck"
            {...register('passwordcheck', {
              required: '비밀번호를 재입력해주세요',
              validate: {
                matchPassword: (value) => {
                  const { password } = getValues();
                  return password === value || '비밀번호가 일치하지 않습니다';
                },
              },
            })}
          />
          {errors.passwordcheck && (
            <span className="error-message">
              {errors.passwordcheck.message}
            </span>
          )}
          <input
            type="text"
            placeholder="닉네임"
            {...register('nickname', {
              required: '닉네임을 입력해주세요',
              minLength: {
                value: 2,
                message: '닉네임은 2글자 이상이여야 합니다.',
              },
              maxLength: {
                value: 8,
                message: '닉네임은 8글자 이하여야 합니다.',
              },
            })}
          />
          <S.Button
            className="button"
            onClick={() => {
              const { nickname } = getValues();
              checkNickname(nickname, setIsNicknameChecked);
            }}
          >
            중복확인
          </S.Button>
          {errors.nickname && (
            <span className="error-message">{errors.nickname.message}</span>
          )}
        </div>

        <S.SubmitBtn type="submit" disabled={!isDirty || !isValid}>
          가입하기
        </S.SubmitBtn>
      </S.JoinForm>
    </FormLayout>
  );
}
export default Join;
