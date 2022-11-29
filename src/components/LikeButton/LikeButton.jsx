import { useState } from "react"


const LikeButton = () => {

    const arrayColor = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const [likeValue, setLikeValue] = useState(0)

    const incrementLike = () => {
        setLikeValue(likeValue + 1)
    }

    return (
        <button onClick={incrementLike} className='container' style={{
            backgroundColor: arrayColor[likeValue]
        }}>
            <p>{likeValue} Likes</p>
        </button>
    )

}


export default LikeButton