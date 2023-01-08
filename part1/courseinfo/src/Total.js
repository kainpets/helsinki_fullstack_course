import React from "react";

const Total = (props) => {
  const coursesArr = props.course;
  return (
    <p>
      Number of exercises
      {coursesArr[0].exercises +
        coursesArr[1].exercises +
        coursesArr[2].exercises}
    </p>
  );
};

export default Total;
