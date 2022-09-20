import { useState } from 'react';


const ClickablePicture = ({img: Max, imgClicked: MaxGlasses}) => {
    
    const [image, setImage] = useState(Max)
    
    const printImage = () => {
       image === Max ? setImage(MaxGlasses) : setImage(Max); 
       }

    return (
        <div>
        <img onClick={printImage} src={image} alt="facePic"/>
        </div>
    )
}

export default ClickablePicture