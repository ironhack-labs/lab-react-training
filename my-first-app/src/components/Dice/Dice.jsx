import './Dice.css'
import dice from './../../assets/dice-empty.png'
import dice1 from './../../assets/dice1.png'
import dice2 from './../../assets/dice2.png'
import dice3 from './../../assets/dice3.png'
import dice4 from './../../assets/dice4.png'
import dice5 from './../../assets/dice5.png'
import dice6 from './../../assets/dice6.png'
import { useState } from 'react'



const Dice = () => {

    const dicesArray = [dice1, dice2, dice3, dice4, dice5, dice6]
    const randomDice = dicesArray[Math.floor(Math.random() * dicesArray.length)]

    const [clickDice, setClickDice] = useState(dice)

    const handleDice = () => {
        setClickDice(dice)

        setTimeout(() => {
            setClickDice(randomDice)
        }, 1000)

    }
    return (
        <div onClick={handleDice}>
            <img src={clickDice} alt="" className="dicepic" />
        </div>
    )

}

export default Dice