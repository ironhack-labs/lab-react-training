import React from 'react'
import {useState} from 'react'
import imageOne from './assets/images/maxence.png'
import imageTwo from './assets/images/maxence-glasses.png'


export default function ClickablePicture() {
    const setInitialValue = () => {
        return imageOne
    }
    const [image, setImage] = useState(() => setInitialValue())
    const imageClick = () => {
        console.log('clicked image')
        console.log(image)
        if(image===imageOne){
            setImage((image) => imageTwo)
        } else {
            setImage((image) => imageOne)
        }

    }
    return (
        <div>
        
            <img src={image} style={{height: '200px'}} onClick={imageClick} alt='maxence'/>
        </div>
    )
}