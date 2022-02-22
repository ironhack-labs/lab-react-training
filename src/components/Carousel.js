import { useState } from "react"

const Carousel = ({ images }) => {

    let [index, setImgIndex] = useState(0)
    let [firstImg, setFirstImg] = useState(images[index])

    return (
        <>
            <br></br>
            <img style={{ width: '200px' }} src={firstImg} />

            <button onClick={() => {
                index--
                setFirstImg(images[index])
                setImgIndex(index--)
            }}>Prev</button>
            <button onClick={() => {
                index++
                setFirstImg(images[index])
                setImgIndex(index++)
            }}>Next</button>
        </>
    )
}

export default Carousel