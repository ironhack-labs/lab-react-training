import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {
    const [likesValue, setLikesValue] = useState(0)
    // const background = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']


    return (

        <article className='likeRow'>
            <h2>Count your likes!</h2>

            <button className='button' onClick={() => setLikesValue((prevlikesValue) => prevlikesValue + 1)}>{likesValue} Likes</button>
            {/* <button onClick={() => setLikesValue((prevlikesValue) => prevlikesValue + 1)}>{likesValue}Likes</button> */}
        </article>
    )

}

export default LikeButton