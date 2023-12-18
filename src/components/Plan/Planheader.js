import React, { useState, useEffect } from 'react';
import * as P from '../../styles/planheader.style';
import UpdatePlanInfo from './UpdatePlanInfo';
import ConnectedUsers from './ConnectedUsers';
import { useDispatch, useSelector } from 'react-redux';
import { initSchedule } from '../../services/schedule';
function Planheader() {
  const planinfo = useSelector((state) => state.Schedule);
  const [userNum, setUserNum] = useState(3);
  const [updateform, setUpdateForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    //서버에서 계획 개요 정보 가져오기 코드 추가 
    let data =  {
      place: "부산 기장군",
      startDate: '2024-01-01',
      endDate: '2024-01-04'}
    dispatch(initSchedule(data));
  },[])

  const formatDate = (date) => {
    // 월과 일만 표시하도록 설정
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ko-KR', options); // 한국어로 날짜 표시
  };

  const startDate = formatDate(new Date(planinfo.startDate));
  const endDate = formatDate(new Date(planinfo.endDate));

  return (
    <P.HeaderWrapper>
      <div className="left-container">
        {/* 여행개요 */}
        {updateform ? (
          <UpdatePlanInfo
            setUpdateForm={setUpdateForm}
          />
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
            <span className="text-container">{userNum}명</span>
          </P.PlanInfoLayout>
        )}

        {/* 접속 중인 사용자 */}
        <ConnectedUsers />
      </div>
      <div className="button-container">
        <P.InviteBtn>초대 하기</P.InviteBtn>
        <P.CompleteBtn>여행 완료</P.CompleteBtn>
      </div>
    </P.HeaderWrapper>
  );
}

export default Planheader;