//jshint esversion:8
import { useState } from "react";

export const Carousel = ({images}) => {

    let [image, setImage] = useState(images[0]);

    console.log('the index of actual image =>',images.indexOf(image));

    const getImageR = () => {

        if(images.indexOf(image) < images.length - 1 ) {

            return setImage(image = images[images.indexOf(image) + 1]);
        }
    };
    const getImageL = () => {

        if(images.indexOf(image) > 0) {

            return setImage(image = images[images.indexOf(image) - 1]);
        } 
    };
    return (

        <div className="Carousel">
            <div>
                <img src={image} alt="Carousel" />
            </div>
            <button onClick={getImageL}>Left</button> <button onClick={getImageR}>Right</button>
        </div>
    );
};