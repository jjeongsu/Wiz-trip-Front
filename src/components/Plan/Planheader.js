import React, { useState, useEffect } from 'react';
import * as P from '../../styles/planheader.style';
import UpdatePlanInfo from './UpdatePlanInfo';
import ConnectedUsers from './ConnectedUsers';
import { useDispatch, useSelector } from 'react-redux';
import { initSchedule } from '../../services/schedule';
import dayjs from 'dayjs';
import LinkIcon from '../../assets/link-icon';
function Planheader({userIdList}) {
  const planinfo = useSelector((state) => state.Schedule);
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
            <span className="text-container">{userIdList.length}명</span>
          </P.PlanInfoLayout>
        )}

        {/* 접속 중인 사용자 */}
        <ConnectedUsers userIdList={userIdList}/>
      </div>
      <div className="button-container">
        <P.InviteBtn>
          <LinkIcon/>
          <span className='text'>초대링크 복사</span> 
        </P.InviteBtn>
        <P.CompleteBtn>여행 완료</P.CompleteBtn>
      </div>
    </P.HeaderWrapper>
  );
}

export default Planheader;