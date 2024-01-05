import React from 'react'
import * as M from '../../styles/mylayout.style'
import * as R from '../../styles/myreview.style'
import NoImage from '../../../src/assets/dummyImg/NoImage.png'
function MyReviewList() {
  return (
    <div>
        <M.TitleText>나의 여행기록</M.TitleText>
        <M.Line/>
        <R.ReviewItemBox>
          <R.ReviewItem>
            <img src={NoImage} className='image' alt='No'/>
            <span className='place-text'>부산광역시</span>
            <span className='period-text'>2024-01-01~2024-01-03</span>
          </R.ReviewItem>
        </R.ReviewItemBox>
        
    </div>
  )
}

export default MyReviewList