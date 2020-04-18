import React, {Component} from 'react'
import './Dice.css'

class Dice extends Component {
    state ={
        dice: '../../img/dice/dice-empty.png'
    }

    changeDice = () => {
        let num = Math.floor(Math.random() * (Number(6) - Number(0)) + Number(0));
        let dices = ['../../img/dice/dice1.png','../../img/dice/dice2.png','../../img/dice/dice3.png','../../img/dice/dice4.png','../../img/dice/dice5.png', '../../img/dice/dice6.png']
        setTimeout(() => { 
            this.setState({
                dice: dices[num]
            }); 
        }, 1000);
        this.setState({
            dice: '../../img/dice/dice-empty.png'
        }); 
    }

    render(){
        return(
        <div>
            <img 
                className="dice" 
                onClick={this.changeDice} 
                src={this.state.dice} 
                alt="Dice">
            </img>
        </div>
        )
    }
}

export default Dice