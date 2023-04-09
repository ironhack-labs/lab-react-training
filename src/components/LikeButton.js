import { useState } from 'react';

function LikeButton() {

    const colors = ['purple','blue','green','yellow','orange','red'];

    const [color, setColor] = useState(colors[0]);
    const [count, setCount] = useState(0);

    const changeColor = () => {
        setCount(count=>count+1);
        setColor(colors[count % colors.length]);
    }



    return (
        <button className="like-button" style={{backgroundColor:`${color}`}} onClick={changeColor}>{count} {count <= 1 ? <>Like</> : <>Likes</>}</button>

    )

}
export default LikeButton