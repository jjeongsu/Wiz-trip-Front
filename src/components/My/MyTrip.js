import React, {useState, useEffect} from 'react'
import * as M from '../../styles/mylayout.style'
import * as T from '../../styles/mytrip.style'
import { getMyTrip, deleteTrip } from '../../apis/api/trip';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import SlidePrevIcon from '../../assets/slide-prev-icon';
import SlideNextIcon from '../../assets/slide-next-icon';

function MyTrip() {

  const [Menu, setMenu] = useState('my');
  const [tripData, setTripData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // 메뉴 선택에 따라 API 요청을 보내고 일정을 조회
    if (Menu === 'my') {
      getMyTrip(1, 2) // pageNum, pageSize
      .then((data) => {
        console.log(data.content);
        setTripData(data.content);
        console.log(tripData);
      })
      .catch((error) => {
        console.error('내 일정 조회 에러:', error);
      });
      
    } else if (Menu === 'shared') {
      // 공유된 일정 조회 API 요청
      console.log("공유된 일정");
    }
  }, [Menu]);


  const handleDelete = async (tripId) => {

    const res = await deleteTrip(tripId)
    if(res.status===200){
      // 삭제된 데이터를 반영하기 위해 tripData를 업데이트
      setTripData((prevTripData) =>
        prevTripData.filter((trip) => trip.tripId !== tripId)
      );
    }

  }

  return (
    <div>
        <M.TitleText>예정된 여행</M.TitleText>
        <T.MenuWrapper> 
            <T.MenuButton $active={Menu === 'my'} onClick={() => Menu !== 'my' && setMenu('my')}>· 내 일정</T.MenuButton>
            <T.MenuButton $active={Menu === 'shared'}  onClick={() => Menu !== 'shared' && setMenu('shared')}>· 공유된 일정</T.MenuButton>
        </T.MenuWrapper>
        {tripData.length > 0? 
          <>
          {tripData.map((trip, index)=>(
            <T.TripItem key={index}>
              <div className='item-layout' style={{margin: '24px'}}>
                <span className='place-text'>{trip.destination}</span> 
                <span className='period-text'>{dayjs(trip.startDate).format('YYYY-MM-DD')}~{dayjs(trip.finishDate).format('YYYY-MM-DD')}</span> 
              </div>
              <div className='item-layout' style={{margin: '15px'}}>
                <button onClick={()=> navigate(`/plan/${trip.tripId}`)}>일정 바로가기</button>
                <button onClick={() => handleDelete(trip.tripId)}>일정 삭제하기</button>
              </div>    
            </T.TripItem>
          ))}
          {/* <SlidePrevIcon width="25" height="25" fill="none" />
          <SlideNextIcon width="25" height="25" fill="none" /> */}
          </>
            :
            <T.TripItem style={{alignItems: 'center', justifyContent: 'center'}}>
              <span className='default-text'> 예정된 내 일정이 없습니다.</span>
            </T.TripItem>
      }

  
 
        


    </div>
  )
}

export default MyTrip;