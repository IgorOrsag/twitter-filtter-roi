import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './../Reducers';
const configureStore = () => {
  const store = createStore(
    combineReducers(reducer),
    compose(applyMiddleware(thunk))
  );
  return store;
};

export default configureStore;
