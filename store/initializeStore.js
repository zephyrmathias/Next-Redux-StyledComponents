import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initializeStore = (initialState = {}) => {
  const middlewares = [thunk];
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares),
  );
  return store;
};

export default initializeStore;
