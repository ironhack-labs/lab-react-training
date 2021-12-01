import React from 'react'
import { useState } from 'react'



export default function Carousel(props) {

    
    const setInitialValue = () => {
         return props.imgs[0]
        
    }
    const [image, setImage] = useState(() => setInitialValue(props.imgs[0]))

const leftHandler = () => {
    let currentPosition =  props.imgs.indexOf(image)
    if(currentPosition===0){
        setImage((image) => props.imgs[props.imgs.length-1])
    } else {
        setImage((image) => props.imgs[currentPosition-1])
    }  
}

const rightHandler = () => {
    let currentPosition =  props.imgs.indexOf(image)
    if(currentPosition===(props.imgs.length -1)){
        setImage((image) => props.imgs[0])
    } else {
        setImage((image) => props.imgs[currentPosition+1])
    }  
}
return (
        <div>
            <button onClick={leftHandler}>left</button>
            <img src={image} style={{height: '200px', backgroundColor: 'white', borderRadius: '20px'}} alt=""/>
            <button onClick={rightHandler}>right</button>
        </div>
    )

}