import { useState } from 'react'

const Carousel = (props) => {

    const { images } = props;

    const [index, setIndex] = useState(0);

    const left = () => {
        if(index === 3){
            setIndex(0);
        } else {
            setIndex((prevIndex) => (prevIndex + 1));
        }
        
}

    const right = () => {
        if(index === 3){
            setIndex(0);
        } else {
            setIndex((prevIndex) => (prevIndex + 1));
        }
        
        
}

    return <div>
        <button onClick={left}>Left</button>
        <img src={images[index]}></img>
        <button onClick={right}>Right</button>
    </div>

}

export default Carousel;