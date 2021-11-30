import React from 'react'
import {useState} from 'react'

export default function Carousel(props) {
    // console.log(props.imgs)
    const nextHandler = () => {
        if(props.imgs.indexOf(image)===(props.imgs.length -1)){
            setImage((image) => props.imgs[0])
        } else {
            setImage((image) => props.imgs[props.imgs.indexOf(image)+1])
        }  

    }
    const prevHandler = () => {
        if(props.imgs.indexOf(image)===0){
            setImage((image) => props.imgs[props.imgs.length-1])
        } else {
            setImage((image) => props.imgs[props.imgs.indexOf(image)-1])
        }  
    }

    const setInitialValue = () => {
        return props.imgs[0]
    }

    const [image, setImage] = useState(() => setInitialValue())


    
    return (
        <div>
         <h2>Iteration 11</h2>
         <img src={image} style={{height: '200px', backgroundColor: 'white', borderRadius: '20px'}}></img>
         <br />
         <button onClick={prevHandler} style={{height: '40px', width:'100px'}}>&#x000AB;</button>
         <button onClick={nextHandler} style={{height: '40px', width:'100px'}}>&#x000BB;</button>

        </div>
    )
}
