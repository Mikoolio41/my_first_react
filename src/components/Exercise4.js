import React from "react";
import "./Exercise4.css";

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

function Exercise4() {
  return (
    <div>
      <h1 style={style_header}>something</h1>
      <p className="para">This is a paragraph</p>
      <a href="#">This is a link</a>
      <form>
        <h2>This is a form:</h2>
        <p className="para">Enter your name:</p>
        {/* <input type="text"></input>
        <input type="submit">submit</input> */}
        <p className="para">Here is an image:</p>
        <img
          src="https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day1/Exercise%20XP%20Gold/XP%20Gold.png"
          alt=""
        ></img>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </form>
    </div>
  );
}

export default Exercise4;
