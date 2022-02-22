import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {

    let [countValue, setCountValue] = useState(0)



    return (
       <div className='likeButtons'>
           <button onClick={()=> setCountValue(++countValue)}> Likes {countValue}</button>
       </div>
    )
}

export default LikeButton