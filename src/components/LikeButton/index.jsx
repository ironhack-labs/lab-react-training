import { useState } from 'react'
import './LikeButton.css'

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

const LikeButton = () => {
    const [count, setCount] = useState(0);
    const [style, setStyle] = useState({
        backgroundColor: 'purple',
        color: 'white'
    })


    const addLike = () => {
        setStyle({
            backgroundColor: colors[(count + 1) % colors.length],
            color: 'white'
        })
        setCount(count + 1)
    }

    return (
        <button style={style} onClick={addLike}>{count} likes</button>
    )
}

export default LikeButton