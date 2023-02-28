import { useState } from 'react'
import './LikeButton.css'

const LikeButton = props => {

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const [likes, setLikes] = useState(0)

    const addLike = () => {
        setLikes(likes + 1)
    }

    const style = {
        backgroundColor: colors[likes]
    }
    return (
        <>
            <button className='likeButton' style={style} onClick={addLike}>{likes} Likes</button>
        </>
    )
}

export default LikeButton