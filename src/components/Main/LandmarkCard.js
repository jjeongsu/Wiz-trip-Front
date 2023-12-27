import HeartEmptyIcon from '../../assets/heart-empty-icon';
import HeartFilledIcon from '../../assets/heart-filled-icon';
import CloseIcon from '../../assets/close-icon';
import * as S from '../../styles/landmarkcard.style';
import { useState } from 'react';
import card from '../../assets/dummyImg/card1.png';
function LandmarkCard({ data }) {
  const [isLike, setIsLike] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onHeartClick = () => {
    setIsLike((prev) => !prev);
  };
  const onImageClick = () => {
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <S.Card>
        <button className="image-container" onClick={onImageClick}>
          <img src={card} alt="landmark-img" className="card-image" />
          <button onClick={onHeartClick} className="card-heart-button">
            {isLike ? <HeartFilledIcon /> : <HeartEmptyIcon />}
          </button>
        </button>
        <div className="text-container">
          <h2>{data.title}</h2>
          <p>{data.location}</p>
        </div>
      </S.Card>
      {isModalOpen ? (
        <S.Modal>
          <div className="modal-body">
            <button onClick={onClose}>
              <CloseIcon width={48} height={48} fill="none" />
            </button>
            <div className="modal-contents">
              <img src={card} alt="landmark-img" className="modal-image" />
              <div className="modal-text">
                <h2>{data.title}</h2>
                <span>{data.location}</span>
                <p>{data.details}</p>
              </div>
            </div>
          </div>
        </S.Modal>
      ) : null}
    </>
  );
}
export default LandmarkCard;
