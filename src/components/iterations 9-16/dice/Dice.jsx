import { useState } from "react";

function Dice() {
    const [face, setFace] = useState("../../images/dice-0-0.png");

    return (
        <img className="m-2" style={{ borderRadius: "10%"}} src={ face }  onClick={() => {
            setFace("../../images/dice-roll.gif");
            setTimeout(() => {setFace(`../../images/dice-${Math.ceil(Math.random() * 6)}.png`)}, 1000);
        }}/>
    )
}

export default Dice;