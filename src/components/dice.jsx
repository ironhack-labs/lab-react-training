import { useState } from "react";

function Dice() {
    const [face, setFace] = useState("../../public/images/dice-0-0.png");

    return (
        <img className="m-2" style={{ borderRadius: "10%"}} src={ face }  onClick={() => {
            setFace("../../public/images/dice-0-0.png");
            setTimeout(() => {setFace("../../public/images/dice-0-3.png")}, 150);
            setTimeout(() => {setFace("../../public/images/dice-0-2.png")}, 300);
            setTimeout(() => {setFace("../../public/images/dice-0-1.png")}, 450);
            setTimeout(() => {setFace("../../public/images/dice-0-0.png")}, 600);
            setTimeout(() => {setFace("../../public/images/dice-0-3.png")}, 750);
            setTimeout(() => {setFace("../../public/images/dice-0-2.png")}, 900);
            setTimeout(() => {setFace(`../../public/images/dice-${Math.ceil(Math.random() * 6)}.png`)}, 1000);
        }}/>
    )
}

export default Dice;