//Action Type
const ADD_USER = 'user/ADD_USER';
const DELETE_USER = 'user/DELETE_USER';
const AUTH_USER = 'user/AUTH_USER';
const REVISE_USER = 'user/REVISE_USER';

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

//유저 정보 조회 
export const authUser = (data) => {
  return {
    type: AUTH_USER,
    user: data,
  };
};
export const reviseUser = (data)=>{
  return {
    type: REVISE_USER,
    user: data,
  };
}

const initialState = {
  userIdx: null,
  userProfile: null,
  nickname: null
};

// Initial State
export default function User(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, ...action.user };
    case DELETE_USER:
      return { ...state, ...initialState };
    case AUTH_USER:
      return {...state, ...action.user};
    case REVISE_USER:
      return{...state, ...action.user};
    default:
      return state;
  }
}
