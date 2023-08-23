import './Carousel.css'
import { useState } from 'react'



const Carousel = ({ images }) => {

    const [image, setImage] = useState(0)




    const Left = () => {
        setImage(image - 1)
    }
    const Rigth = () => {
        setImage(image + 1)
    }

    return (
        < div className="LikeButton" >

            <button onClick={Rigth}> + </button>

            <img src={images[image]} alt="" />

            <button onClick={Left}> - </button>
        </div >

    )

}




export default Carousel