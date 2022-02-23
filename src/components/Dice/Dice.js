import './Dice.css'
import diceEmpty from '../../assets/images/dice-empty.png'
import diceOne from '../../assets/images/dice1.png'
import diceTwo from '../../assets/images/dice2.png'
import diceThree from '../../assets/images/dice3.png'
import diceFour from '../../assets/images/dice4.png'
import diceFive from '../../assets/images/dice5.png'
import diceSix from '../../assets/images/dice6.png'
import { useState } from 'react'



const Dice = () => {
    const [image, setImage] = useState(diceThree)

    const dice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

    const randomNumber = Math.floor(Math.random() * dice.length)

    const changePicture = () => {
        setImage(diceEmpty)
        const interval = setInterval(() => {
            const randomDice = dice[randomNumber]
            setImage(randomDice)
            clearInterval(interval)
        }, 1000)

    }


    return (
        <div className='dice'>

            <h1>Click on the dice and get a random number</h1>

            <img src={image} onClick={changePicture} alt="dice" />
        </div>

    )

}

export default Dice