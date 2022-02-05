import { useState } from 'react';
import './idCard.css'

function LikeButton(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <br/>
            <button className='buttonLike' onClick={()=>setCount( prevState => prevState + 1 ) }> {count} Like</button>
        </div>
    )
}


export default LikeButton;