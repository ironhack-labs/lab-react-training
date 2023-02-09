import { useState } from 'react';
import './ClickablePicture.css'

const ClickablePicture = ({img, imgClicked, ...restProps}) => {
    const [clickImage, setClickImage] = useState(img)
    const clickImg = (imag) => {
        imag === imgClicked ? setClickImage(img) :setClickImage(imgClicked);   
    }
    return(
        <div className="clickPicture">
            <img src={clickImage} onClick={e => clickImg(clickImage)} alt="imagen" />
        </div>
    );
};

export default ClickablePicture;