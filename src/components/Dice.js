import React from 'react';
import '../assets/css/Dice.css'

class Dice extends React.Component {
    state = {
        value: `./img/dice${Math.ceil(Math.random() * 6)}.png`
    }

    rollDice = () => {
        setTimeout( () => {
            this.setState({
                value: './img/dice-empty.png'
            })
        }, 1)

        setTimeout( () => {
            this.setState({
                value: `./img/dice${Math.ceil(Math.random() * 6)}.png`
            })
        }, 1000)
    }

    render() {
        return(
            <img
                className='Dice' 
                src={this.state.value}
                onClick={this.rollDice}
                alt=''
            />
        )
    }
}

export default Dice;