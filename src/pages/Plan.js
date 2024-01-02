import React from 'react';
import Layout from '../components/Layout';
import Planheader from '../components/Plan/Planheader';
import PlanLayout from '../components/Plan/PlanLayout';
import PlanModal from '../components/Plan/PlanModal';
import PlanBoard from '../components/Plan/PlanBoard';
import Memo from '../components/Plan/Memo';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createDatesArr } from '../utils/createDaysArr';

//planBoard 프로토타입용 #이후삭제
const initialDays = ['12월 13일', '12월 14일', '12월 15일']; //추가하면

function Plan() {
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
