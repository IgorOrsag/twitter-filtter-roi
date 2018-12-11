import * as ACTIONS from './Constants';

export const setSortType = sortType => dispatch => {
  return dispatch({
    type: ACTIONS.SET_SORT_TYPE,
    payload: sortType
  });
};
