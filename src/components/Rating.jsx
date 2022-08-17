import React from 'react'

function Rating(props) {
    const {children} = props;
    const num = Math.floor(children);

  return (
    <div>
        {"★".repeat(num) + "☆".repeat(5-num)}
    </div>
  )
}

export default Rating