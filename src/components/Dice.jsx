import './Dice.css'
import { useState } from 'react'

import dice1 from './../assets/images/dice1.png'
import dice2 from './../assets/images/dice2.png'
import dice3 from './../assets/images/dice3.png'
import dice4 from './../assets/images/dice4.png'
import dice5 from './../assets/images/dice5.png'
import dice6 from './../assets/images/dice6.png'
import dice from './../assets/images/dice-empty.png'

const Dice = () => {

    const [random, setRandom] = useState(0)

    const dices = [dice, dice1, dice2, dice3, dice4, dice5, dice6]

    const handlerClick = () => {
        setRandom(Math.floor(Math.random() * dices.length))

    }

    return (
        <article >

            <img onClick={handlerClick} src={dices[random]} ></img>


        </article>
    )
}

export default Dice

