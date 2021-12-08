import React from "react";

function ItemDesc({ name, description }) {
  return (
    <div>
      <h3> Title : {name}</h3>
      <p> Description :{description}</p>
    </div>
  );
}

export default ItemDesc;
