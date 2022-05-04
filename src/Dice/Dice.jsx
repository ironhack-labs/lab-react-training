import { useState } from 'react'

function Dice() {
    const randomNumber = Math.floor(Math.random() * (6 - 1) + 1)

    const [diceValue, setDiceValue] = useState(`./assets/images/dice${randomNumber}.png`);

    const toggleImg = () => {
        setDiceValue(`./assets/images/dice-empty.png`)
        setTimeout(() => {
            setDiceValue(`./assets/images/dice${randomNumber}.png`)
        }, 1000);
    }

    return (
        <button onClick={toggleImg}><img src={diceValue}></img></button>
    )
}

export default Dice;