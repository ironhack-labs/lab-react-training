import { useState } from 'react'
import './Dice.css'
import Empty from '../../assets/images/dice-empty.png'
import one from '../../assets/images/dice1.png'
import two from '../../assets/images/dice2.png'
import three from '../../assets/images/dice3.png'
import four from '../../assets/images/dice4.png'
import five from '../../assets/images/dice5.png'
import six from '../../assets/images/dice6.png'

const Dice = () => {


    const [DiceFace, setDiceFace] = useState(Empty)
    const diceArray = [one, two, three, four, five, six]
    let randomDice = diceArray[Math.floor(Math.random() * diceArray.length)]
    const DiceHandler = () => {
        const intervalId = setInterval(() => {
            clearInterval(intervalId)
            setDiceFace(randomDice);
        }, 1000);
        setDiceFace(intervalId)
        setDiceFace(Empty)

    }
    return (
        <img className='img' onClick={DiceHandler} src={DiceFace} alt="" />
    )
}

export default Dice