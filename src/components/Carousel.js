import React, {useState} from 'react';

function Carousel({imgs}) {
    const [index, setIndex] = useState(0)

    const left = () => (index > 0) ? setIndex(index - 1) : setIndex(imgs.length - 1)
    const right = () => (index < imgs.length - 1) ? setIndex(index + 1) : setIndex(0)
    return (

        <div style={{display: 'flex', 'display-direction': 'col', 'align-items': 'center'}}>
            <img style={{height: '10rem'}} src={imgs[index]}/>
            <div>
                <button onClick={left}>Left</button>
                <button onClick={right}>Right</button>
            </div>

        </div>
    )
        ;
}

export default Carousel;