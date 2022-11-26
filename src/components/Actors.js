import React from "react";

function Actors(props) {
  return props.actors.map((actor) => (
    <ul key={actor.id}>
      <li style={{ color: "cyan" }}>{actor.name}</li>
      <li style={{ color: "cyan" }}>{actor.lname}</li>
      <img
        style={{ width: "250px", height: "250px" }}
        src={actor.img}
        alt=""
      ></img>
    </ul>
  ));
}

export default Actors;
