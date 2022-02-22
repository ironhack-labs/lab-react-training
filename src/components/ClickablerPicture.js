import { useState } from 'react';

function ClickablePicture(props) {
    const [clicked, setClicked] = useState(false)
    const clickHandler = () => {
        setClicked((clicked) => !clicked)
    }
    return (
        <img onClick={clickHandler} src={clicked ? props.imgClicked : props.img} alt="user" />)
}

export default ClickablePicture;

