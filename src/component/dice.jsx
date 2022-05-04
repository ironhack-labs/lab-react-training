import { useState } from 'react'

function Dice() {

    let randomNumber = Math.floor(Math.random() * (5) + 1)

    const [diceValue, setDiceValue] = useState(`./images/dice${randomNumber}.png`)

    const toggleDice = () => {
        setDiceValue('./images/dice-empty.png')

        setTimeout(() => {
            setDiceValue(` ./images/dice${randomNumber}.png`)
        }, 1000)
    }

    return (

        <button onClick={toggleDice}><img src={diceValue}></img></button>
    )
}

export default Dice