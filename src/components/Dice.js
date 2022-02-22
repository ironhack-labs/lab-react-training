import { useState } from 'react';
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import dice0 from '../assets/images/dice-empty.png'

function Dice () {

    const [dice, setDice] = useState(dice0)
    const dices = [dice1, dice2, dice3, dice4,dice5, dice6]

    const click = () => {
        let clickDice = dices[Math.floor(Math.random()*(dices.length -1))]
        setTimeout(() => {setDice(clickDice)}, 1000)
    }

    return (
    <img src={dice} onClick={click}/>
    )
}

export default Dice