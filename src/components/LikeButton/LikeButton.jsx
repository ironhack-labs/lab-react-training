import { useEffect, useState } from 'react'
import Button from '../Button/Button'

const LikeButton = (props) => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <div className="counter">{counter}</div>
            <Button increment={increment} />
        </>
    )
}

export default LikeButton