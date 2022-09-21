import { useState } from "react"
import emptyDice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

const Dice = (props) => {
    const [dice, setDice] = useState(emptyDice)

    const roll = () => {

        setDice(emptyDice)

        setTimeout(() => {


            let random = Math.floor(Math.random(1) * 6 + 1)
            if (random === 1) { return setDice(dice1) }
            if (random === 2) { return setDice(dice2) }
            if (random === 3) { return setDice(dice3) }
            if (random === 4) { return setDice(dice4) }
            if (random === 5) { return setDice(dice5) }
            if (random === 6) { return setDice(dice6) }

        }, 1000)
    }
    return (
        <>
            <img onClick={(roll)} src={dice} />
        </>
    )
}

export default Dice