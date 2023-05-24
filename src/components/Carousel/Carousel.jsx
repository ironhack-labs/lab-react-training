import { useState } from "react"
import "./Carousel.css"




const Carousel = ({ images }) => {

    const [Picture, setPicture] = useState(images[0])

    let nextImg = (index) => {
        let i = images.indexOf(index)
        i == images.length - 1 ? setPicture(images[0]) : setPicture(images[i + 1])
    }

    let previoustImg = (index) => {
        let i = images.indexOf(index)
        i == 0 ? setPicture(images[images.length - 1]) : setPicture(images[i - 1])
    }


    return (
        <div className="Carrousel">
            <button onClick={() => previoustImg(Picture)}>Previous Picture</button>
            <img src={Picture} alt="" />
            <button onClick={() => nextImg(Picture)}>Next Picture</button>

        </div>

    )
}



export default Carousel   