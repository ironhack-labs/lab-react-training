import { useState } from 'react'
import './LikeButton.css'

function LikeButton () {
    const [ like, setLike ] = useState(0); 
   // const [ color, setColor ] = useState(); 
   // let colors = ['purple','blue','green','yellow','orange','red'];

   // let randomColors = Math.floor(Math.random() * colors.length);

    // setColor((colors) => {Math.floor(Math.random() * colors.length);})
  
    return (
        <div>
            <button className='btn' onClick={() => {setLike(like + 1)}}>{like} Likes</button>
        </div>
    )

}
export default LikeButton; 