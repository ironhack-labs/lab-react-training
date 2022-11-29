import { useState } from 'react'
import './LikedButton.css'


function LikeButton() {

    const [countLiked, setCountliked] = useState(0)

    const incrementCounter = () => {
        setCountliked(countLiked + 1)
    }



    return (<article className='Counter'>

        <button className="button" onClick={incrementCounter}><h2>Like {countLiked} veces</h2></button>

    </article >
    )


}



export default LikeButton