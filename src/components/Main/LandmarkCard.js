import HeartEmptyIcon from '../../assets/heart-empty-icon';
import HeartFilledIcon from '../../assets/heart-filled-icon';
import LandmarkModal from './LandmarkModal';
import * as S from '../../styles/landmarkcard.style';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import card from '../../assets/Oops.png';
import { getLandmarkDetail } from '../../apis/api/landmark';
import { useQuery } from 'react-query';
function LandmarkCard({ data }) {
  const [isLike, setIsLike] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
contentId: 127480
address: "전라남도 신안군 흑산면 가거도길 38-2"
imagePath: ""
contentTypeId: 12
title: "가거도(소흑산도)"
 */
  useEffect(() => {
    AOS.init();
  }, []);
  const onHeartClick = () => {
    setIsLike((prev) => !prev);
  };
  const onImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <S.Card
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        // data-aos-offset="200"
        data-aos-duration="1000"
      >
        <button className="image-container" onClick={onImageClick}>
          <img
            src={data?.imagePath ? data.imagePath : card}
            alt="landmark-img"
            className="card-image"
          />
          <button onClick={onHeartClick} className="card-heart-button">
            {isLike ? <HeartFilledIcon /> : <HeartEmptyIcon />}
          </button>
        </button>
        <div className="text-container">
          <h2>{data.title}</h2>
          <p>{data?.address}</p>
        </div>
      </S.Card>
      {isModalOpen ? (
        <LandmarkModal setIsModalOpen={setIsModalOpen} data={data} />
      ) : null}
    </div>
  );
}
export default LandmarkCard;
