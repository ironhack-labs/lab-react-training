import './Dice.css'

import { useState } from "react";

function Dice() {

    const [diceValue, setDiceValue] = useState('./images/dice3.png')

    const randomNum = parseInt(Math.random() * (6 - 1) + 1)

    const changeDice = event => {
        setDiceValue(event.target.src = './images/dice-empty.png')
        setTimeout(() => {
            setDiceValue(event.target.src = `./images/dice${randomNum}.png`)
        }, 1000);
    }

    return (
        <figure className="dice">
            <img src={diceValue} onClick={changeDice} />
        </figure>
    )

}

export default Dice