import {useState} from "react";

function LikeButton(){
    const [counter, setCounter] = useState(0);
    const bgColor = ['red', 'blue', 'black', 'white', 'yellow', 'orange'];
    const randomIndex = Math.floor(Math.random() * bgColor.length);
    const randomBg = bgColor[randomIndex];
    return(
        <div>
            <button style={{backgroundColor: randomBg}} onClick={() => setCounter(counter+1)}> {counter} Likes</button>
        </div>
    )
}

export default LikeButton;