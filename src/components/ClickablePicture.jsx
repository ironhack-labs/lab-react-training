import { useState } from 'react';

const ClickablePicture = (props) => {
    const [visible, setVisible] = useState(true)

    const viewImage = () => {
        return setVisible(!visible)
    }

    return (
        <div className="clickableImg" onClick={viewImage}>
            {visible ? <img src={props.img} alt="noGlasses" /> : <img src={props.imgClicked} alt="Glasses" />}
        </div>
    )
}

export default ClickablePicture
