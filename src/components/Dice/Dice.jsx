import { useState } from 'react'
import './Dice.css'
import empty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

function getDice(number) {
    switch (number) {
        case 1:
            return dice1
        case 2:
            return dice2
        case 3:
            return dice3
        case 4:
            return dice4
        case 5:
            return dice5
        case 6:
            return dice6
        default:
            return empty
    }
}

function random(min = 1, max = 6) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function Dice() {
    const [dice, setDice] = useState(random())
    const [waiting, setWaiting] = useState(false)
    function handleClick() {
        if (waiting) return
        setDice(0);
        setWaiting(true)
        setTimeout(() => {
            setDice(random())
            setWaiting(false)
        }, 1000);
    }
    return (
        <div className="dice">
            <img src={getDice(dice)} alt={'dice ' + dice} onClick={handleClick} />
        </div>
    )
}
export default Dice






