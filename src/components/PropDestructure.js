import React from "react";

function PropDestructure(props) {
  const { name, city, age } = props;
  return (
    <div className="divvi">
      {name} is from {city}, and he is {age} years old
    </div>
  );
}

export default PropDestructure;
