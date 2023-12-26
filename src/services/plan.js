//Action Type
const ADD_DAILY_PLAN = 'plan/ADD_DAILY_PLAN';
const DELETE_DAILY_PLAN = 'plan/DELETE_DAILY_PLAN';
const UPDATE_DAILY_PLAN = 'plan/UPDATE_DAILY_PLAN';
//plan페이지에서 새로운 스케쥴 작성 -> 백에게 보낸뒤, 각 여행별 idx와 세부 스케쥴에 해당하는 idx를 반환받음
const initialState = {
  '2022-12-30': [
    {
      start: { hour: 1, minute: 30 },
      end: { hour: 1, minute: 45 },
      category: 'FOOD',
      name: '첫째날점심',
      content: '불고기가 맛있는 곳',
      address: '제주특별자치도 제주시 원도형로 42',
      userIdx: 1,
      planIdx: 1,
    },
  ],
};
export const addDailyPlan = (data) => {
  const day = data.day; //계획이 추가될 날짜
  const new_plan = {
    start: { hour: data.startTime.hour, minute: data.startTime.minute },
    end: { hour: data.finishTime.hour, minute: data.finishTime.minute },
    category: data.category,
    name: data.name,
    content: data.content,
    address: data.address ? data.address : null,
    userIdx: data.userId,
    planIdx: data.planIdx,
  };
  return {
    type: ADD_DAILY_PLAN,
    day,
    new_plan,
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
    case ADD_DAILY_PLAN: {
      const { day, new_plan } = action;
      if (state.day == undefined) {
        // 새로운 날짜의 새로운 값을 추가
        const newState = {
          ...state,
          day: [action.new_plan],
        };
        return newState;
      } else {
        const newState = {
          ...state,
          day: [...state[day], new_plan], // 기존 날짜의 새로운 값 배열에 추가
        };
        return newState;
      }
    }
    case DELETE_DAILY_PLAN: {
      const { day, planIdx } = action;
      const newState = {
        ...state,
        day: state[day].filter((item) => item.planIdx !== planIdx), // planIdx가 일치하지 않는 요소만 필터링하여 새로운 배열 생성
      };
      return newState;
    }
    case UPDATE_DAILY_PLAN:
      return {};
    default:
      return state;
  }
}
