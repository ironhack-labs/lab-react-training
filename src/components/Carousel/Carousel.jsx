import { useState } from "react"
import './Carousel.css'


const Carousel = (props) => {
    const { images } = props
    const [index, setImg] = useState(2)
    const ChangeImgtoLeft = () => {
        setImg(index - 1)
    }
    const ChangeImgtoRigth = () => {
        setImg(index + 1)
    }
    return (
        <section className="changedBox">
            <img className="changedImg" src={images[index]} alt='' />
            <br />
            <button className="btn" onClick={ChangeImgtoLeft}>Left</button>
            <button className="btn" onClick={ChangeImgtoRigth}>Rigth</button>
        </section>

    )
}

export default Carousel