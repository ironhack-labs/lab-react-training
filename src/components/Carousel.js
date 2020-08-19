import React, {useState} from 'react'

export default function Carousel(props) {

    const [num, setNum] = useState(0);

    return (
        <div>
            <button onClick={() => {
                if (num <= 0) {
                    setNum(props.imgs.length-1)
                }
                else {
                    setNum(num-1)
                }
            }}>Left</button>
            <img src={props.imgs[num]} alt=""/>
            <button onClick={() => {
                if (num >= props.imgs.length-1) {
                    setNum(0)
                }
                else {
                    setNum(num+1)
                }
            }}>Right</button>
        </div>
    )
}
