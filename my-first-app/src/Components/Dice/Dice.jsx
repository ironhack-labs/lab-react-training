import { useState } from 'react'
import dice1 from '../../assets/dice1.png'
import dice2 from '../../assets/dice2.png'
import dice3 from '../../assets/dice3.png'
import dice4 from '../../assets/dice4.png'
import dice5 from '../../assets/dice5.png'
import dice6 from '../../assets/dice6.png'



const Dice = () => {

    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]

    const [dice, setDice] = useState(dices[0])

    const renderRandom = () => {
        const randomNum = Math.floor(Math.random() * (dices.length - 1))

        setDice(dices[randomNum])
    }
    console.log(dice)

    return (
        <div onClick={renderRandom}>
            <img width='20%' src={dice} alt="" />

        </div>
    )
}

export default Dice