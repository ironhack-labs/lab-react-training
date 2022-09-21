import { useState } from 'react'

const Likes = () => {
    const [likes, setLikes] = useState(0)

    const addLike = () => {
        const newLikes = likes + 1
        setLikes(newLikes)
    }
    return (

        <div>
            <button onClick={() => addLike(1)}> LIKE!!! {likes}</button>
        </div>
    )
}

export default Likes