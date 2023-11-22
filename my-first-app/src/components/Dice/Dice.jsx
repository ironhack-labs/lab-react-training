import { useState } from 'react'
import diceCero from '../../assets/dice-empty.png'
import diceOne from '../../assets/dice1.png'
import diceTwo from '../../assets/dice2.png'
import diceThree from '../../assets/dice3.png'
import diceFour from '../../assets/dice4.png'
import diceFive from '../../assets/dice5.png'
import diceSix from '../../assets/dice6.png'
const diceImages = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

const Dice = () => {
    const [diceImage, setDiceImage] = useState(diceCero)

    const rollDice = () => {
        setDiceImage(diceCero)

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * diceImages.length)
            const randomDiceImage = diceImages[randomIndex]
            setDiceImage(randomDiceImage)
        }, 1000)
    }

    return (
        <div className='Dice' onClick={rollDice}>
            <img src={diceImage} alt='dice' style={{ width: '100px', height: '100px' }} />
        </div>
    )
}

export default Dice