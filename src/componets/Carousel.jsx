import { useState } from 'react'

const Carousel = ({ images }) => {
    const [value, setValue] = useState(0)

    return (<div >
        <img src={images[value]} alt={images[value]} ></img>
        <button onClick={() => setValue(previusValue => --previusValue)}>  Izquierda </button>
        <button onClick={() => setValue(previusValue => ++previusValue)}> Derecha </button>
    </div>
    )

}
export default Carousel
