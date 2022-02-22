import { useState } from "react"

import emptyDice from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

const Dice = () => {

    const [showDice, setShowDice] = useState(dice1)
    const allDices = [dice1, dice2, dice3, dice4, dice5, dice6]



    const randomDice = allDices[Math.floor(Math.random() * allDices.length)]

    function getRandomDice() {
        setShowDice(emptyDice)
        setTimeout(() =>{setShowDice(randomDice)}, 1000)
    }

    return (
        <div>
            <img style={{ width: 400 }} src={showDice} onClick={() => getRandomDice()}></img>
        </div>

    )
}

export default Dice