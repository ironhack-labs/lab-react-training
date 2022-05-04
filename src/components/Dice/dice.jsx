import './dice.css'
import { useState } from 'react'

const Dice = () => {

    const diceRandom = Math.floor(Math.random() * 6 + 1)

    const [diceValue, setDiceValue] = useState(`./assets/images/dice${diceRandom}.png`)
    console.log(diceValue)
    const diceEmpty = ('./assets/images/dice-empty.png')

    const toggleDice = () => {
        if (diceValue === diceEmpty) {
            setTimeout(() => {
                setDiceValue(`./assets/images/dice${diceRandom}.png`)
            }, 1000)

        } else {
            setTimeout(() => {
                setDiceValue(diceEmpty)
            }, 1000)

        }
    }

    //Como se puede refactorizar para un código más limpio?????????????
    // const toggleDice = setTimeout(() => {
    //     if (diceValue === diceEmpty) {
    //         setDiceValue(`./assets/images/dice${diceRandom}.png`)
    //     } else {
    //         setDiceValue(diceEmpty)
    //     }
    // }, 1000)

    return (
        <button onClick={toggleDice}>
            <img className='dice' src={diceValue} alt="dice" ></img>
        </button>
    )
}

export default Dice