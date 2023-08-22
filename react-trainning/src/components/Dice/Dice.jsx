import { useState } from 'react'
import Dice1 from './../../../public/img/dice1.png'
import Dice2 from './../../../public/img/dice2.png'
import Dice3 from './../../../public/img/dice3.png'
import Dice4 from './../../../public/img/dice4.png'
import Dice5 from './../../../public/img/dice5.png'
import Dice6 from './../../../public/img/dice6.png'
import DiceEmpty from './../../../public/img/dice-empty.png'

const Dice = () => {

    const dice = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

    const [currentDice, setCurrentDice] = useState(dice[Math.floor(Math.random() * 6)])

    const handleDices = () => {

        setCurrentDice(DiceEmpty)

        setTimeout(() => {
            const random = Math.floor(Math.random() * 6)
            setCurrentDice(dice[random])
        }, 1000)
    }

    return (

        <>

            <div onClick={handleDices}>
                <img src={currentDice} alt="dice" style={{ width: '10%', height: '10%' }} />
            </div>

        </>

    )
}

export default Dice