//Action Type
const ADD_USER = 'user/ADD_USER';
const DELETE_USER = 'user/DELETE_USER';

//Action Creater

export const addUser = (data) => {
  return {
    type: ADD_USER,
    user: data,
  };
};

//유저정보 삭제 : 로그아웃시
export const deleteUser = (data) => {
  return {
    type: DELETE_USER,
  };
};

const initialState = {
  userIdx: null,
  userProfile: null,
};
// Initial State
export default function User(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, ...action.user };
    case DELETE_USER:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
