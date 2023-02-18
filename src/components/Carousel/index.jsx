import { useState } from 'react';
import './styles.css'

const Carousel = ({ images, ...restProps }) => {
    const [carousel, setCarousel] = useState(() => images.length > 0 ? images[0] : '');
    const [count, setCount] = useState(0);
    const left = (cnt) => {
        if (cnt <= 0) {
            setCount(images.length - 1);
            return setCarousel(images[images.length - 1]);
        }
        cnt -= 1;
        setCount(cnt);
        setCarousel(images[cnt]);
    }

    const rigth = (cnt) => {
        if (cnt >= (images.length - 1)) {
            setCount(0)
            return setCarousel(images[0])
        }
        cnt += 1;
        setCount(cnt);
        setCarousel(images[cnt]);
    }
    return (
        <div className="carousel-container">
            <div className="divImg">
                <img src={carousel} alt="carousel" />
            </div>
            <div className="divbtn">
                <button onClick={e => left(count)}>Left</button>
                <button onClick={e => rigth(count)}>Rigth</button>
            </div>
        </div>
    );
};

export default Carousel;