import React from 'react';
import Layout from '../components/Layout';
import Planheader from '../components/Plan/Planheader';
import PlanLayout from '../components/Plan/PlanLayout';
import PlanModal from '../components/Plan/PlanModal';
import PlanBoard from '../components/Plan/PlanBoard';
import { useState } from 'react';

//planBoard 프로토타입용 #이후삭제
const initialDays = ['12월 13일', '12월 14일', '12월 15일']; //추가하면

function Plan() {
  const [days, setDays] = useState(initialDays);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [defaultDate, setDefaultDate] = useState(null);
  const [currentSpot, setCurrentSpot] = useState('');

  const [plans, setPlans] = useState([]);
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
        <div style={{ backgroundColor: 'salmon' }}> MEMOS</div>
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
