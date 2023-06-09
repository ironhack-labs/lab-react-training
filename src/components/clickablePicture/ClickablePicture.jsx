import { useState } from 'react';


function ClickablePicture(props) {
    const [image, setImage] = useState(props.img);
    console.log(props)

    function Toggle() {
        if (image === props.img) {
            setImage(props.imgClicked)
        } else {
            setImage(props.img)
        }
    }

    return (
        <img onClick={() => Toggle()} src={image} alt="" />
    )

}

export default ClickablePicture