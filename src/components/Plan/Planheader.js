import React, { useState } from 'react';
import * as P from '../../styles/planheader.style';
import UpdatePlanInfo from './UpdatePlanInfo';
import ConnectedUsers from './ConnectedUsers';
function Planheader() {
  const [planinfo, setPlanInfo] = useState({
    location: '부산 기장군',
    startDate: '2023-12-12',
    endDate: '2023-12-14',
    userNum: 3,
  });

  const [updateform, setUpdateForm] = useState(false);

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
            planinfo={planinfo}
            setPlanInfo={setPlanInfo}
          />
        ) : (
          <P.PlanInfoLayout
            onClick={() => {
              setUpdateForm(true);
            }}
          >
            <span className="text-container">{planinfo.location}</span>
            <div className="vertical-line" />
            <span className="text-container">
              {startDate} ~ {endDate}
            </span>
            <div className="vertical-line" />
            <span className="text-container">{planinfo.userNum}명</span>
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
