import { useState } from 'react';
import './Dice.css'
import emptyDice from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

function Dice() {

    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    function randomImages() {
        const randomImgs = Math.floor(Math.random() * diceImages.length);
        return diceImages[randomImgs];
    }
    
    const [dice, setDice] = useState(dice2);

    function handleClick() {
        setDice(emptyDice)
        const randomDice = randomImages()
        setTimeout(() => {
            setDice(randomDice)
        }, 1000);
    }

    return (
        <div>
            <img className="dice" src={dice} onClick={handleClick} />
        </div>
    );
}
export default Dice;