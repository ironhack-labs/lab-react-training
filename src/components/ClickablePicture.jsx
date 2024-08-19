import { useState } from 'react';

/* eslint-disable react/prop-types */
function ClickablePicture(props) {
    const { img, imgClicked } = props
    const imgUrl = `../../public/${img}`;
    const imgClickedUrl = `../../public/${imgClicked}`;
    const [ isClicked, setIsClicked ] = useState(false);

    function toggleImage() {
        setIsClicked(!isClicked);
    }

    return (
        <div onClick={toggleImage}>
            <img src={isClicked ? imgClickedUrl : imgUrl} id="image" width="200px"></img>
        </div>
    )
}

export default ClickablePicture