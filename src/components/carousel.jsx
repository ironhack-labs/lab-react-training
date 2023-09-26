import { useState } from "react";

function Carousel({ images }) {
    const [imageIndex, setIndex] = useState(0);

    return (
        <div className="m-2 justify-content-center d-flex">
            <button className="mx-2 align-self-end" onClick={() => {
                imageIndex === 0 ? setIndex(images.length - 1) : setIndex(imageIndex - 1);
            }}>↶</button>
            <img className="mb-2" src={ images[imageIndex] }/>
            <button className="mx-2 align-self-end" onClick={() => {
                imageIndex === images.length - 1 ? setIndex(0) : setIndex(imageIndex + 1);
            }}>↷</button>
        </div>
    )
}

export default Carousel;