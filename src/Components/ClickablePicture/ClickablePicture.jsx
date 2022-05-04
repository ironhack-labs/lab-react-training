import './ClickablePicture.css'
import { useState } from 'react'



const ClickablePicture = ({ img, imgClicked }) => {


    const [pictureValue, setPicture] = useState(true);

    function handleClick() {

        setPicture({ toggle: !pictureValue.toggle });
    }


    return (

        <img onClick={handleClick} src={pictureValue.toggle ? imgClicked : img} />

    );
}

export default ClickablePicture