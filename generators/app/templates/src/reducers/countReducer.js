import actionTypes from '../actions/actionTypes';

const initState = 0;
const countReducer = (state = initState, action) => {
    switch(action.type) {
      case actionTypes.INCREMENT:
        return state + 1;
      case actionTypes.DECREMENT:
        return state - 1;
      default:
        return state;
    }
}

export default countReducer;
