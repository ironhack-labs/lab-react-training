import React from 'react'

function Rating({children}) {
    const roundedNumber = Math.round(children);
    const filled = "★".repeat(roundedNumber);
    const unfilled = "☆".repeat(5-roundedNumber)
    console.log(roundedNumber)
    return (
    <div>
    {filled}{unfilled}
    </div>
  )
}

export default Rating