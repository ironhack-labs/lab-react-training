import './ClickablePicture.css'
import { useState } from 'react';

const ClickablePicture = ({ img: Max, imgClicked: MaxFumao }) => {

    const [image, setImage] = useState(Max);

    // changeImg ? selectImg = img : selectImg = imgClicked
    const changeImg = () => {
        image === Max ? setImage(MaxFumao) : setImage(Max)
    }

    return (
        <img onClick={changeImg} src={image} alt="manolo" />
    )
}

export default ClickablePicture