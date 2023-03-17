import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

import { useState } from 'react';

function Dice () {
    const dadoVazio = diceEmpty;
    const [dado, setDado] = useState(dadoVazio);
    const dadoArr = [dice1, dice2, dice3, dice4, dice5, dice6]
    const numberDiceRandom = (max) => {
        return Math.floor(Math.random() * max)
    } 
    const jogarDado = () => {
        setDado(dadoVazio)
        setTimeout(() => {
            const dadoAleatorio = numberDiceRandom(dadoArr.length);
            setDado(dadoArr[dadoAleatorio]);
        }, 1000);

    }
    return(
        <div>
            <img className='dado' src={dado} onClick={jogarDado} alt='dado' />
        </div>
    );
};

export default Dice;