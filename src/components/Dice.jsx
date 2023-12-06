import { useState } from 'react'
import './Dice.css'
import empty from './../assets/images/dice-empty.png'
import one from './../assets/images/dice1.png'
import two from './../assets/images/dice2.png'
import three from './../assets/images/dice3.png'
import four from './../assets/images/dice4.png'
import five from './../assets/images/dice5.png'
import six from './../assets/images/dice6.png'

const Dice = () => {

    const diceArray = [ one, two, three, four, five, six ]

    const [face, setFace] = useState(empty)

    const random = diceArray[Math.floor(Math.random() * diceArray.length)]

    const handleClick = () => {
        setFace(empty)

        setTimeout(() => {
            return setFace(random)
        },1000)
    }

    return (
        <img
            src={face}
            onClick={handleClick}
            className="dice"
            alt="dice"
        />
    )
}

export default Dice