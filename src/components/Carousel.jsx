import { useState } from "react"

const Carousel = ({images}) => {

    const [index, setIndex] = useState(0)
    
    const previousImg = () => {
        
        if (index < 0) {
            setIndex(images.length - 1)
        }
        else {
            setIndex(index -1)
        }
    }
    
    const nextImg = () => {
        
        if (index === images.length - 1) {
            setIndex(0)
        }
        else {
            setIndex(index +1)
        }
    }   
    
    return (
        <>
            <button onClick={(previousImg)}>Previous</button>
            <img src={images[index]} alt="" />
            <button onClick={(nextImg)}>Next</button>
        </>
    )
}

export default Carousel