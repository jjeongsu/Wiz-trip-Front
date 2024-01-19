import { cities } from '../../assets/korea-cities';
import { landmarks } from '../../assets/korea-landmarks';
import * as S from '../../styles/tourinfo.style';
import SlidePrevIcon from '../../assets/slide-prev-icon';
import SlideNextIcon from '../../assets/slide-next-icon';
import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getLandmarkPage, getLandmarks } from '../../apis/api/landmark';
import LandmarkCard from './LandmarkCard';
import axios from 'axios';
function TourInfo() {
  const [slidePx, setSlidePx] = useState(0);
  const [city, setCity] = useState('전체');
  const {
    isLoading,
    data: fetchedLandmarks,
    isSuccess,
  } = useQuery({
    queryKey: ['allLandmarks'],
    queryFn: getLandmarks,
    staleTime: 60 * 1000,
  });
  const queryClient = useQueryClient();

  console.log('fetchdata', fetchedLandmarks);
  const toPrev = () => {
    if (slidePx < 0) setSlidePx(slidePx + 1000);
  };
  const toNext = () => {
    if (slidePx > -2000) setSlidePx(slidePx - 1000);
  };
  const onCityClick = (event) => {
    console.log('선택된 city', event.target.textContent);
    setCity(event.target.textContent);
  };

  if (isLoading && fetchedLandmarks === undefined) {
    return <> 로딩중 </>;
  } else if (fetchedLandmarks.name === 'AxiosError') {
    queryClient.invalidateQueries();
  }
  return (
    <>
      <S.TourCityBox slide={slidePx}>
        <div className="slide-nav">
          <button className="slide-button" onClick={toPrev}>
            <SlidePrevIcon width="40" height="40" fill="none" />
          </button>

          <ul className="slide-item-wrapper">
            {cities.map((c, index) => (
              <li key={index} className="slide-item">
                <button
                  onClick={onCityClick}
                  style={{ color: city == c ? '#6446FF' : '#C9CDD2' }}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>

          <button className="slide-button" onClick={toNext}>
            <SlideNextIcon width="40" height="40" fill="none" />
          </button>
        </div>
      </S.TourCityBox>

      <S.TourCardBox>
        {fetchedLandmarks.name === 'AxiosError' ? (
          <>
            데이터를 불러오는 중 에러가 발생하였습니다. 리패치 될때까지
            기다리거나 새로고침 버튼을 눌러주세요
          </>
        ) : (
          fetchedLandmarks?.map((data, index) => (
            <LandmarkCard data={data} key={index} />
          ))
        )}
      </S.TourCardBox>
    </>
  );
}
export default TourInfo;
