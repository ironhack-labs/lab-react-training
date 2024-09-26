import { useState } from 'react'
import DiceEmpty from '../../assets/images/dice-empty.png'
import Dice1 from '../../assets/images/dice1.png'
import Dice2 from '../../assets/images/dice2.png'
import Dice3 from '../../assets/images/dice3.png'
import Dice4 from '../../assets/images/dice4.png'
import Dice5 from '../../assets/images/dice5.png'
import Dice6 from '../../assets/images/dice6.png'

const Dice = () => {
    const DiceArray = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
    const [clicked, setDice] = useState(DiceEmpty)
    const randomElement = DiceArray[Math.floor(Math.random() * DiceArray.length)];
    const HandleClick = () => {
        setTimeout(() => {
            setDice(randomElement)
        }, 1000)
    }
    return (
        <>
            <img src={clicked} onClick={HandleClick} style={{ width: '300px' }} />
        </>
    )
}
export default Dice