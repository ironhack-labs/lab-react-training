import { useState } from "react";

function Carousel( { images } ) {
    const [imgIndex , setImgIndex ] = useState(0);

    // const goRight = (() => {
    //     let newIndexUp = images[imgIndex +1];
    //     console.log("new index up", newIndexUp)
    //     return setImgIndex(newIndexUp);
    // });

    // const goLeft = (() => {
    //     let newIndexDown = images[imgIndex -1];
    //     console.log("new index down", newIndexDown)
    //     return setImgIndex(newIndexDown);
    // });
    
    return (
      <div className="carousel-box flex-center ">
        <button onClick={() => {
            setImgIndex(imgIndex + 1);
        }}>left</button>
        <img src={images[imgIndex]} alt="photo" />
        <button onClick={() => {
            setImgIndex(imgIndex - 1);
        }}>right</button>
     
      </div>
    );
  }
  
  export default Carousel;