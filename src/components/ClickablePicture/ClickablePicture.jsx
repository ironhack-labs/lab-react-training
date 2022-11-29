import imageOriginal from '../../assets/images/maxence.png';
import imageClicked from '../../assets/images/maxence-glasses.png';
import { useState } from 'react';

const ClickablePicture = () => {

    const [image, setImage] = useState(imageOriginal);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setImage(click ? imageOriginal : imageClicked);
        if (click) { setClick(false); } else { setClick(true); }
    }

    return (
        <div>
            <img style={{ width: 200 }} onClick={handleClick} src={image} alt="" />
        </div>
    );
}

export default ClickablePicture;