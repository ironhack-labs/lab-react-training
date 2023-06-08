import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

function Dice() {

    const randomDice = (() => {
        const min = 0;
        const max = 6;
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        let diceImg = document.getElementById('dice-img');

         switch(randomNumber){
            case 0:
                diceImg.src={diceEmpty}
            break;
            case 1:
                diceImg.src={dice1}
            break;
            case 2:
                diceImg.src={dice2}
            break;
            case 3:
                diceImg.src={dice3}
            break;
            case 4:
                diceImg.src={dice4}
            break;
            case 5:
                diceImg.src={dice5}
            break;
            case 6:
                diceImg.src={dice6}
            break;
         }
    })

    return (
      <div className="dice-box">
        <img src="" alt="dice" id="dice-img" />
      </div>
    );
  }
  
  export default Dice;
