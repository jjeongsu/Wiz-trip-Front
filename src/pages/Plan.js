import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Planheader from '../components/Plan/Planheader';
import PlanLayout from '../components/Plan/PlanLayout';
import PlanModal from '../components/Plan/PlanModal';
import PlanBoard from '../components/Plan/PlanBoard';
import Memo from '../components/Plan/Memo';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { initSchedule } from '../services/schedule';
import { getCookie } from '../utils/cookies';
import dayjs from 'dayjs';
import { getTrip } from '../apis/api/trip';

//planBoard 프로토타입용 #이후삭제
const initialDays = ['12월 13일', '12월 14일', '12월 15일']; //추가하면

function Plan() {
  const tripId = useParams().tripId;
  console.log(tripId);
  const [days, setDays] = useState(initialDays);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [defaultDate, setDefaultDate] = useState(null);
  const [currentSpot, setCurrentSpot] = useState('');

  const [plans, setPlans] = useState([]);

  const dispatch = useDispatch();

  useEffect(()=>{
    //trip 정보 세팅 
    async function fetchTripData() {

      const res = await getTrip(tripId);
      console.log(res.data);

      let schedule =  {
        place: res.data.destination,
        startDate: dayjs(res.data.startDate).format('YYYY-MM-DD'),
        endDate: dayjs(res.data.finishDate).format('YYYY-MM-DD')}
      dispatch(initSchedule(schedule));
  
    }
    fetchTripData();

  },[])
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
  return (
    <Layout fullWidth={true}>
      <Planheader />
      <PlanLayout>
        <PlanBoard
          days={initialDays}
          setIsOpenModal={setIsOpenModal}
          setDefaultDate={setDefaultDate}
          plans={plans}
        />
        <div style={{ backgroundColor: 'powderblue' }}> MAPS</div>
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
