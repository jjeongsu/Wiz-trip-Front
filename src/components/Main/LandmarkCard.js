import HeartEmptyIcon from '../../assets/heart-empty-icon';
import HeartFilledIcon from '../../assets/heart-filled-icon';
import LandmarkModal from './LandmarkModal';
import * as S from '../../styles/landmarkcard.style';
import { useState, useEffect } from 'react';

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

  const onHeartClick = () => {
    setIsLike((prev) => !prev);
  };
  const onImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <S.Card>
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
    </>
  );
}
export default LandmarkCard;
