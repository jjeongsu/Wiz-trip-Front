import React, { useState } from 'react'
import * as U from '../../styles/userprofile.style'
import DefaultImage from '../../assets/default_profileimg.png'
import SettingIcon from '../../assets/setting-icon'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { getUser } from '../../apis/api/user'
import AirplaneIcon from '../../assets/airplane-icon'
import ReviewIcon from '../../assets/review-icon'
import TaskIcon from '../../assets/task-icon'
import ReviseProfileForm from './ReviseProfileForm'
import { getMyTrip, getMyTripCount } from '../../apis/api/trip'
import { getMyReviewLength, getToReviewLength } from '../../apis/api/review'

function UserProfile() {

    const user = useSelector(state=>state.User);

    const { 
        isLoading: isLoadingUser,
        isSuccess: isSuccessUser,
        data: userData 
    } = useQuery('getUserInfo', () => getUser(user.userIdx));

    //예정된 여행 데이터 가져오기 
    const{
        isLoading: isLoadingPlanningItem,
        isSuccess: isSuccessPlanningItem,
        data: planningData,
    } = useQuery('getMyTripCount', () => getMyTripCount());
    //작성해야할 리뷰 데이터 개수 가져오기 
    const{
        isLoading: isLoadingToReview,
        isSuccess: isSuccessToReview,
        data: toReviewData,
    } = useQuery('getToReviewLength', () => getToReviewLength());
    //작성한 리뷰 데이터 개수 가져오기 
    const{
        isLoading: isLoadingMyReview,
        isSuccess: isSuccessMyReview,
        data: myReviewData,
    } = useQuery('getMyReviewLength', () => getMyReviewLength());


    const [isOpen, setIsOpen] = useState(false);

   
    return (
        <>
            <U.ProfileWrapper>
            {isSuccessUser && 
                <U.UserInfoLayout>
                    <img src={userData.image ? `data:image/webp;base64,${userData.image.content}` : DefaultImage} alt='profile' style={{ borderRadius: '50%', width: '90px', height: '90px', border: '2px solid #E8EBED' }}/>
                    <span className='nickname-text'>{userData.nickname}</span>
                    <span className='email-text'>{userData.email}</span>
                </U.UserInfoLayout>
            }
                <U.Line/>
                <U.ItemLayout>
                    <AirplaneIcon/>
                    <div className='info-wrapper'>
                        <span className='title-text'>예정된 여행</span>
                        {isSuccessPlanningItem && <span className='count-text'>{planningData}개</span>}
                    </div>
                </U.ItemLayout>
                <U.Line/>
                <U.ItemLayout>
                    <ReviewIcon/>
                    <div className='info-wrapper'>
                        <span className='title-text'>나의 여행기록</span>
                        {isSuccessMyReview && <span className='count-text'>{myReviewData.reviewNum}개</span>}
                    </div>
                </U.ItemLayout>
                <U.Line/>
                <U.ItemLayout>
                    <TaskIcon/>
                    <div className='info-wrapper'>
                        <span className='title-text'>작성해야 할 후기</span>
                        {isSuccessToReview && <span className='count-text'>{toReviewData.reviewNum}개</span>}
                    </div>
                </U.ItemLayout>
                <U.ReviseButton onClick={()=>setIsOpen(!isOpen)}> 
                    <span className='revise-text'>회원정보 수정</span>
                    <SettingIcon/>
                </U.ReviseButton>
                
            </U.ProfileWrapper>

            {isOpen && <ReviseProfileForm setIsOpen={setIsOpen}/>}
            
        </>
    )
}

export default UserProfile