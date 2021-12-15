import React, { useState } from "react";

// Rules Of Hooks
// Hooks can be used only in functional component
// Never call the hooks condtional or nest function
// Hooks has to be call on the top level

function Counter() {
  const [count, setCount] = useState(0);

  //   useEffect is combination of componentDidMount,componentDidUpdate,componentWillUnmount

  return (
    <div className="container">
      <p> Count :{count}</p>
      <button
        className="btn btn-primary ml-3"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
