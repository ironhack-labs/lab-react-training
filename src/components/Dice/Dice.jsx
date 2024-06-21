import DiceEmty from '../../assets/images/dice-empty.png'
import Dice1 from '../../assets/images/dice1.png'
import Dice2 from '../../assets/images/dice2.png'
import Dice3 from '../../assets/images/dice3.png'
import Dice4 from '../../assets/images/dice4.png'
import Dice5 from '../../assets/images/dice5.png'
import Dice6 from '../../assets/images/dice6.png'
import './Dice.css'
import { useState } from 'react'

const Dice = () => {

    const [imgDice, setImgDice] = useState(DiceEmty)

    const playDice = () => {

        const dice = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
        const indexRandom = dice[Math.floor(Math.random() * dice.length)]

        setTimeout(() => setImgDice(indexRandom), 1000);

    }

    return (
        <>
            <h1>dado random</h1>
            <figure>
                <img className='imgDice'
                    onClick={playDice}
                    src={imgDice} alt="" />
            </figure>

        </>

    )

}
export default Dice