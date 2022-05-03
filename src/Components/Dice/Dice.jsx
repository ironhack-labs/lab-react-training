import { useState } from 'react'
import './Dice.css'

const Dice = () => {

    const randomDice = Math.floor(Math.random() * 6) + 1

    const [showDice, setShowDice] = useState(`./assets/images/dice${randomDice}.png`)


    const toggleDice = () => {
        setShowDice("./assets/images/dice-empty.png")
    
        setTimeout(() => {
            setShowDice(`./assets/images/dice${randomDice}.png`);
        }, 1000);
    }
 
    return (
        <button onClick={toggleDice}><img className='diceimg' src={showDice}></img></button>
    )

}

export default Dice