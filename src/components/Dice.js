import { useState } from 'react';
import diceImg from '../assets/images/dice-empty.png'
import diceImg1 from '../assets/images/dice1.png'
import diceImg2 from '../assets/images/dice2.png'
import diceImg3 from '../assets/images/dice3.png'
import diceImg4 from '../assets/images/dice4.png'
import diceImg5 from '../assets/images/dice5.png'
import diceImg6 from '../assets/images/dice6.png'

const diceImgs = [diceImg1, diceImg2, diceImg3, diceImg4, diceImg5, diceImg6]
function Dice() {
    const [dice, setDice] = useState(false)
    const diceImgHandler = () => {
        setTimeout(() => {
            setDice(dice => !dice)
            setTimeout(() => {
                setDice(dice => !dice)
            }, 1000)
        })
    }
    return (
        <img className="img" onClick={diceImgHandler} src={dice ? diceImg : diceImgs[Math.floor(Math.random() * diceImgs.length)]} alt='dice' />
    )
}

export default Dice;