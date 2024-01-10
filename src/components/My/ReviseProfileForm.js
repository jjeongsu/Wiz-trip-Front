import React from 'react'
import styled from 'styled-components'
import CloseIcon from '../../assets/close-icon'
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { getUser } from '../../apis/api/user';
import DefaultImage from '../../assets/default_profileimg.png'
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../utils/regex';
function ReviseProfileForm({setIsOpen}) {

    const user = useSelector(state=>state.User);

    const { isLoading, data: userData } = useQuery('getUserInfo', () => getUser(user.userIdx));


    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setError,
        clearErrors,
        formState: { errors, isDirty, isValid },
      } = useForm({ mode: 'onChange' });

    if(isLoading) return<div>is loading...</div>

    return (
        <FormLayout>
            <button
                className="close-modal-button"
                onClick={() => setIsOpen(false)}
            >
                <CloseIcon width={30} height={30} fill={'#6446FF'} style={{marginTop: '20px'}}/>
            </button>
            <div className='profile-image-icon'>
                <img src={userData.image? userData.image: DefaultImage} alt='profile'/>
            </div>
            <RevImgBtn>프로필사진 수정</RevImgBtn>

            <span className='text-label'>닉네임 수정</span>
            <div className='form-component'>
                <input
                    className='input-box'
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
            <FormBtn  onClick>
                중복확인
            </FormBtn>
            {/* {errors.nickname && (
                <span className="error-message">{errors.nickname.message}</span>
            )} */}
            </div>

            <span className='text-label'>이메일 수정</span>
            <div className='form-component'>
                <input
                    className='input-box'
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
            <FormBtn onClick>
                인증코드
            </FormBtn>
            
            </div>
            <div className='form-component'>
                <input
                    className='input-box'
                    name="email"
                    placeholder="인증코드를 입력하세요."
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
            <FormBtn onClick>
                코드확인
            </FormBtn>
            
            </div>
            <SubmitBtn>수정 완료</SubmitBtn>



        
        </FormLayout>
    )
}


export default ReviseProfileForm


const FormLayout = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 2;
    width: 364px;
    height: 500px;
    background: #FFF;
    stroke-width: 1px;
    stroke: #E8EBED;
    border-radius: 20px;
    align-items: center;

    display: flex;
    flex-direction: column;

    .close-modal-button{
        margin: 28px 32px 0px 313px;
    }
    .profile-image-icon{
        margin-top: 25px;
    }
    .text-label{
        width: 80%;
        color: var(--gray600, #454C53);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        margin: 15px 0px 5px 0px;
     
    }
    .form-component{
        display: flex;
        flex-direction: row;
        .input-box{
            width: 211px;
            height: 29px;
            border-radius: 5px;
            background: #EDF3FB;
            margin: 5px;
            border: none; //테두리 없애기
            font-family: Pretendard Variable;
            padding: 5px;
        }
    }
`

const StyledButton= styled.button`
    border-radius: 20px;
    background: var(--mainAccentColor, #6446FF);
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    font-family: Pretendard Variable;

`

const RevImgBtn = styled(StyledButton)`
    margin-top: 9px;
    width: 135px;
    height: 26px;
    line-height: 26px;
    margin-bottom: 10px;
`

const FormBtn = styled(StyledButton)`
    width: 75px;
    height: 30px;
    margin: 5px;
`

const SubmitBtn = styled(StyledButton)`
    width: 217px;
    height: 30px;
    margin-top: 20px;
`