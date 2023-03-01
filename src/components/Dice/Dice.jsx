import { useState } from 'react'
import '../Dice/Dice.css'
import diceEmpty from './../../assets/images/dice-empty.png'
import diceOne from './../../assets/images/dice1.png'
import diceTwo from './../../assets/images/dice2.png'
import diceThree from './../../assets/images/dice3.png'
import diceFour from './../../assets/images/dice4.png'
import diceFive from './../../assets/images/dice5.png'
import diceSix from './../../assets/images/dice6.png'

const diceTotal = []
diceTotal.push(diceEmpty)
diceTotal.push(diceOne)
diceTotal.push(diceTwo)
diceTotal.push(diceThree)
diceTotal.push(diceFour)
diceTotal.push(diceFive)
diceTotal.push(diceSix)

const Dice = () => {



    const [imageSrc, setImageSrc] = useState(diceEmpty)
    const [isRolling, setIsRolling] = useState(false)


    const rollDice = () => {
        setIsRolling(true)
        setImageSrc(diceEmpty)
        setTimeout(() => {
            const min = 1
            const max = 6
            const index = Math.floor(Math.random() * ((max - min) + 1) + min)
            setImageSrc(diceTotal[index])
            setIsRolling(false)
        }, 1000)
    }


    return (
        <div className="Dice">

            <img src={imageSrc} onClick={!isRolling ? rollDice : undefined} alt="" />
        </div>
    )
}

export default Dice