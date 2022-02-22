// import { useState } from 'react';
function Carousel(props) {
    // const [carousel, setCarousel] = useState(false)

    return (
        <div>
            <button>Left</button>
            <img src={props.images[0]} alt='user carousel' />
            <button>Right</button>
        </div>
    )
}
export default Carousel;