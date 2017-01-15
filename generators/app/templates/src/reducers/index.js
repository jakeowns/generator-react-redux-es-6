import { combineReducers } from 'redux';
import count from './countReducer';

export const initStoreState = {
  count: 0
};

const rootReducer = combineReducers({
  count
});

export default rootReducer;