//Actions
export const ADD_MEMO = "ADD_MEMO";
export const DELETE_MEMO = "DELETE_MEMO";
export const INIT_MEMO = "INIT_MEMO"

// Action Creators
export function addMemo(data) {
    return {
      type: ADD_MEMO,
      payload: data,
    };
  }
  
export function deleteMemo(id) {
    return {
        type: DELETE_MEMO,
        payload: id,
    };
}

export function initMemo(data) {
    return {
        type: INIT_MEMO,
        payload: data,
    };
}



//Reducer
const initialState = [];
  
export default function planReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MEMO:{
            let newMemos = [...state, action.payload];
            return newMemos;
        }
        case DELETE_MEMO:
            return state.filter(memo => memo.memoId !== action.payload);
        case INIT_MEMO:
             return action.payload;
        default:
            return state;
    }
}
  