import { combineReducers } from 'redux';
import reactions from "./reactions.jsx"

const appReducer = combineReducers({
  reactions,
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;