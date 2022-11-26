import React from "react";

function Students(props) {
  return props.students.map((student) => (
    <ul key={student.id}>
      <li>{student.name}</li>
      <li>{student.age}</li>
      <img src={student.img} alt=""></img>
    </ul>
  ));
}

export default Students;
