import React from "react";
import UserFavoriteColors from "./UserFavoriteColors";

const User = (props) => {
  const { first_name, last_name, fav_animals } = props.users;
  return (
    <div>
      <h3>{first_name}</h3>
      <h3>{last_name}</h3>
      <UserFavoriteColors favAnimals={fav_animals} />
    </div>
  );
};

export default User;
