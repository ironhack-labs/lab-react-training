import { useState } from 'react';

const Carousel = ({ images }) => {

    const [image, setImage] = useState(0);

    const rightImage = () => {
        const up = image + 1
        up === 4 ? setImage(0) : setImage(up)

    }

    const leftImage = () => {
        const down = image - 1
        down === -1 ? setImage(3) : setImage(down)

    }

    return (
        <div>
            <button onClick={leftImage}>Left</button>
            <img src={images[image]} alt="" />
            <button onClick={rightImage}>Right</button>

        </div>
    )
}

export default Carousel