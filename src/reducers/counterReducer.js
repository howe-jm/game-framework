import { actionTypes } from '../actions';

const initialState = {
  count: 0,
  testCount: 99,
};

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };
    case actionTypes.RESET_COUNTER:
      return { ...state, count: 0 };
    case actionTypes.CHANGE_COUNT:
      return { ...state, count: payload };
    default:
      return state;
  }
};

export default counterReducer;
