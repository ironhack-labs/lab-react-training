import React, {useState} from 'react'

export default function Dice() {

    const randomNum = () => Math.floor(Math.random() * 6) + 1;

    const [side, setSide] = useState(`/img/dice${randomNum()}.png`);

    const throwDice = () => {
        const empty = `/img/dice-empty.png`;
        const newSide = `/img/dice${randomNum()}.png`;

        setSide(empty);
        setTimeout(() => {
            setSide(newSide)
        }, 1000);
    }

    return (
        <div>
            <img src={side} alt="" onClick={throwDice} className="dice"/>    
        </div>
    )
}
