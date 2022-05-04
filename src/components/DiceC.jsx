import { useState } from 'react'
import '../styles/Dice.css'


const Dice = () => {

    const emptyDice = './images/dice-empty.png'
    let randomDice = Math.floor(Math.random() * (6 - 1) + 1)

    const [currentDice, setImage] = useState(`./images/dice${randomDice}.png`)

    const transition = () => {
        setImage(emptyDice)
        setTimeout(() => { setImage(`./images/dice${randomDice}.png`) }, 1000)
    }

    return (
        <img className='diceImg' src={currentDice} alt="iamgen cambiante" onClick={transition}></img>
    )
}

export default Dice