import './Dice.css'
import { useState } from 'react'

const randomDiceNumber = () => Math.floor(Math.random() * (6 - 1 + 1) + 1)
const randomDice = `./src/assets/images/dice${randomDiceNumber()}.png`

const Dice = () => {


    const [dice, setDice] = useState(randomDice)

    const handleDice = () => {
        const firstDiceClick = `./src/assets/images/dice-empty.png`
        setDice(firstDiceClick)
        const randomDice = () => {
            randomDiceNumber()
            const randomDiceClick = `./src/assets/images/dice${randomDiceNumber()}.png`
            setDice(randomDiceClick)
        }
        setTimeout(randomDice, 1000);

    }

    return (

        <div className="dice" onClick={handleDice}>
            <img src={dice} alt="" />
        </div>
    )
}

export default Dice