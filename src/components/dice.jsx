import { useState } from "react";

function Dice() {
    const [face, setFace] = useState("../../public/images/dice-0.png");

    return (
        <img className="m-2" style={{ borderRadius: "10%"}} src={ face }  onClick={() => {
            setFace("../../public/images/dice-0.png");
            setTimeout(() => {setFace(`../../public/images/dice-${Math.ceil(Math.random() * 6)}.png`)}, 1000);
        }}/>
    )
}

export default Dice;