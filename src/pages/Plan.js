import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Planheader from '../components/Plan/Planheader';
import PlanLayout from '../components/Plan/PlanLayout';
import PlanModal from '../components/Plan/PlanModal';
import PlanBoard from '../components/Plan/PlanBoard';
import Memo from '../components/Plan/Memo';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { initSchedule } from '../services/schedule';
import dayjs from 'dayjs';
import { getTrip } from '../apis/api/trip';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createDatesArr } from '../utils/createDaysArr';
import KakaoMap from '../components/Plan/KakaoMap';

//planBoard 프로토타입용 #이후삭제
const initialDays = ['12월 13일', '12월 14일', '12월 15일']; //추가하면

function Plan() {
  const tripId = useParams().tripId;
  console.log(tripId);
  const [days, setDays] = useState(initialDays);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [defaultDate, setDefaultDate] = useState(null);
  const [currentSpot, setCurrentSpot] = useState('');

  //스케쥴 정보 가져와서 배열로 만들기
  const schedules = useSelector((state) => state.schedule);
  console.log('schedules', schedules);
  //const datesArr = createDatesArr({ ...schedules });
  const [datesArr, setDatesArr] = useState([]);
  const [plans, setPlans] = useState([]);

  const dispatch = useDispatch();

  const { isLoading, data: tripData } = useQuery('getTrip', () => getTrip(tripId));

  useEffect(()=>{
    //trip 정보 세팅 
    if (tripData) {
      const { destination, startDate, finishDate } = tripData;
      const schedule = {
        place: destination,
        startDate: dayjs(startDate).format('YYYY-MM-DD'),
        endDate: dayjs(finishDate).format('YYYY-MM-DD'),
      };
      dispatch(initSchedule(schedule));
    }

  },[tripData])
  /**
   * plan예시
   * {
   *    day :
   *    startIndex :
   *    endIndex :
   *    title :
   * }
   */
  console.log('plan', plans);

  if(isLoading){ return <div>loading....</div>}
  return (
    <Layout fullWidth={true}>
      <Planheader userIdList={tripData.userIdList}/>
      <PlanLayout>
        <PlanBoard
          days={initialDays}
          setIsOpenModal={setIsOpenModal}
          setDefaultDate={setDefaultDate}
          plans={plans}
        />
        <KakaoMap />
        <Memo />
        <PlanModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          defaultDate={defaultDate}
          days={initialDays}
          setPlans={setPlans}
        />
      </PlanLayout>
    </Layout>
  );
}
export default Plan;
