import { useState } from 'react'
import './Dice.css'
import empty from './../../assets/images/dice-empty.png'
import one from './../../assets/images/dice1.png'
import two from './../../assets/images/dice2.png'
import three from './../../assets/images/dice3.png'
import four from './../../assets/images/dice4.png'
import five from './../../assets/images/dice5.png'
import six from './../../assets/images/dice6.png'

const Dice = () => {


    const [dice, setDice] = useState(empty)
    const diceArray = [one, two, three, four, five, six]

    const rollDice = () => {
        setDice(empty)




        const diceInterval = setInterval(() => {
            const randomDice = diceArray[Math.floor(6 * Math.random()) + 1]
            setDice(randomDice)
            clearInterval(diceInterval)
        }, 1000)

    }


    return (

        <div className='Dice'>
            <img src={dice} onClick={rollDice} alt="" />
        </div>

    )
}
export default Dice