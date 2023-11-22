import { useState } from "react"




const Carousel = ({ images }) => {

    const [imga, setimg] = useState(0)

    const increment = () => {
        setimg(imga == images.length - 1 ? 0 : (imga + 1))
    }

    const decrement = () => {
        setimg(imga == 0 ? images.length - 1 : (imga - 1))
    }

    return (
        <div>
            <img src={images[imga]} alt="" />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}


export default Carousel