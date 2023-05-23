import { useState } from 'react'
import diceD from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

const Dice = () => {

    const [DiceValue, setDiceValue] = useState(diceD)

    const changeImg = () => {
        let numRandom = Math.floor(Math.random() * (5 + 1))
        const dice = [dice1, dice2, dice3, dice4, dice5, dice6]
        setDiceValue(dice[numRandom])
        setTimeout(() => {
            setDiceValue(diceD)
        }, 1000)

    }

    return (
        <>
            <img onClick={changeImg} src={DiceValue} alt="dice" style={{ width: 250 }} />
        </>
    )
}

export default Dice