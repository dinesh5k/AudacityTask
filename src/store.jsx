import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer.jsx.js';
import initialState from './reducers/initialState';
import thunk from 'redux-thunk';

function configureStore(state) {
  return createStore(
    rootReducer,
    state,
    applyMiddleware(thunk)
  );
}
const store = configureStore(initialState);
export default store;
