import { TOGGLE_STATS } from '../Actions/Constants';

const initialState = {
  toggleStats: false
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STATS:
      return { ...state, toggleStats: action.payload };
    default:
      return state;
  }
};
