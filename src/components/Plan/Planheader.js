import React, { useState, useEffect } from 'react';
import * as P from '../../styles/planheader.style';
import UpdatePlanInfo from './UpdatePlanInfo';
import ConnectedUsers from './ConnectedUsers';
import { useDispatch, useSelector } from 'react-redux';
import LinkIcon from '../../assets/link-icon';
<<<<<<< HEAD
import { createUrl, finishTrip } from '../../apis/api/trip';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const domain = 'http://localhost:3000'
function Planheader({userIdList}) {
  const planinfo = useSelector((state) => state.Schedule);
  const [updateform, setUpdateForm] = useState(false);
  const tripId = useParams().tripId;
  const navigate = useNavigate();

=======
import { useNavigate } from 'react-router-dom';
function Planheader({ userIdList, tripId }) {
  const planinfo = useSelector((state) => state.Schedule);
  const [updateform, setUpdateForm] = useState(false);
  const navigate = useNavigate();
>>>>>>> review
  const formatDate = (date) => {
    // 월과 일만 표시하도록 설정
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ko-KR', options); // 한국어로 날짜 표시
  };

  const startDate = formatDate(new Date(planinfo.startDate));
  const endDate = formatDate(new Date(planinfo.endDate));

<<<<<<< HEAD

  //초대 url 생성 및 클립보드 복사 
  const handleUrl = async() =>{
    const res = await createUrl(tripId);
    if(res){
       // 클립보드에 URL 복사
       await navigator.clipboard.writeText(`${domain}/trips/share/${res.url}`); // res.data.url은 API 응답에서 실제 URL을 가리킵니다.
       // 사용자에게 알림
       alert('초대링크가 클립보드에 복사되었습니다.');
    }

  }

  
  //트립 종료 
  const handleFinishTrip = async()=>{
    const res = await finishTrip(tripId);
    if(res.status==200){
      alert('trip이 종료되었습니다.');
      //메인페이지 이동
      navigate('/')
    }
  }
=======
  const handleDoneClick = () => {
    // 여행을 완료 확인 모달

    navigate(`/write/${tripId}`);
  };
>>>>>>> review
  return (
    <P.HeaderWrapper>
      <div className="left-container">
        {/* 여행개요 */}
        {updateform ? (
          <UpdatePlanInfo setUpdateForm={setUpdateForm} />
        ) : (
          <P.PlanInfoLayout
            onClick={() => {
              setUpdateForm(true);
            }}
          >
            <span className="text-container">{planinfo.place}</span>
            <div className="vertical-line" />
            <span className="text-container">
              {startDate} ~ {endDate}
            </span>
            <div className="vertical-line" />
            <span className="text-container">{userIdList.length}명</span>
          </P.PlanInfoLayout>
        )}

        {/* 접속 중인 사용자 */}
        <ConnectedUsers userIdList={userIdList} />
      </div>
      <div className="button-container">
<<<<<<< HEAD
        <P.InviteBtn onClick={handleUrl}>
          <LinkIcon/>
          <span className='text'>초대링크 복사</span> 
        </P.InviteBtn>
        <P.CompleteBtn onClick={handleFinishTrip}>
          여행 완료
        </P.CompleteBtn>
=======
        <P.InviteBtn>
          <LinkIcon />
          <span className="text">초대링크 복사</span>
        </P.InviteBtn>
        <P.CompleteBtn onClick={handleDoneClick}>여행 완료</P.CompleteBtn>
>>>>>>> review
      </div>
    </P.HeaderWrapper>
  );
}

export default Planheader;
