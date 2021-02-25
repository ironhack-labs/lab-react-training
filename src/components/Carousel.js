import React, {useState} from 'react'

export default function Carousel(props) {
    
    const [index, setIndex] = useState(0)
    
    const [images, setImages] = useState(props.imgs[index])
    
    function changeR() {
        setIndex(index+1)
        if (index >= 3){
            setIndex(index-3)
        }
        setImages(props.imgs[index])
        console.log(index)
    }
    
    function changeL(){
        setIndex(index-1)
        if (index <= 0){
            setIndex(props.imgs.length-1)
        }
        setImages(props.imgs[index])
        console.log(index)
    }
    return (
        <div>
            <img src={images} />
            <button onClick={()=>changeR()}>Right</button>
            <button onClick={()=>changeL()}>Left</button>
        </div>
    )
}