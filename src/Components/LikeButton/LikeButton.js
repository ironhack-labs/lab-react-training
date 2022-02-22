import { useState } from 'react'

function LikeButton() {

    const [countValue, setCountValue] = useState(0)

    return (
        <div className='likeButton'>
            <button onClick={() => setCountValue((newValue) => newValue + 1)}> {countValue} Likes </button>
        </div>
    )
}

export default LikeButton