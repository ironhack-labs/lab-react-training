import './Dice.css'
import { useState } from 'react'
import emptyDice from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

const Dice = () => {

    const [dice, setDice] = useState(dice1)

    const dicePosibilities = [dice1, dice2, dice3, dice4, dice5, dice6]
    const randomNum = Math.floor(Math.random() * dicePosibilities.length)


    const getRandomDice = () => {
        setDice(emptyDice)
        setTimeout(() => {
            setDice(dicePosibilities[randomNum])
        }, 100);
    }

    return (
        <div className="dice">
            <img onClick={getRandomDice} src={dice} alt="dice" />
        </div>
    );
}

export default Dice