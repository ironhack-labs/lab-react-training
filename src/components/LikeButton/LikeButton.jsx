import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [likeNumber, setLikeNumber] = useState(0)

    const makeLike = () => {
        setLikeNumber(likeNumber + 1)
    }

    return (
        <section className='LikeButton'>
            <button onClick={makeLike}>{likeNumber} {likeNumber > 0 ? 'Likes' : 'Like'}</button>
        </section>
    )

}

export default LikeButton