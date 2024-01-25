import { useState } from "react";
import diceEmpty from "./../assets/images/dice-empty.png";
import diceOne from "./../assets/images/dice1.png";
import diceTwo from "./../assets/images/dice2.png";
import diceThree from "./../assets/images/dice3.png";
import diceFour from "./../assets/images/dice4.png";
import diceFive from "./../assets/images/dice5.png";
import diceSix from "./../assets/images/dice6.png";

function Dice() {

    const [actualDice, setActualDice] = useState(diceThree);

    const diceArr = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

    const getRandomDice = () => {
        setActualDice(diceEmpty);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * diceArr.length);
            setActualDice(diceArr[randomIndex]);
        }, 1000);
    }

    const buttonStyle = {
        width: "25%"
    }

    const imgStyle = {
        width: "100%"
    }

    return (
        <div>
            <button onClick={getRandomDice} style={buttonStyle}>
                <img src={actualDice} style={imgStyle} />
            </button>
        </div>
    );
}

export default Dice;