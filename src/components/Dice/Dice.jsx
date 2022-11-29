import './Dice.css'
import { useState } from 'react'
import Dice0 from '../../assets/images/dice-empty.png'
import Dice1 from '../../assets/images/dice1.png'
import Dice2 from '../../assets/images/dice2.png'
import Dice3 from '../../assets/images/dice3.png'
import Dice4 from '../../assets/images/dice4.png'
import Dice5 from '../../assets/images/dice5.png'
import Dice6 from '../../assets/images/dice6.png'



function Dice() {
    const [dice, setDice] = useState(Dice1)
    const dices = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

    const randomNumber = Math.floor(Math.random() * dices.length)

    const draw = () => {
        setDice(Dice0)
        setTimeout(() => setDice(dices[randomNumber]), 1000)
    }
    return (
        <img onClick={draw} src={dice} alt='dice' width='100px' />
    )
}
export default Dice