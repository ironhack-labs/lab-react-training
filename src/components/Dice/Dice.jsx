import './Dice.css'
import diceEmpty from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'
import { useState } from 'react'

const Dice = () => {

    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]
    const random = diceArray[Math.floor(Math.random() * diceArray.length)]
    const [randomDice, setRandomDice] = useState(random)

    const changeDice = () => {
        setRandomDice(diceEmpty)
        const interval = setInterval(() => {
            const selectRandom = random
            setRandomDice(selectRandom)
            clearInterval(interval)
        }, 1000)
    }

    let imgSource = randomDice

    return <div className='Dice'>
        <img src={imgSource} alt="Dice" onClick={changeDice} />
    </div>

}

export default Dice