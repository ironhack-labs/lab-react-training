import React, { useState } from 'react';

function ClickablePicture(props) {
const [img, setImg] = useState(props.img);

const handleClick = () => {
    setImg(img === props.img ? props.imgClicked : props.img);
};

return (
    <img src={img} alt="picture" onClick={handleClick} />
);
}

export default ClickablePicture;
