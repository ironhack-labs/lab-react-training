import './Dice.css'
import { useState } from "react";
import dice3 from '../../assets/images/dice3.png';
import diceEmpty from '../../assets/images/dice-empty.png';
import dice6 from '../../assets/images/dice6.png';

const Dice = () => {
    const dado = [dice3, diceEmpty, dice6];
    const [positionDice, setPositionDice] = useState(dado[0]);

    const clickDice = () => {
        setTimeout(()=>{
            setPositionDice(dado[2])
        }, 500)
        setPositionDice(dado[1]);
    }
    
    return(
        <div className="imgDice">
            <img src={positionDice} onClick={e => clickDice()} alt="Dice" />
        </div>
    );
};

export default Dice;