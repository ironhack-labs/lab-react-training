import React from 'react'
import { useState } from 'react'

function Carousels ({imgs}){
const [count, setCount] = useState(0);
function right(){setCount(count+1)}
function left () {setCount(count-1)}
    return (
        <div>
            <img src={imgs[count]} />
            <button onClick={left}> Left</button>
            <button onClick={right}> Right</button>
        </div>
    )
}

const Carousel =()=> {
    return (
        <div>
            <Carousels
                imgs={[
                    'https://randomuser.me/api/portraits/women/1.jpg',
                    'https://randomuser.me/api/portraits/men/1.jpg',
                    'https://randomuser.me/api/portraits/women/2.jpg',
                    'https://randomuser.me/api/portraits/men/2.jpg'
                ]}
                />
        </div>
    )
}

export default Carousel;


