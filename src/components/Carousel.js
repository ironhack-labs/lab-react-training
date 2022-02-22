import React from "react"

const Carousel = props => {
    const [imgIndex, setImgIndex]= React.useState(0)

    return (
        <div>
            <button onClick={() => setImgIndex((imgIndex -1 >= 0 ? (imgIndex - 1) % props.images.length : props.images.length - 1 ))}>left</button>
            <img src={props.images[imgIndex]} alt="personimage" />
            <button onClick={() => setImgIndex((imgIndex + 1) % props.images.length)}>right</button>
        </div>
    )
}

export default Carousel