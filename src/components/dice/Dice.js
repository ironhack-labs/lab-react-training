import './Dice.css'
import { useState } from 'react'
import diceE from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'




const Dice = () => {

    const dices = [diceE, dice1, dice2, dice3, dice4, dice5, dice6]

    const [showDice, setDice] = useState(diceE)

    const timer = () => { 

        setDice(diceE)
        setTimeout(() => {
        setDice(setRandom())
    }, 1000) }

    

    const setRandom = () => {    
        
        return dices[Math.floor(Math.random() * (dices.length - 1) + 1)]

    }

    return (
        <div className='Dice'>

            <figure>
                <img onClick={() => timer()} src={showDice}></img>
            </figure>


        </div>
    )
}

export default Dice