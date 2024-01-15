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
import { setDailyPlan } from '../services/plan';
function Plan() {
  const tripId = useParams().tripId;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [defaultDate, setDefaultDate] = useState(null);
  const [currentSpot, setCurrentSpot] = useState(''); //focus된 card의 도로명주소
  const [plans, setPlans] = useState([]);
  const [datesArr, setDatesArr] = useState([]);

  const trip = useSelector((state) => state.trip);
  const dispatch = useDispatch();

  const {
    isLoading: isLoadingTrip,
    isSuccess: isTripSuccess,
    data: tripData,
  } = useQuery('getTrip', () => getTrip(tripId));
  const {
    isLoading: isLoadingPlan,
    isSuccess,
    data: planData,
  } = useQuery(['getAllPlan'], () => getAllPlans(tripId));
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
      // const newDatesArray = createDatesArr({ ...schedule });
      //setDatesArr(newDatesArray);
    }
  }, [tripData]);

  useEffect(() => {
    if (isSuccess) {
      setPlans(Array.from(planData?.list));
    }
  }, [planData, isSuccess]);

  if (isLoadingTrip && isLoadingPlan) {
    return <div>loading....</div>;
  } else if (isSuccess) {
    return (
      <Layout fullWidth={true}>
        <Planheader userIdList={tripData?.userIdList} />
        <PlanLayout>
          <PlanBoard
            days={datesArr}
            setIsOpenModal={setIsOpenModal}
            setDefaultDate={setDefaultDate}
            setCurrentSpot={setCurrentSpot}
            plans={plans}
            tripId={tripId}
          />
          <KakaoMap address={currentSpot} />
          <Memo />
          <PlanModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            defaultDate={defaultDate}
            days={datesArr}
            tripId={tripId}
          />
        </PlanLayout>
      </Layout>
    );
  }
}
export default Plan;
