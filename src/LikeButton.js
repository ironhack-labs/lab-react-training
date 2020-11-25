import React, {useState} from 'react'

const LikeButton = () => {
    const [count, setCount ] = useState([0])

    function sum() {
        setCount(parseInt(count) + 1)
    }
    return (
        <div>
            <button onClick={sum} >{count} likes</button>
        </div>
    )
}

export default LikeButton
