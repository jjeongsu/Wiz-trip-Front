import { UseSelector } from 'react-redux';
import { createDatesArr } from '../utils/createDaysArr';
import { clockTimes } from '../utils/createSelectTimes';
//Action Type
const ADD_DAILY_PLAN = 'plan/ADD_DAILY_PLAN';
const DELETE_DAILY_PLAN = 'plan/DELETE_DAILY_PLAN';
const UPDATE_DAILY_PLAN = 'plan/UPDATE_DAILY_PLAN';

const SET_DAILY_PLAN = 'plan/SET_DAILY_PLAN';
//plan페이지에서 새로운 스케쥴 작성 -> 백에게 보낸뒤, 각 여행별 idx와 세부 스케쥴에 해당하는 idx를 반환받음
const initialState = [];

export const setDailyPlan = (data, datesArray) => {
  const frontDailyPlan = [];

  Array.from(data).forEach((plan, i) => {
    //data는 유사배열
    const today = plan.startTime?.slice(0, 10);
    const todayIndex = datesArray.findIndex((date) => date.date_full === today);
    const trim_startTime = plan.startTime?.slice(11);
    const trim_endTime = plan.finishTime?.slice(11);
    const startIndex = clockTimes.findIndex(
      (time) => time.text === trim_startTime,
    );
    const endIndex = clockTimes.findIndex((time) => time.text == trim_endTime);
    const newPlan = {
      address: plan.address.roadNameAddress,
      tripId: plan.tripId,
      planId: plan.planId,
      content: plan.content,
      category: plan.category,
      userId: plan.userId,
      startTime: plan.startTime,
      finishTime: plan.finishTime,
      startIndex: startIndex,
      endIndex: endIndex,
      dayIndex: todayIndex,
    };
    console.log('newPlan', newPlan);
    frontDailyPlan.push(newPlan);
  });
  console.log(frontDailyPlan);
  return {
    type: SET_DAILY_PLAN,
    payload: frontDailyPlan,
  };
};
export const deleteDailyPlan = (planIdx, day) => {
  return {
    type: DELETE_DAILY_PLAN,
    day,
    planIdx,
  };
};

export default function Plan(state = initialState, action) {
  switch (action.type) {
    case SET_DAILY_PLAN: {
      return [...action.payload];
    }
    default:
      return state;
  }
}
