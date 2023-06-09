import { useState } from "react"
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

function Dice() {
    const diceArray = [
        diceEmpty,
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6,
    ];

    const [ diceImgSrc, setDiceImgSrc ] = useState(diceArray[0]);

    const randomDice = (() => {
        const min = 0;
        const max = 6;
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("RANDOM NR", randomNumber);
        return diceArray[randomDice];
    });

    //     let diceImg = document.getElementById('dice-img');

    //      switch(randomNumber){
    //         case 0:
    //             diceImg.src={diceEmpty}
    //         break;
    //         case 1:
    //             diceImg.src={dice1}
    //         break;
    //         case 2:
    //             diceImg.src={dice2}
    //         break;
    //         case 3:
    //             diceImg.src={dice3}
    //         break;
    //         case 4:
    //             diceImg.src={dice4}
    //         break;
    //         case 5:
    //             diceImg.src={dice5}
    //         break;
    //         case 6:
    //             diceImg.src={dice6}
    //         break;
    //      }
    // })
    const rollDice = () => {
        setTimeout(() => {
            setDiceImgSrc(randomDice());
        }, 1000);
      };

    return (
      <div className="dice-box flex-center">
        <img src={diceImgSrc} alt="dice" id="dice-img" onClick={rollDice} />
      </div>
    );
  }
  
  export default Dice;
