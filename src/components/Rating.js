import React from 'react'

const Rating = ({children}) => {
  let roundedNumber = Math.round(children);
  let display = "";

  switch (roundedNumber){
    case 0:
        display = "☆☆☆☆☆";
        break;
    case 1: 
        display = "★☆☆☆☆";
        break;
    case 2: 
        display = "★★☆☆☆";
        break;
    case 3: 
        display = "★★★☆☆";
        break;
    case 4: 
        display = "★★★★☆";
        break;
    case 5: 
        display = "★★★★★";
        break;
    default:
        break;
  }

  return (
    <div>
        <p>{display}</p>
    </div>
  )
}

export default Rating