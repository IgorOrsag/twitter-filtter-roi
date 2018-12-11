import { SET_ERROR } from '../Actions/Constants';

const initialState = {
  message: null
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
