import { useEffect, useState } from 'react'
import('./like-button.css')

const LikeButton = () => {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }
    return (
        <button className='like-button' onClick={increase}>
            {counter}
        </button >
    )
}

export default LikeButton