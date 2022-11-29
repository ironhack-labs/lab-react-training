import { useState } from "react";

const Carousel = ({ images }) => {

    const [selectPic, setSelectPic] = useState(0)

    function prev() {
        selectPic === 0 ? setSelectPic(images.length - 1) : setSelectPic(selectPic - 1)
    }
    function next() {
        setSelectPic((selectPic + 1) % images.length)
    }
    return (
        <div>
            <img src={images[selectPic]} alt="carousel" />
            <p>
                <button onClick={prev}>Previous</button>
                <button onClick={next}>Next</button>
            </p>
        </div>
    )
}

export default Carousel 