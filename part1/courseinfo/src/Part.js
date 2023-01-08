import React from 'react'

const Part = (props) => {
  console.log(props.courses.course);
  return (
    <p>{props.courses.course.name} {props.courses.course.exercises}</p>
  )
}

export default Part