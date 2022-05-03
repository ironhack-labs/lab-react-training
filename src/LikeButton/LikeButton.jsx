import { useState } from 'react'

const LikeButton = () => {
     const [counterValue, setCounterValue] = useState(0)

    
    
    return (

        <button onClick={() => setCounterValue(prevCounterVal => ++prevCounterVal)}> {counterValue} like </button>
    )

    



}

export default LikeButton