import dice0 from './../../assets/dice-empty.png'
import dice1 from './../../assets/dice1.png'
import dice2 from './../../assets/dice2.png'
import dice3 from './../../assets/dice3.png'
import dice4 from './../../assets/dice4.png'
import dice5 from './../../assets/dice5.png'
import dice6 from './../../assets/dice6.png'
import './Dice.css'
import { useState } from 'react'

const Dice = () => {

    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
    let randomNumber = Math.floor(Math.random() * 6)

    const [value, setValue] = useState(dices[randomNumber])

    const handleValue = () => {

        setValue(dice0)
        setTimeout(() => {
            const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
            let randomNumber = Math.floor(Math.random() * 6);
            setValue(dices[randomNumber])
        }, 1000)
    }

    return (
        <img src={value} alt="Dice" onClick={handleValue} />
    )
}

export default Dice