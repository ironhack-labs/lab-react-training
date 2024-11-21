import { useState } from 'react';
import diceEmpty from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'


const Dice = () => {
    const arrayDice = [dice1, dice2, dice3, dice4, dice5, dice6]
    const [diceThrow, setDiceTrhow] = useState(diceEmpty)
    const randomDice = arrayDice[Math.floor(Math.random() * arrayDice.length)];

    const handleClick = () => {
        setDiceTrhow(diceEmpty)
        setTimeout(() => {
            return setDiceTrhow(randomDice)
        }, 1000)

    }

    return (
        <img className='dice' style={{ width: '100px' }}
            src={diceThrow}
            onClick={handleClick} />
    )
}


export default Dice;