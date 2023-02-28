import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [likeValue, setLikeValue] = useState(0)

    const incrementLike = () => {
        setLikeValue(likeValue + 1)
    }

    // let background = {
    //     backgroundColor: 'blue',
    //     color: 'white'
    // }


    return <div className='LikeButton'>

        <button className='Button' onClick={incrementLike}>{likeValue} Likes</button>

    </div>

}

export default LikeButton