import '../style/ClickablePicture.css'
import React, {useState} from 'react';

function ClickablePicture
(props) {
    const [toggle, setToggle] = useState(true)
    return(
        <div>
        <span>{toggle ? <img onClick={() => setToggle(!toggle)} src={props.img} alt=""/> : <img onClick={() => setToggle(!toggle)} src={props.imgClicked} alt=""/>}</span>
        </div>
    )
}

export default ClickablePicture
;