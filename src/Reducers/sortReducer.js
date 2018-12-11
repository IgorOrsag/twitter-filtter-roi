import { SORT } from '../Actions/Constants';
import { SET_SORT_TYPE } from '../Actions/Constants';

const initialState = {
  sortType: SORT.DATE_DESC
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_TYPE:
      return { ...state, sortType: action.payload };
    default:
      return state;
  }
};
