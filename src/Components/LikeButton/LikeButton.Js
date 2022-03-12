import './LikeButton.css'
import { useState } from "react";

function LikeButton() {

    const [likeCounter, setLikeCounter] = useState(0);
    // const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    // falta ajeitar o style (adicionar as cores a cada click)
    

    function handleClick(event) {
       setLikeCounter(likeCounter + 1);
    }
    return (
      <div>
        <button className="button-like" onClick={() => handleClick()}> {likeCounter} Likes</button>
      </div>
    );
}

export default LikeButton;