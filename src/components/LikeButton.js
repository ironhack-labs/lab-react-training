import { useState } from "react";

function LikeButton (props){

    const [curtidas, setCurtidas] = useState(0)
    const trueColours = ['purple','blue','green','yellow','orange','red']
    const colorPosition = curtidas % trueColours.length
    // const contagem = () => setCurtidas(curtidas + 1)
    console.log(colorPosition)
    function handleClick(){
        setCurtidas(curtidas + 1)
    }




    return (
        <div>
            <button onClick={handleClick} style={{backgroundColor: trueColours[colorPosition]}} >" {curtidas} Likes"</button>
        </div>
    );
};

export default LikeButton;