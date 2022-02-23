import { useState } from 'react'
// Iteration 8 | State: LikeButton
function LikeButton(props) {
    // this creates a state variable and a setter function

    const colors= ['purple','blue','green','yellow','orange','red'];

    const [count, setCount] = useState(0)
    const [color, setColor] = useState(colors)


    const increaseCount = () => {
        setCount(count + 1)
    }

    const changeColor = () => {
        setColor(color);
    }

    const likeHandler = () => {
        increaseCount();
        changeColor()
    }


  return (
    <div >
        <button className='like-button' onClick={likeHandler} style={{backgroundColor: color[Math.floor(Math.random() * color.length)] }}>{count} Likes</button>
    </div>
  );
}

export default LikeButton;
