import React from "react";

function Carousel({imgs}){
  const [img, setImg] = React.useState(0)

  const RIGHT = +1
  const LEFT = -1


  const handleChange = (direction) =>{
    const change = direction === RIGHT ? RIGHT : LEFT;
    let actualIdx = img + change
    let newIdx;
    if (actualIdx >= imgs.length) {
      newIdx = 0;
    } else if (actualIdx < 0) {
      newIdx = imgs.length - 1
    } else {
      newIdx = actualIdx;
    }
    setImg(newIdx)
  }

  return(
    <div className="slideshow-container">
      <div>
        <img style={{width:"100%", height:"auto"}} src={imgs[img]} alt="fondo"></img>
      </div>
      <button onClick={()=>handleChange(LEFT)} className="prev">&#10094;</button>
      <button onClick={()=>handleChange(RIGHT)} className="next" >&#10095;</button>
    </div>
  )

}

export default Carousel