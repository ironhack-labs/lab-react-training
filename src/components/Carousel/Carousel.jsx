import { useState } from 'react'
import './Carousel.css'

const Carousel = props => {

    const { images } = props

    const [index, setIndex] = useState(0)

    // const incrementIndex = () => {
    //     index === images.length - 1 ? setIndex(0) : setIndex(index + 1)
    // }
    // const decrementIndex = () => {
    //     index === 0 ? setIndex(images.length - 1) : setIndex(index - 1)
    // } ========> Otra opción


    const moveImage = e => {
        if (e.target.value === 'Next') {
            index === images.length - 1 ? setIndex(0) : setIndex(index + 1)
        } else {
            index === 0 ? setIndex(images.length - 1) : setIndex(index - 1)
        }
    }

    return (
        <div className='Carrousel'>
            <img src={images[index]} alt="" />
            <button value='Next' onClick={moveImage}>Next</button>
            <button value='Prev' onClick={moveImage}>Prev</button>
        </div>
    )
}

export default Carousel