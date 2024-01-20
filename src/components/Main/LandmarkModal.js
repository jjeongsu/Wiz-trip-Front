import * as S from '../../styles/landmarkcard.style';
import CloseIcon from '../../assets/close-icon';
import card from '../../assets/Oops.png';
import { useQuery, useQueryClient } from 'react-query';
import { getLandmarkDetail } from '../../apis/api/landmark';
function LandmarkModal({ setIsModalOpen, data }) {
  const {
    data: detailData,
    isLoading,
    isError,
  } = useQuery(['detail', data.contentId], () =>
    getLandmarkDetail(data.contentId),
  );
  const queryClient = useQueryClient();
  /** {
        "contentId": 2994116,
        "infocenter": "033-572-1800",
        "restDate": "매월 마지막 주 월요일",
        "accomcount": "일 800명",
        "useTime": "사우나, 욕장 07:00~19:00<br>\n스파월드 10:00~18:00",
        "parking": "가능 (소형 61대 / 대형 4대 / 장애인 4대)",
        "checkPet": "불가",
        "checkCreditCard": "가능"
    } */
  const onClose = () => {
    setIsModalOpen(false);
  };

  if (isLoading && detailData === undefined) {
    return <> </>;
  }
  if (isError) {
    console.log('에러발생');
    queryClient.invalidateQueries();
  } else {
    console.log('detil data', detailData);
    return (
      <S.Modal>
        <div className="modal-body">
          <button onClick={onClose}>
            <CloseIcon width={48} height={48} fill="#6446ff" />
          </button>
          <div className="modal-contents">
            <img
              src={data?.imagePath ? data.imagePath : card}
              alt="landmark-img"
              className="modal-image"
            />
            <div className="modal-text">
              <h2>{data.title}</h2>
              <>
                {detailData[0]?.infocenter && (
                  <span> call 📞 : {detailData[0]?.infocenter}</span>
                )}
                {detailData[0]?.restDate && (
                  <p> 😐 휴무일 : {detailData[0]?.restDate}</p>
                )}
                {detailData[0]?.accomcount && (
                  <p> 🫂 수용인원 : {detailData[0]?.accomcount}</p>
                )}
                {detailData[0]?.parking && (
                  <p> 🚗 주차 : {detailData[0]?.parking}</p>
                )}
                {detailData[0]?.useTime && (
                  <p> 🕙 이용시간 : {detailData[0]?.useTime} </p>
                )}
                {detailData[0]?.checkPet && (
                  <p> 🐕 반려동물 동반 : {detailData[0]?.checkPet}</p>
                )}
                {detailData[0]?.checkCreditCard && (
                  <p> 💳 카드 사용 : {detailData[0]?.checkCreditCard}</p>
                )}
              </>
            </div>
          </div>
        </div>
      </S.Modal>
    );
  }
}
export default LandmarkModal;
