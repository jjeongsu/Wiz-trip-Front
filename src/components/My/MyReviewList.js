import React from 'react'
import * as M from '../../styles/mylayout.style'
import * as R from '../../styles/myreview.style'
import NoImage from '../../../src/assets/dummyImg/NoImage.png'
import { useQuery } from 'react-query'
import { getReview } from '../../apis/api/review'
function MyReviewList() {

  const {isLoading, data:myReview} = useQuery('getMyReview', () => getReview());

  if(isLoading)return<div></div>

  return (
    <>
    <M.TitleText>나의 여행기록</M.TitleText>
    <M.Line/>
    {myReview.listSize > 0? 
        <R.ReviewItemBox>
          <R.ReviewItem>
            <img src={NoImage} className='image' alt='No'/>
            <span className='place-text'>부산광역시</span>
            <span className='period-text'>2024-01-01~2024-01-03</span>
          </R.ReviewItem>
        </R.ReviewItemBox>
        :
        <R.ReviewItem>
         <span className='default-text'> 작성된 내 여행기록이 없습니다.</span>
        </R.ReviewItem>
    }
    </>
  )
}

export default MyReviewList