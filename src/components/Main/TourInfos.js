import { cities } from '../../assets/korea-cities';
import { landmarks } from '../../assets/korea-landmarks';
import * as S from '../../styles/tourinfo.style';
import SlidePrevIcon from '../../assets/slide-prev-icon';
import SlideNextIcon from '../../assets/slide-next-icon';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LandmarkCard from './LandmarkCard';
function TourInfo() {
  console.log(cities);
  const [slidePx, setSlidePx] = useState(0);
  const [city, setCity] = useState('');
  const toPrev = () => {
    if (slidePx < 0) setSlidePx(slidePx + 1000);
  };
  const toNext = () => {
    if (slidePx > -2000) setSlidePx(slidePx - 1000);
  };
  const onCityClick = (event) => {
    setCity(event.target.value);
  };

  console.log(city);
  useEffect(() => {
    axios.get('/landmarks').then((res) => console.log(res));
  }, []);
  return (
    <>
      <S.TourCityBox slide={slidePx}>
        <div className="slide-nav">
          <button className="slide-button" onClick={toPrev}>
            <SlidePrevIcon width="40" height="40" fill="none" />
          </button>

          <ul className="slide-item-wrapper">
            {cities.map((city, index) => (
              <li key={index} className="slide-item">
                <button onClick={onCityClick}>{city}</button>
              </li>
            ))}
          </ul>

          <button className="slide-button" onClick={toNext}>
            <SlideNextIcon width="40" height="40" fill="none" />
          </button>
        </div>
      </S.TourCityBox>
      <S.TourCardBox>
        {landmarks.map((data, index) => (
          <LandmarkCard data={data} key={index} />
        ))}
      </S.TourCardBox>
    </>
  );
}
export default TourInfo;
