import { Component } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

import './Dice.css';

function randomDice() {
    const dice = [ dice1, dice2, dice3, dice4, dice5, dice6 ];
    const randomNumber = Math.floor( Math.random() * 6);
    return  dice[ randomNumber ];
}

class Dice extends Component {
    state = {
        dice: randomDice()
    }

    onChangeDice = async () => {
        this.setState(
            {
                ...this.state,
                dice: diceEmpty
            }
        )

        await setTimeout( () => {
            this.setState(
                {
                    ...this.state,
                    dice: randomDice()
                }
            )
        }, 1000);
    }

    render() {
        return <img className='dice' src={ this.state.dice } alt="dice" onClick={ this.onChangeDice } />;
    } 
}

export default Dice;