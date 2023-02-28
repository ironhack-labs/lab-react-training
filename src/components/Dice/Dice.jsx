import './../Dice/Dice.css'
import empty from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'
import { useState } from 'react'



const Dice = () => {
    const [diceValue, setDiceValue] = useState(empty)
    const [rolling, setRolling] = useState(false)

    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]


    const switchDice = () => {
        if (!rolling) {
            setRolling(true)
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * diceArray.length)
                const randomDice = diceArray[randomIndex]
                setDiceValue(randomDice)
                setRolling(false)
            }, 500)
        }
    }


    return (

        <>
            <img className='dice' src={rolling ? empty : diceValue} alt="dice" onClick={switchDice} />
        </>
    )

}


export default Dice