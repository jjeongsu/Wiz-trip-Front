import React from 'react'
import * as M from '../../styles/mylayout.style'
import * as U from '../../styles/userprofile.style'
import DefaultImage from '../../assets/default_profileimg.png'
import SettingIcon from '../../assets/setting-icon'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { getUser } from '../../apis/api/user'

function UserProfile() {

    const userId = useSelector(state=>state.User.userIdx);

    const { isLoading, data: userData } = useQuery('getTrip', () => getUser(userId));
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
    return (
        <div>
            <M.TitleText>나의 프로필</M.TitleText>
            <U.ProfileWrapper>
                <U.UserInfoLayout>
                    <img src={userData.image? userData.image: DefaultImage} alt='profile'></img>
                    <div className='user-info-wrapper'>
                        <span>{userData.nickname}</span>
                        <span>{userData.email}</span>
                    </div>
                </U.UserInfoLayout>
                <U.ReviseButton>
                    <span className='revise-text'>프로필 편집</span>
                    <SettingIcon/>
                </U.ReviseButton>
                

            </U.ProfileWrapper>
            
        </div>
    )
}

export default UserProfile