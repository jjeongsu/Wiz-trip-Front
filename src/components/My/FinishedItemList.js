import React from 'react'
import * as T from '../../styles/mytrip.style'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';

function FinishedItemList() {
  return (
    <>
    <T.TripItem>
        <div className='d-day'>D+10</div>
        <span className='place-text'>
            목적지
        </span> 
        <span className='period-text'>
            2024-01-02~2024-01-04
        </span> 
        <T.ButtonWrapper>
            <T.StyleButton $category='review'>리뷰 작성하기</T.StyleButton>
        </T.ButtonWrapper> 
    </T.TripItem>
    </>
  )
}

export default FinishedItemList