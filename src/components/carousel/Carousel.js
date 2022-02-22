import './Carousel.css'
import { useState } from 'react'

const Carousel = (props) => {

    const {images} = {...props}

    let [index, setIndex] = useState(0)
    let [showImg, setImg] = useState(images[index])

    const left = () => {
    
        let newIndex = index -1
       
        if(newIndex < 0){
            newIndex = 3

        }
        setImg(images[newIndex])
        setIndex(newIndex)

        
    }


    const right = () => {

        let newIndex = index + 1

        if (newIndex > 3) {
            newIndex = 0

        }
        setImg(images[newIndex])
        setIndex(newIndex)


    }

    return (
        <div className='carousel'>

            <img src={showImg}></img>
            <button onClick={ () => left()}>Left</button> 
            <button onClick={ () => right()}>Right</button>
        </div>
    )
}

export default Carousel