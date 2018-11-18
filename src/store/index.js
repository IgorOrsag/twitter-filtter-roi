import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { tweetReducer } from '../Reducers/tweetReducer';
const configureStore = () => {
  const store = createStore(tweetReducer, compose(applyMiddleware(thunk)));
  return store;
};

export default configureStore;
