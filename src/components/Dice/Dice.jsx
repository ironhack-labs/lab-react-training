import { useState } from 'react';
import diceImageEmpty from '../../assets/images/dice-empty.png'
import diceImage1 from '../../assets/images/dice1.png'
import diceImage2 from '../../assets/images/dice2.png'
import diceImage3 from '../../assets/images/dice3.png'
import diceImage4 from '../../assets/images/dice4.png'
import diceImage5 from '../../assets/images/dice5.png'
import diceImage6 from '../../assets/images/dice6.png'



const Dice = () => {
    const [dice, setDice] = useState(diceImageEmpty)

    const rollDice = () => {

        setDice(diceImageEmpty)

        setTimeout(() => {

            let randomNumber =  Math.floor(Math.random()*(6))
            randomNumber === 1 ? setDice(diceImage1) 
            : randomNumber === 2 ? setDice(diceImage2)
            : randomNumber === 3 ? setDice(diceImage3)
            : randomNumber === 4 ? setDice(diceImage4)
            : randomNumber === 5 ? setDice(diceImage5)
            : setDice(diceImage6)
    }, 1000);        
    }

    return(
        <div>
        <img onClick={rollDice} src={dice} alt="dice"/>
        </div>
    )
}

export default Dice;