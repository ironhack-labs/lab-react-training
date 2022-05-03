import './Dice.css'
import { useState } from 'react'

function Dice() {

    let randomNumber = Math.floor(Math.random() * (5) + 1)

    const [diceValue, setDiceValue] = useState(`./assets/images/dice${randomNumber}.png`)

    const toggleDice = () => {
        setDiceValue('./assets/images/dice-empty.png')

        setTimeout(() => {
            setDiceValue(`./assets/images/dice${randomNumber}.png`)
        }, 1000)
    }

    return (

        <button onClick={toggleDice}><img src={diceValue}></img></button>
    )
}

export default Dice