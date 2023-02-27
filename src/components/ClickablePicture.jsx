import { useState } from 'react';

function ClickablePicture(props) {
    const [image, setImage] = useState('maxence.png')

    const clickImage = () => {
        if (props.img === image) {
            setImage(props.imgClicked)
        } else if (props.img !== image) {
            setImage(props.img)
        }
    }

    return (
        <div>

            <img src={image} onClick={clickImage} alt="profile" />

        </div>
    )
}

export default ClickablePicture;