import { useState } from 'react';
import "./LikeButton.css"

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [index, setindex] = useState(0);

    const addLike = () => {
        const newLike = likes + 1;
        setLikes(newLike);
    }


    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    let divStyle = {
        backgroundColor: "purple"
    }

    const changeStyle = () => {
        const newIndex = index + 1
        if (newIndex < 6) {
            setindex(newIndex)
        }
        else setindex(0)
        divStyle = {
            backgroundColor: `${colors[index]}`
        }
        console.log(divStyle)
    }


    return (
        <button className="likeButton" style={divStyle} onClick={() => {
            addLike()
            changeStyle()
        }}> {likes} Like
        </button>
    )

}

export default LikeButton;

