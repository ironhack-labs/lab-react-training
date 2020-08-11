import React, { useState } from 'react'

const ClickablePicture = (props) => {
    let noGlassesImg = props.img;
    let glassesImg = props.imgClicked;


    const [stateImage, setStateImage] = useState(noGlassesImg);
    const changeHandler = () => {
        let newImg = stateImage;
        if (newImg === noGlassesImg){
            newImg = glassesImg;
            setStateImage(newImg)
        } else {
            newImg = noGlassesImg;
            setStateImage(newImg)
        }
    };
    return <img src={stateImage} alt="" onClick={changeHandler} />
}

export default ClickablePicture;