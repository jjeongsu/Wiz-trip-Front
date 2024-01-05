import React from 'react'
import * as U from '../../styles/userprofile.style'
import DefaultImage from '../../assets/default_profileimg.png'
import SettingIcon from '../../assets/setting-icon'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { getUser } from '../../apis/api/user'
import AirplaneIcon from '../../assets/airplane-icon'
import ReviewIcon from '../../assets/review-icon'
import TaskIcon from '../../assets/task-icon'

function UserProfile() {

    const userId = useSelector(state=>state.User.userIdx);

    const { isLoading, data: userData } = useQuery('getUserInfo', () => getUser(userId));
    console.log(userId);
    console.log(userData);
    
/**
    {
        "id": 0,
        "username": "string",
        "email": "string",
        "image": {
          "imageName": "string",
          "imagePath": "string"
        },
        "nickname": "string",
        "like": {}
      } */
    if(isLoading) return <div> is Loading...</div>
    return (
        <>
            <U.ProfileWrapper>
                <U.UserInfoLayout>
                    <img src={userData.image? userData.image: DefaultImage} alt='profile'></img>
                    <span className='nickname-text'>{userData.nickname}</span>
                    <span className='email-text'>{userData.email}</span>
                </U.UserInfoLayout>
                <U.Line/>
                <U.ItemLayout>
                    <AirplaneIcon/>
                    <div className='info-wrapper'>
                        <span className='title-text'>예정된 여행</span>
                        <span className='count-text'>2개</span>
                    </div>
                </U.ItemLayout>
                <U.Line/>
                <U.ItemLayout>
                    <ReviewIcon/>
                    <div className='info-wrapper'>
                        <span className='title-text'>나의 여행기록</span>
                        <span className='count-text'>1개</span>
                    </div>
                </U.ItemLayout>
                <U.Line/>
                <U.ItemLayout>
                    <TaskIcon/>
                    <div className='info-wrapper'>
                        <span className='title-text'>작성해야 할 후기</span>
                        <span className='count-text'>1개</span>
                    </div>
                </U.ItemLayout>
                <U.ReviseButton> 
                    <span className='revise-text'>회원정보 수정</span>
                    <SettingIcon/>
                </U.ReviseButton>
                
            </U.ProfileWrapper>
            
        </>
    )
}

export default UserProfile