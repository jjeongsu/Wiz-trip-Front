import React from 'react'
import * as T from '../../styles/mytrip.style'
import { useNavigate } from 'react-router-dom';
import { getMyTrip, deleteTrip } from '../../apis/api/trip';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';
function PlanningItemList() {

    const navigate = useNavigate();
    const {isLoading, data:myTripData} = useQuery('getMyTrip', () => getMyTrip());
    console.log(myTripData);
    const handleDelete = async (tripId) => {

        const res = await deleteTrip(tripId)
        console.log(res);
        // if(res.status===200){
        //   // 삭제된 데이터를 반영하기 위해 tripData를 업데이트
        //   setTripData((prevTripData) =>
        //     prevTripData.filter((trip) => trip.tripId !== tripId)
        //   );
        // }
    
      }
    if(isLoading) return <div>loading...</div>
     
    return (
        <>
        {myTripData.length > 0? 
            <T.TripItemBox>
            {myTripData.map((trip, index)=>(
            <T.TripItem key={index}>
                <div className='d-day'>D-{dayjs(trip.startDate).diff(dayjs(), 'day')}</div>
                <span className='place-text'>
                {trip.destination}
                </span> 
                <span className='period-text'>
                {dayjs(trip.startDate).format('YYYY-MM-DD')}~{dayjs(trip.finishDate).format('YYYY-MM-DD')}
                </span> 
                <T.ButtonWrapper>
                <T.StyleButton $category='revise' onClick={()=>navigate(`/plan/${trip.tripId}`)}>계획 편집하기</T.StyleButton>
                <T.StyleButton $category='delete' onClick={handleDelete(trip.tripId)} >계획 삭제하기</T.StyleButton>
                </T.ButtonWrapper> 
            </T.TripItem>
            ))}

            </T.TripItemBox>
            :
            <T.TripItem style={{alignItems: 'center', justifyContent: 'center'}}>
                <span className='default-text'> 예정된 내 일정이 없습니다.</span>
            </T.TripItem>
        }
        </>
    )
}

export default PlanningItemList