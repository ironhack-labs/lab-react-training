import { useState } from 'react'
import DiceEmpty from './../../public/dice-empty.png'
import Dice1 from './../../public/dice1.png'
import Dice2 from './../../public/dice2.png'
import Dice3 from './../../public/dice3.png'
import Dice4 from './../../public/dice4.png'
import Dice5 from './../../public/dice5.png'
import Dice6 from './../../public/dice6.png'

const diceArray = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
const Dice = () => {

    const [currentDice, setCurrentDice] = useState(diceArray[Math.floor(Math.random() * 6 + 1)])

    const handleDice = () => {

        setCurrentDice(DiceEmpty)

        setTimeout(() => {
            const randomDice = diceArray[Math.floor(Math.random() * 6 + 1)]
            setCurrentDice(randomDice)
        }, 1000)
    }

    return (
        <div onClick={handleDice}>
            <img src={currentDice} alt="dice" style={{ width: '10%', height: '10%' }} />
        </div>
    )

}

export default Dice