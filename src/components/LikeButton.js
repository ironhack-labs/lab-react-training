import { useState } from 'react'
import './LikeButton.css'

function LikeButton () {
    const [ like, setLike ] = useState(0);

    let colors = ['purple','blue','green','yellow','orange','red'];

    let giveLike = (event) => {
        setLike(like + 1);

        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];

        let button = event.target;
        button.style = `background-color: ${randomColor}`;
    };

    return (
        <div>
            <button className='btn' onClick={giveLike}>{like} Likes</button>
        </div>
    )

}
export default LikeButton;