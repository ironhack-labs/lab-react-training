import { useState } from 'react'


const LikeButton = () =>{
    let randomCol = '#'+Math.floor(Math.random()*16777215).toString(16);
    const [count, setCount] = useState(0)
    return <button style={{backgroundColor: `${randomCol}`}} onClick={() => setCount(count + 1)}>{count} Likes</button>
 
}
export default LikeButton