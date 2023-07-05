import React, {useState} from 'react'

export default function ClickablePicture( {img, imgClicked} ) {
const [isClicked, setIsClicked] = useState(false); // this is used to determine if the picture is clicked + what to set it to once clicked
 
const clickHandler= () => {
setIsClicked(!isClicked); // this is used to determine if the picture is clicked 
}

  return (
    <img className='maxene' src= {isClicked ? imgClicked: img} alt="Clicked" onClick={clickHandler}/> 
    // the ternary statement above states that if isClicked is false  img src is :img
    // if isClicked is true then img src is imgClicked
  )
}
