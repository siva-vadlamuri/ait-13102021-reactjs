import { useReducer } from "react";
import { ACTION_TYPES } from "./ActionType";
import { decrementTheCount, incrementTheCount } from "./IncrementAction";

function ReducerHook() {
  const reducer = (currentState, action) => {
    switch (action.type) {
      case ACTION_TYPES.INCREMENT:
        console.log(currentState);
        return { count: currentState.count + action.payload };
      case ACTION_TYPES.DECREMENT:
        return { count: currentState.count - action.payload };
      default:
        return currentState;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>count : {state.count}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(incrementTheCount(10));
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(decrementTheCount(10));
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default ReducerHook;
