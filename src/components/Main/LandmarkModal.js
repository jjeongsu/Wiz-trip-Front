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
            "contentId": 2524116,
    "infocenter": "033-332-5337",
    "restDate": "",
    "accomcount": "",
    "useTime": "",
    "parking": "가능",
    "checkPet": "없음",
    "checkCreditCard": "없음"
}
    } */
  const onClose = () => {
    setIsModalOpen(false);
  };

  if (isLoading && detailData === undefined) {
    return <>loading </>;
  }
  if (isError) {
    console.log('에러발생');
    queryClient.invalidateQueries();
  } else {
    console.log('detil data', detailData.infocenter);
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
                {detailData?.infocenter && (
                  <span> call 📞 : {detailData?.infocenter}</span>
                )}
                {detailData?.restDate && (
                  <p> 😐 휴무일 : {detailData?.restDate}</p>
                )}
                {detailData?.accomcount && (
                  <p> 🫂 수용인원 : {detailData?.accomcount}</p>
                )}
                {detailData?.parking && <p> 🚗 주차 : {detailData?.parking}</p>}
                {detailData?.useTime && (
                  <p> 🕙 이용시간 : {detailData?.useTime} </p>
                )}
                {detailData?.checkPet && (
                  <p> 🐕 반려동물 동반 : {detailData?.checkPet}</p>
                )}
                {detailData?.checkCreditCard && (
                  <p> 💳 카드 사용 : {detailData?.checkCreditCard}</p>
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
