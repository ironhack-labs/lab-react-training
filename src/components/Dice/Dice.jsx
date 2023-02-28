import { useState } from "react"
import './Dice.css'

import DiceEmpty from '../../assets/images/dice-empty.png'
import Dice1 from '../../assets/images/dice1.png'
import Dice2 from '../../assets/images/dice2.png'
import Dice3 from '../../assets/images/dice3.png'
import Dice4 from '../../assets/images/dice4.png'
import Dice5 from '../../assets/images/dice5.png'
import Dice6 from '../../assets/images/dice6.png'

const Dice = () => {

    const diceArray = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, DiceEmpty]
    let indexRandom = Math.floor(Math.random() * (diceArray.length - 1))

    const [dice, setDice] = useState(diceArray[6])

    const clickImage = () => {
        setDice(diceArray[6])
        indexRandom = Math.floor(Math.random() * (diceArray.length - 1))
        setTimeout(() => {
            setDice(diceArray[indexRandom])

        }, 500);
    }

    return (
        <div className='Dice'>
            <img src={dice} alt="Dice" onClick={clickImage} />
        </div>
    )
}

export default Dice