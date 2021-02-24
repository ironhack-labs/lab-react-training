import React from 'react'
import {useState} from 'react'

export default function ClickablePicture(props) {
    let [image, setImage] = useState (props.img)
    function lentes () {
        if(image === props.img) {
            return setImage(props.imgClicked)
        } else {
            return setImage(props.img)
        }
    }
    return (
        <div>
            <img src={image} onClick= {() => { 
                lentes()
            }} />
        </div>
    )
}
