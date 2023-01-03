import React from 'react'

const Total = (props) => {
  const {total} = props;

  return (
    <div>Total {total.reduce((sum, num) => sum + num, 0)}</div>
  )
}

export default Total