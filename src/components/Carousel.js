import './Carousel.css';
import { useState } from 'react'; 

function Carousel ({images}) {
    const [ photo, setPhoto ] = useState(0);
    return (
        <div>
            <button className='btn' onClick={() => setPhoto(photo > 0 ? photo - 1 : 0)}>Left</button>
            <img className='img-change' src={images[photo]} alt='img-change' />
            <button className='btn' onClick={() => setPhoto(photo < images.length - 1 ? photo + 1 : images.length - 1)}>Right</button>
        </div>
    )
}
export default Carousel;