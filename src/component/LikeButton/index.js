import React from "react";
import './styleLikeB.css'

const LikeButton = (props) => {
    const [ count, setCount ] = React.useState(0);
    const colors = [ 'purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    // let clicks = 0;

    const buttonClick = ()=>{
        setCount( count + 1 )
    };

    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const colorStyle = { backgroundColor: `${randomColor}`};

    // console.log("thecolor", colorStyle )
    return(
        <div className="LikeButton">
        <button type="button" onClick={buttonClick}> Likes {count} </button>
        <button type="button" style={colorStyle} onClick={buttonClick}> Likes {count} </button>
        </div>
    )
};

export default LikeButton;