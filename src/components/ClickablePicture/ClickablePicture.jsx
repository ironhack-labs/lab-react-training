import { useState } from "react";
import maxenceGlasses from '../../assets/images/maxence-glasses.png'
import maxence from '../../assets/images/maxence.png'

function ClickablePicture() {

    const [status, setStatus] = useState(false)

    const changeImg = () => setStatus(!status)

    return (
        <figure onClick={changeImg}>
            <img src={status ? maxenceGlasses : maxence} alt="" />
        </figure>
    );
}

export default ClickablePicture;
