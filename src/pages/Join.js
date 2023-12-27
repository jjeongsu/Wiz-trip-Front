import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import FormLayout from '../components/FormLayout';
import { emailRegex, passwordRegex } from '../utils/regex';
import axios from 'axios';
import * as S from '../styles/join.style';
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

  const [isEmailChecked, setIsEmailChecked] = useState(true);
  const [isNicknameChecked, setIsNicknameChecked] = useState(true); //닉네임 중복확인 api 연결후 false로 바꾸기

  //1. 이메일 인증용 코드발송을 요청
  const sendCode = async (e) => {
    const { email } = getValues();
    if (!errors.email) {
      try {
        const response = await axios.post(`/email-verification?email=${email}`);
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
    } else {
      alert('이메일 형식을 다시 확인하여 주십시오');
    }
  };

  //2. 올바른 이메일 인증코드인지 확인
  const checkCode = async (e) => {
    const { emailcheck, email } = getValues();
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

  //3. 닉네임 중복체크
  const checkNickname = (e) => {
    const { nickname } = getValues();
    //axios.post 요청보내기
  };

  //4. 회원가입 처리
  const onSubmit = async (data) => {
    const { email, password, nickname, passwordcheck } = data;
    // const username = email.slice(0, email.indexOf('@'));
    if (isEmailChecked && isNicknameChecked) {
      try {
        const response = await axios.post('/users/signup', {
          username: email.slice(0, email.indexOf('@')),
          email: email,
          password: password,
          confirmPassword: passwordcheck,
          nickname: nickname,
        });
        console.log('회원가입 응답', response);
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
          <S.Button className="button" onClick={sendCode}>
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
          <S.Button className="button" onClick={checkCode}>
            코드확인
          </S.Button>

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
            })}
          />
          <S.Button className="button" onClick={checkNickname}>
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
