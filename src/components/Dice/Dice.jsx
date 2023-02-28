import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

import { useState } from 'react'
import './Dice.css'

const Dice = () => {

    const [randomDice, setRandomDice] = useState(dice3)

    const diceArr = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]

    let rndImage
    const getRandomDice = () => {

        let newRnd = Math.floor(Math.random() * (1 - 7) + 7)

        setRandomDice(diceEmpty)

        const rndImage = diceArr[newRnd]

        setTimeout(() => setRandomDice(rndImage), 1000)
    }

    return (
        <>
            <figure>
                <img className='dice' onClick={getRandomDice} src={randomDice} alt="" />
            </figure>
        </>
    )
}

export default Dice