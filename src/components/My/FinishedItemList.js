import React from 'react';
import * as T from '../../styles/mytrip.style';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

function FinishedItemList({ myTripData }) {
  console.log('mytripdata', myTripData);
  const navigate = useNavigate();
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
