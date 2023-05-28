import { useState } from "react";

export function Carousel({images}){

   const [image, setImage] = useState(0)

   const rightImage = () => {
    return image === images.length - 1 ? setImage(0) : setImage(image + 1); 
   }

   const leftImage = () => {
    return image <= 0 ? setImage(images.length - 1) : setImage(image - 1);
   }

  return (
   <div className="d-flex align-items-end">
    <button onClick={leftImage}>Left</button>
    <img src={images[image]} alt="" />
    <button onClick={rightImage} >Right</button>
   </div>
  );
}