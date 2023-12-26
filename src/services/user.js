//Action Type
const ADD_USER = 'user/ADD_USER';
const DELETE_USER = 'user/DELETE_USER';

//Action Creater

export const addUser = (data) => {
  return {
    type: ADD_USER,
    user: user,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};

// Initial State
const initialState = {};
export default function user(state = initialState, action) {}
