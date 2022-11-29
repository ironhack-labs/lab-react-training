import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {

    const [counter, setCounter] = useState(0)
    const [colorIndex, setColorIndex] = useState(0)
    const backgroundColors = ['purple','blue','green','yellow','orange','red']


    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const changeColors = () => {
        colorIndex >= backgroundColors.length ? setColorIndex(0) : setColorIndex(colorIndex + 1)
    }


    return (
        <div className='likeButton'>
            <button className={backgroundColors[colorIndex]} onClick={() => {
                changeColors(); incrementCounter()
            }} >{counter} {counter === 1 ? 'Like' : 'Likes'}</button>

        </div>
    )
}

export default LikeButton