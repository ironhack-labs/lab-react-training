import { useState } from "react";

function Carousel(props) {
    let imgArray = [...props.images]

    const [imgURL, setImgURL] = useState(imgArray[0])

    function clickRight() {
        let currentIndex = imgArray.indexOf(imgURL)
        if (currentIndex + 1 < imgArray.length) setImgURL(imgArray[currentIndex + 1])
        else setImgURL(imgArray[0])
    }

    function clickLeft() {
        let currentIndex = imgArray.indexOf(imgURL)
        if (currentIndex - 1 >= 0) setImgURL(imgArray[currentIndex - 1])
        else setImgURL(imgArray[imgArray.length - 1])

    }

    const buttonStyle = {
        height: '20px',
        width: '100px',
        margin: '10px'
    }

    return (
        <div>
            <button style={buttonStyle} onClick={clickLeft}>Left</button>
            <img src={imgURL} alt="Random image" />
            <button style={buttonStyle} onClick={clickRight}>Right</button>
        </div>
    )
}

export default Carousel;