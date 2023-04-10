
import {useState} from 'react'


const Carousel = ({images}) => {

    const [index, setIndex] = useState(0)

    const imageArray = [...images]

    const nextImage = () => {
        setIndex( (index + imageArray.length + 1) % imageArray.length)
    }

    const previousImage = () => {
        setIndex( (index + imageArray.length - 1) % imageArray.length)
    }

    return (

        <div>
        <button onClick={previousImage}> Prev </button>
        <img src={imageArray[index]} alt="" />
        <button onClick={nextImage}> Next </button>
        </div>

)


}


export default Carousel