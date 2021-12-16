import React from "react";
import GrandChild from "./GrandChild";

function Child() {
  return (
    <div>
      <h2>Child</h2>
      <GrandChild />
    </div>
  );
}

export default Child;
