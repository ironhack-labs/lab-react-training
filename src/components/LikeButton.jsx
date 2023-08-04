import { useState } from "react";

const LikeButton = () => {
    
    const [buttonOneCount, setButtonOneCount] = useState(0)
    const [buttonTwoCount, setButtonTwoCount] = useState(0)

    const colors = ['purple','blue','green','yellow','orange','red'];
    const indexColorOne = buttonOneCount % colors.length;
    const indexColorTwo = buttonTwoCount % colors.length;

    const handelButtonOne = () => {
        setButtonOneCount(buttonOneCount + 1)
    }

    const handelButtonTwo = () => {
        setButtonTwoCount(buttonTwoCount + 1)
    }
    return(
        <div>
            <button className="button" style={{ backgroundColor: colors[indexColorOne], color: "white"}} onClick={handelButtonOne}>{buttonOneCount} likes</button>
            <button className="button" style={{ backgroundColor: colors[indexColorTwo], color: "white"}} onClick={handelButtonTwo}>{buttonTwoCount} likes</button>
        </div>
    )

}

export default LikeButton;