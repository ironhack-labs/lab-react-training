import { useState } from 'react';

function ClickablePicture ({img, imgClicked}) {

    const [image, setImage] = useState(img);

    const changeImg = () => {
        if(image === img){
            setImage(imgClicked)
        }else {
            setImage(img);
        }
    }

    return(
        <div>
            <img src={image} onClick={changeImg} style={{width:100, height:100}} alt='foto'></img>
        </div>
    );
};

export default ClickablePicture;