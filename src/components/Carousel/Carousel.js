import { useState } from "react"
import "./Carousel.css"

const Carousel = ({ images }) => {

    let [arrNum, setArrNum] = useState(0)
    let [image, setImage] = useState(images[arrNum])

    const lessArr = () => {
        if (arrNum <= 0) {
            setArrNum(images.length - 1)
            changeImg(arrNum)
        } else {
            setArrNum(arrNum-1)
            changeImg(arrNum)
        }
    }

    const sumArr = () => {
        if (arrNum >= (images.length -1)) {
            setArrNum(0)
            changeImg(arrNum)
        } else {
            setArrNum(arrNum+1)
            changeImg(arrNum)
        }
    }

    const changeImg = () => {
        setImage(images[arrNum])
    }


    return (
        <div>
            <button onClick={lessArr}>left</button>
            <img src={image}></img>
            <button onClick={sumArr}>right</button>
        </div>

    )
}

export default Carousel