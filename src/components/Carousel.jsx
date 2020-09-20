import React, { useState } from 'react'


function Carousel(props) {

    const [carImg, carMove] = useState(0)
    const goLeft = () => {
        carImg === 0 ?  carMove(3) : carMove(carImg -1)
    }
    const goRight = () => {
        carImg === 3 ?  carMove(0) : carMove(carImg +1)
    }
    
    return (
        <div>
            <button onClick={() => goLeft()}>Left</button>
            <img src={props.imgs[carImg]}/>
            <button onClick={() => goRight()}>Right</button>
        </div>
    )
}

export default Carousel
