import React from 'react'
import {useState} from 'react'

export default function Carousel(props) {
    let [image, setImage] = useState(props.imgs[0])
    let [index, setIndex] = useState(0)

    function movesLeft() {
        setIndex(index - 1)
        if(index <= 0) {
            setIndex (props.imgs.length -1)
        }
        return setImage(props.imgs[index])
    }

    function movesRight() {
        setIndex(index + 1)
        if(index > props.imgs.length -2) {
            setIndex(0)
        }
        return setImage(props.imgs[index])
    }
    return (
        <div>
            <img src={image} />
            <button onClick={() => movesLeft()}>Left</button>
            <button onClick={() => movesRight()}>Right</button>
        </div>
    )
}
