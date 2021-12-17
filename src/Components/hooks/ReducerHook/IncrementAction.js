import { ACTION_TYPES } from "./ActionType";

export const incrementTheCount = (num) => {
  return {
    type: ACTION_TYPES.INCREMENT,
    payload: num,
  };
};
export const decrementTheCount = (num) => {
  return {
    type: ACTION_TYPES.DECREMENT,
    payload: num,
  };
};
