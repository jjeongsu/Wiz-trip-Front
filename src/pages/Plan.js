import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Planheader from '../components/Plan/Planheader';
import PlanLayout from '../components/Plan/PlanLayout';
import PlanModal from '../components/Plan/PlanModal';
import PlanBoard from '../components/Plan/PlanBoard';
import Memo from '../components/Plan/Memo';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initSchedule } from '../services/schedule';
import dayjs from 'dayjs';
import { getTrip } from '../apis/api/trip';
import { getAllPlans } from '../apis/api/plan';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createDatesArr } from '../utils/createDaysArr';
import KakaoMap from '../components/Plan/KakaoMap';

function Plan() {
  const tripId = useParams().tripId;
  console.log(tripId);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [defaultDate, setDefaultDate] = useState(null);
  const [currentSpot, setCurrentSpot] = useState(''); //focus된 card의 도로명주소

  const [datesArr, setDatesArr] = useState([]);
  const [plans, setPlans] = useState([]);

  const dispatch = useDispatch();
  const { isLoading, data: tripData } = useQuery('getTrip', () =>
    getTrip(tripId),
  );
  const { isLoadingPlan, data: planData } = useQuery('getAllPlan', () =>
    getAllPlans(tripId),
  );
  useEffect(() => {
    //trip 정보 세팅
    if (tripData) {
      const { destination, startDate, finishDate } = tripData;
      const schedule = {
        place: destination,
        startDate: dayjs(startDate).format('YYYY-MM-DD'),
        endDate: dayjs(finishDate).format('YYYY-MM-DD'),
      };
      dispatch(initSchedule(schedule));
      //trip 내 모든 날짜 정보 array 만들기
      const newDatesArray = createDatesArr({ ...schedule });
      setDatesArr(newDatesArray);
    }
  }, [tripData]);

  console.log('datesArr : ', datesArr);
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

  if (isLoading) {
    return <div>loading....</div>;
  }
  return (
    <Layout fullWidth={true}>
      <Planheader userIdList={tripData.userIdList} />
      <PlanLayout>
        <PlanBoard
          days={datesArr}
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
          days={datesArr}
          setPlans={setPlans}
          tripId={tripId}
        />
      </PlanLayout>
    </Layout>
  );
}
export default Plan;
