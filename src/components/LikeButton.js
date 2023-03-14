import { useState } from 'react';
import './LikeButton.css';

function LikeButton () {
    const [counter, setCounter] = useState(0);

    
return(
    <div >
   <p>
   <button className="Counter" onClick={() => {
    setCounter (counter +1)
   }}>{counter} Likes</button>
   </p> 
   </div>
)

}



export default LikeButton;