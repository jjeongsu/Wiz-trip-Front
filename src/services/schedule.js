//Actions
export const SET_PLACE = "SET_PLACE";
export const SET_START_DATE = "SET_START_DATE";
export const SET_END_DATE = "SET_END_DATE";
export const INIT_SCHEDULE = "INIT_SCHEDULE"

// Action Creators
export function initSchedule(data){
    return {
        type: INIT_SCHEDULE,
        payload: data
    }
}
export function setPlace(place) {
    return {
      type: SET_PLACE,
      payload: place,
    };
  }
  
export function setStartDate(date) {
    return {
        type: SET_START_DATE,
        payload: date,
    };
}

export function setEndDate(date) {
    return {
        type: SET_END_DATE,
        payload: date,
    };
}
  

//Reducer
const initialState = {
    place: "",
    startDate: "",
    endDate: "",
  };
  
export default function planReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_SCHEDULE:
            return {
                ...state, 
                ...action.payload,
            }
        case SET_PLACE:
        return {
            ...state,
            place: action.payload,
        };
        case SET_START_DATE:
        return {
            ...state,
            startDate: action.payload,
        };
        case SET_END_DATE:
        return {
            ...state,
            endDate: action.payload,
        };
        default:
        return state;
    }
}
  