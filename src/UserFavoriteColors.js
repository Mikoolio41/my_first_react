import React from "react";

function UserFavoriteColors(props) {
  console.log(props);
  return props.favAnimals.map((animal) => <h3 key={animal}>{animal}</h3>);
}

export default UserFavoriteColors;
