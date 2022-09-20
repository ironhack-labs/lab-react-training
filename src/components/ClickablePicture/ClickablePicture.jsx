import "./ClickablePicture.css"
import { useState } from 'react';


function ClickablePicture(props) {
    const [max, setMax] = useState(props.img);

    const changeImg = () => {
        if (max === props.img) {
            setMax(props.imgClicked)
        }
        else setMax(props.img)

    }

    return (<>
        <img onClick={changeImg} className="maxImg" src={max} />
    </>

    )
}

export default ClickablePicture;