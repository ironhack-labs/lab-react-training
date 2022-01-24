import { useState } from "react"

const LikeButton = () =>{
    const [count, setCount] = useState(0)
    const counter = () =>{
        setCount((prevCount) => (prevCount + 1))
    }
    //const [color, setColor] = useState('purple');
    //let colors = ['purple','blue','green','yellow','orange','red']
    //const changeColor = () => {
        //let newColor = colors[Math.floor(Math.random()*colors.length)];
        //setColor(newColor);
    //}

    return(
        <button onClick={counter}>{count} Likes</button>
    )

}
export default LikeButton;