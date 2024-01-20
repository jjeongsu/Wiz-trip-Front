import { cities, cityToCode } from '../../assets/korea-cities';
import { landmarks } from '../../assets/korea-landmarks';
import * as S from '../../styles/tourinfo.style';
import SlidePrevIcon from '../../assets/slide-prev-icon';
import SlideNextIcon from '../../assets/slide-next-icon';
import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Spinner from '../../assets/loading-spinner.gif';
import {
  getLandmarkPage,
  getLandmarks,
  getCityLandmark,
} from '../../apis/api/landmark';
import LandmarkCard from './LandmarkCard';
import axios from 'axios';
import LoadingIcon from '../../assets/loading';
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

  //도시별로 데이터 불러오기
  const { data: fetchedLandmarksCity, isLoading: isLoadingCity } = useQuery({
    queryKey: ['landmark', city],
    queryFn: () => getCityLandmark(cityToCode[city]),
    stateTime: 60 * 1000,
    enabled: city != '전체',
  });

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
    return (
      <S.SpinnerContainer>
        <img src={Spinner} alt="loading-spinner" />{' '}
      </S.SpinnerContainer>
    );
  } else if (
    city !== '전체' &&
    isLoadingCity &&
    fetchedLandmarksCity === undefined
  ) {
    return (
      <S.SpinnerContainer>
        <img src={Spinner} alt="loading-spinner" />
      </S.SpinnerContainer>
    );
  }
  //  else if (fetchedLandmarks.name === 'AxiosError') {
  // queryClient.invalidateQueries();
  // }
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
        {city === '전체' ? (
          fetchedLandmarks?.map((data, index) => (
            <LandmarkCard data={data} key={index} />
          ))
        ) : isLoadingCity ? (
          <S.SpinnerContainer>
            <img src={Spinner} alt="loading-spinner" />
          </S.SpinnerContainer>
        ) : (
          fetchedLandmarksCity?.map((data, index) => (
            <LandmarkCard data={data} key={index} />
          ))
        )}
      </S.TourCardBox>
    </>
  );
}
export default TourInfo;
