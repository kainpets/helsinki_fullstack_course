import React from 'react'

const Part = (props) => {
  const {parts, exercises} = props;

  return (
    <p>
      {parts} {exercises}
    </p>
  )
}

export default Part