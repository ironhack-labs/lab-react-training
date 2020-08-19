import React, {useState} from 'react'

export default function ClickablePicture(props) {

    const [clicked, setClicked] = useState(false);

    return (
        <div>
            {clicked && <img onClick={() => setClicked(!clicked)} src={props.imgClicked} alt=""/>}
            {!clicked && <img onClick={() => setClicked(!clicked)} src={props.img} alt=""/>}
        </div>
    )
}
