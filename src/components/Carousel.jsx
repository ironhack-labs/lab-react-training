import React, { useState } from 'react'

function Carousel({imgs}) {
    const [image, setImage] = useState(0)
    const turnLeft = () => {
        image === 0? setImage(3): setImage(image - 1)
    }
    const turnRight = () => {
        image === 3? setImage(0): setImage(image + 1)
    }

    return (
        <div>
            <button onClick={() => turnLeft()}>Left</button>
            <img src={imgs[image]} alt=""/>
            <button onClick={() => turnRight()}>Right</button>
        </div>
    )
}

export default Carousel