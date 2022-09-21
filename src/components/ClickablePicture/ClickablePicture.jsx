import { useState } from 'react';

const ClickablePicture = (props) => {

    const [image, setImage] = useState(props.img)
    const changeImage = () => {

        image === props.img ? setImage(props.imgClicked) : setImage(props.img)
    }
    return (
        < img onClick={changeImage} src={image} alt="imagenFumao" />
    )
}

export default ClickablePicture;















