import diceEmpty from '../../assets/images/dice-empty.png'
import diceImg1 from '../../assets/images/dice1.png'
import diceImg2 from '../../assets/images/dice2.png'
import diceImg3 from '../../assets/images/dice3.png'
import diceImg4 from '../../assets/images/dice4.png'
import diceImg5 from '../../assets/images/dice5.png'
import diceImg6 from '../../assets/images/dice6.png'

import './Dice.css'
import { useState } from 'react'
import { useEffect } from 'react'


const Dice = () => {

    const diceImages = [diceEmpty, diceImg1, diceImg2, diceImg3, diceImg4, diceImg5, diceImg6]
    const [dicImg, setDiceImg] = useState(diceEmpty)

    useEffect(() => {
        if (dicImg === diceEmpty) {
            setTimeout(diceRoll, 1000)
        }

    });

    const diceRoll = () => {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        console.log(randomNumber);

        setDiceImg(diceImages[randomNumber])

    }

    const diceHandler = () => {
        setDiceImg(diceEmpty)
    }

    return (
        <img className='Dice' onClick={diceHandler} src={dicImg} alt='' />
    )

}

export default Dice;