import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import './Dice.css'
import {useState} from 'react'

function Dice () {
    const [ dice, setDice ] = useState(diceEmpty)

    let dices = [dice1, dice2, dice3, dice4, dice5, dice6];

    let giveDice = () => {
        let randomIndex = Math.floor(Math.random() * dices.length);
        let randomDices = dices[randomIndex];
        setTimeout(() => {setDice(randomDices)}, 1000);
    }
    return (
        <div className='dice'>
            <img className ='dice-img' src={dice} alt='img-dice' onClick={giveDice}/>
        </div>
    )
}

export default Dice;