import React from 'react'
import {useState} from 'react'
import './likeButton.css'

const LikeButton = (props) => {
    const [counter, setCounter] = useState(0)
    const clickHandler = () => {
        setCounter((counter) => counter + 1)
    }
    return (
        <button
        className="likeButton"
        onClick={clickHandler}
        type="button"
        >
            {counter}Likes
        </button>
    )
}
export default LikeButton