import { useState } from 'react'
import './Carousel.css'
export const Carousel = ( {images} )=>{
    let [ind, setInd] = useState(0);
    const left = ()=>{
        if(ind === 0){
            setInd(images.length - 1)
            return
        }
        setInd(ind-1)
    }
    const right = ()=>{
        if(ind >= images.length - 1 ){
            setInd(0)
            return

        }
        setInd(ind+1)
    }
    return (
        <div>
            <button onClick={ ()=>{left()} } className='bt'>Left</button>
            <img src={ images[ind] } alt="img-people" className='img-people'/>
            <button onClick={ right } className='bt'>Right</button>
        </div>
    )
}