import React from 'react'

function Rating(props) {
    const {children} = props;
 const rounded = Math.round(children);
  return (
    <div>
    {"★".repeat(rounded) + "☆".repeat(5 - rounded)}

    
{/* {lang === "de" &&  <p>"Hallo" {children} </p>} */}

    </div>
  )
}

export default Rating