import React,{useState} from 'react'

function Carousel(props) {

    const [getCar,setCar] = useState(0)

    return (
        <div>
            <button onClick={() => setCar(getCar-1)}>Left</button>
            <img src={props.imgs[getCar]} alt="carousel"/>
            <button onClick={() => setCar(getCar+1)}>Right</button>
        </div>
    )
}

export default Carousel
