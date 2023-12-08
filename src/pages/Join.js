import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import FormLayout from '../components/FormLayout';
import { emailRegex, passwordRegex } from '../utils/regex';
import * as S from '../styles/join.style';
function Join() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setError,
    clearErrors,
    formState,
  } = useForm({ mode: onchange });
  const { errors } = formState;
  const onValid = (e) => {
    console.log('valid한 폼 제출');
    e.preventDefault();
  };
  const checkCode = (e) => {
    const { emailcheck } = getValues();
    //axios.post 요청보내기
  };
  const checkNickname = (e) => {
    const { nickname } = getValues();
    //axios.post 요청보내기
  };
  const sendCode = (e) => {
    const { email } = getValues();
    console.log(errors);
    //axios.post 요청보내기
    alert(`${email}로 인증코드가 전송되었습니다.`);
  };

  // useEffect(() => {
  //   if (
  //     watch('password') !== watch('passwordCheck') &&
  //     watch('passwordCheck')
  //   ) {
  //     setError('passwordCheck', {
  //       type: 'password-mismatch',
  //       message: '비밀번호가 일치하지 않습니다',
  //     });
  //   } else {
  //     // 비밀번호 일치시 오류 제거
  //     clearErrors('passwordCheck');
  //   }
  // }, [watch('password'), watch('passwordcheck')]);

  console.log(watch());
  return (
    <FormLayout title="Join Us">
      <S.JoinForm onSubmit={handleSubmit(onValid)} className="container">
        <div className="container">
          <input
            placeholder="이메일"
            type="email"
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: emailRegex,
                message: '이메일 형식을 확인해주세요',
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
        </div>
        {/* disabled={!isDirty || !isValid} */}
        <S.SubmitBtn type="submit">가입하기</S.SubmitBtn>
      </S.JoinForm>
    </FormLayout>
  );
}
export default Join;
