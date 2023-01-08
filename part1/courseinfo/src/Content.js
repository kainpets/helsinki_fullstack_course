import React from "react";

const Content = (props) => {
  return (
    <>
    {props.course.map(course => <p>{course.name} {course.exercises}</p>)}
    </>
  );
};

export default Content;
