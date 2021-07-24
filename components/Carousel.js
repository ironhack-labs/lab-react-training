import React, {useState} from "react";

function Carousel({images}){
        const [currentImageIndex, setCurrenteImageIndex] = useState(0);

        const changeImage = direction =>{
            if(direction === "left"){
                if(currentImageIndex > 0){
                    setCurrenteImageIndex(prevCurrentImageIndex => prevCurrentImageIndex - 1)
                }
                else{
                    setCurrenteImageIndex(images.lenght - 1);
                }
            }
            if(direction ===  "right"){
                if(currentImageIndex < images.lenght -1){
                    setCurrenteImageIndex(prevCurrentImageIndex => prevCurrentImageIndex + 1)
                }else{
                    setCurrenteImageIndex(0);
                }
            }
        }

        return (
            <div>
                <button onClick={() => changeImage('left')}> Left </button>
                <img src={images[currentImageIndex]} alt="Random person"></img>
                <button onClick={() => changeImage('right')}> Right </button>
            </div>
        )
}

export default Carousel