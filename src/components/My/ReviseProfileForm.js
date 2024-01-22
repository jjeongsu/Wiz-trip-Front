import React, { useEffect, useRef, useState} from 'react'
import * as R from '../../styles/revise-profile.style'
import CloseIcon from '../../assets/close-icon'
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { createUserProfile, deleteUserProfile, getUser, patchUser } from '../../apis/api/user';
import DefaultImage from '../../assets/default_profileimg.png'
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../utils/regex';
import { sendCode, checkCode, checkNickname } from '../../apis/api/join';
import { useQueryClient, useMutation} from 'react-query';

function ReviseProfileForm({setIsOpen}) {

    const user = useSelector(state=>state.User);

    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const [isNicknameChecked, setIsNicknameChecked] = useState(false); //닉네임 중복확인 api 연결후 false로 바꾸기
    const { isLoading, data: userData } = useQuery('getUserInfo', () => getUser(user.userIdx));
    const [imgFile, setImgFile] = useState(null);
    const [file, setFile] = useState();

    useEffect(()=>{
        if (!isLoading && userData.image){
            setImgFile(userData.image)
        }
    },[isLoading, userData.image])


    const queryClient = useQueryClient();
    const updatePicMutation = useMutation(createUserProfile, {
        onSuccess: () => {
            queryClient.invalidateQueries('getUserInfo');
        },
    });

    const updateMutation = useMutation(patchUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('getUserInfo');
        },
    });
    const deleteMutation = useMutation(deleteUserProfile, {
        onSuccess: () => {
            queryClient.invalidateQueries('getUserInfo');
        },
    });
    console.log(imgFile);


    const imgRef = useRef();
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors, isDirty, isValid },
      } = useForm({
        mode: 'onChange',
        defaultValues: {
            nickname: userData.nickname,
            email: userData.email
        }});

    // 닉네임과 이메일 값 추적
    const nicknameValue = watch("nickname");
    const emailValue = watch("email");


    //이미지 파일 업로드 
    const saveImgFile = () => {
        const reader = new FileReader();
        const file = imgRef.current.files[0];

        // 파일 형식 검사
        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            alert('jpeg 또는 png 이미지 파일만 업로드 가능합니다.');
            return;
        }

        // 파일 크기 검사 (2MB 이하만 허용)
        if (file.size > 2 * 1024 * 1024) {
            alert('파일 크기는 2MB를 초과할 수 없습니다.');
            return;
        }

        setFile(file);
        
        reader.readAsDataURL(file);
        reader.onload= () => {
            setImgFile({
                fileName: file.name,
                content: reader.result
            });
        };
  
    }

    const handleCheckCode=()=>{
        const { emailcheck, email } = getValues();
        console.log(emailcheck, email);
        checkCode(emailcheck, email, setIsEmailChecked);
    }

    //수정처리
    const onSubmit = async (data) => {
        const { nickname, email } = data;
    
        if (nickname !== userData.nickname && !isNicknameChecked) {
          // 닉네임 중복확인을 거치지 않았을 경우
          return alert('닉네임 중복확인을 해주세요.');
        }
    
        if (email !== userData.email && !isEmailChecked) {
          // 이메일 인증을 거치지 않았을 경우
          return alert('이메일 인증을 해주세요.');
        }
    
        const updatedUserData = {
          ...userData,
          nickname,
          email,
        };

        if(imgFile==null && userData.image){
            await deleteMutation.mutateAsync({userId: user.userIdx});
        }else if (imgFile !== userData.image) {
            const formdata = new FormData();
            formdata.append('image', file);
            console.log(formdata);  
            await updatePicMutation.mutateAsync({userId: user.userIdx, file: formdata});
        }

        await updateMutation.mutateAsync({userId: user.userIdx, data: updatedUserData});
      

        setIsOpen(false);
        
    };


   
    if(isLoading) return<div></div>

    return (
        <R.FormLayout>
            <button
                className="close-modal-button"
                onClick={() => setIsOpen(false)}
            >
                <CloseIcon width={30} height={30} fill={'#6446FF'} style={{marginTop: '20px'}}/>
            </button>
            <label className='profile-image-icon' htmlFor='profileImg'>
                {imgFile && imgFile.fileName.endsWith('.webp')?
                    <img src={`data:image/webp;base64,${imgFile.content}`}
                        alt='profile'
                        style={{ borderRadius: '50%', width: '100px', height: '100px', border: '1px solid #878EA1' }}
                    />
                    :
                    <img src={imgFile ? imgFile.content : DefaultImage}
                        alt='profile'
                        style={{ borderRadius: '50%', width: '100px', height: '100px', border: '1px solid #878EA1' }}
                    />
                }
            </label>
            <input style={{display: 'none'}} 
                type='file' 
                accept="image/jpeg, image/png, image/jpg" 
                id="profileImg" 
                ref={imgRef} 
                onChange={saveImgFile} />

            {imgFile && 
                <R.RevImgBtn onClick={()=> setImgFile(null)}>
                    기본이미지로 변경
                </R.RevImgBtn>
            }
 

            <R.InputForm onSubmit={handleSubmit(onSubmit)}  >

                <span className='text-label'>닉네임 수정</span>
                <div className='form-component'>
                    <input
                        className='input-box'
                        type="text"
                        placeholder='닉네임'
                        {...register('nickname', {
                            required: '닉네임을 입력해주세요',
                            minLength: {
                                value: 2,
                                message: '닉네임은 2글자 이상이여야 합니다.',
                            },
                        })}
                />
                <R.FormBtn  
                    disabled={nicknameValue === userData.nickname}
                    onClick = { () =>{
                        const { nickname } = getValues();
                        checkNickname(nickname, setIsNicknameChecked);
                        }
                    }>
                    중복확인
                </R.FormBtn>
            
                </div>
                {errors.nickname && (
                    <span className="error-message">{errors.nickname.message}</span>
                )}

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
                <R.FormBtn  
                    disabled={emailValue === userData.email}
                    onClick={() => {
                        const { email } = getValues();
                        sendCode(email);
                    }}>
                    인증코드
                </R.FormBtn>
                
                </div>
                <div className='form-component'>
                    <input
                        className='input-box'
                        name="code"
                        type="text"
                        placeholder="인증코드를 입력하세요"
                        {...register('emailcheck', {
                            ...(emailValue !== userData.email && { required: '이메일 인증코드를 입력해주세요' }),
                        })}
                    />
                <R.FormBtn 
                    onClick={() => {
                        handleCheckCode();
                    }}>
                    코드확인
                </R.FormBtn>
                
                </div>
                <R.SubmitBtn 
                    type="submit" 
                    // disabled={!isDirty || !isValid}
                    >
                        수정 완료
                </R.SubmitBtn>
            </R.InputForm>
        </R.FormLayout>
    )
}


export default ReviseProfileForm


