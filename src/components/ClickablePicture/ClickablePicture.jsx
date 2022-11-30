import './ClickablePicture.css';
import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {

    const [imgToggled, setImgToggled] = useState(true)

    const toggleImage = () => setImgToggled(!imgToggled)

    return (
        <div className="picture">
            {imgToggled ? (
                <img src={img} onClick={toggleImage} />
            ) : (
                <img src={imgClicked} onClick={toggleImage} />
            )}
        </div>
    );
}
export default ClickablePicture