import React from 'react';
import * as T from '../../styles/mytrip.style';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useQueryClient, useMutation } from 'react-query';
import { deleteTrip } from '../../apis/api/trip';
function FinishedItemList({ myTripData }) {
  console.log('mytripdata', myTripData);
  const userIdx = useSelector(state => state.User.userIdx);

  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteTrip, {
    onSuccess: () => {
      queryClient.invalidateQueries('getMyTrip');
    },
  });

  const handleDelete = async (tripId) => {
    await deleteMutation.mutateAsync(tripId);
  }
  return (
    <>
      {myTripData.length > 0 ? (
        <T.TripItemBox>
          {myTripData.map((trip, index) => (
            <T.TripItem key={index}>
              <div className="d-day">
                D+{dayjs().diff(dayjs(trip.finishDate), 'day')}
              </div>
              <span className="place-text">{trip?.destination}</span>
              <span className="period-text">
                {dayjs(trip.startDate).format('YYYY-MM-DD')}~
                {dayjs(trip.finishDate).format('YYYY-MM-DD')}
              </span>
              {/* <T.ButtonWrapper>
                <T.StyleButton
                  $category="review"
                  onClick={() => {
                    const tripId = trip?.tripId;
                    navigate(`/write/${~~tripId}`);
                  }}
                >
                  리뷰 작성하기
                </T.StyleButton>
              </T.ButtonWrapper> */}
              {trip.ownerId == userIdx && <T.StyleButton $category='delete' onClick={() => handleDelete(trip.tripId)} >계획 삭제하기</T.StyleButton>} 
            </T.TripItem>
          ))}
        </T.TripItemBox>
      ) : (
        <T.TripItem style={{ alignItems: 'center', justifyContent: 'center' }}>
          <span className="default-text"> 완료된 내 일정이 없습니다.</span>
        </T.TripItem>
      )}
    </>
  );
}

export default FinishedItemList;
