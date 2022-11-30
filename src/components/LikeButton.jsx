import { useState } from 'react'

const LikeButton = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const [count, setCount] = useState(0)
    const [colorChange, setColorChange] = useState('purple')

    return (
        <div>
            <button style={{ background: colorChange }} onClick={() => {
                setCount(count + 1)
                setColorChange(colors[Math.floor(Math.random() * colors.length)])
            }}>
                {count === 1 ? `${count} Like` : `${count} Likes`}
            </button>
            <button style={{ background: colorChange }} onClick={() => {
                setCount(count + 1);
                setColorChange(colors[Math.floor(Math.random() * colors.length)]);
            }}>
                {count === 1 ? `${count} Like` : `${count} Likes`}
            </button>
        </div>
    )
}

export default LikeButton