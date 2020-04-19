import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    state = {
        imgToDisplay: `img/dice${Math.round(Math.random() * 5 + 1)}.png`
    }

    changeValue = () => {
        setTimeout(() => {
            this.setState({
                imgToDisplay: 'img/dice-empty.png'
            })
        }, 1);

        const imgNumber = Math.round(Math.random() * 5 + 1);
        const imgRandom = `img/dice${imgNumber}.png`;

        setTimeout(() => {
            this.setState({
                imgToDisplay: imgRandom
            })
        }, 1000);
    };

    render() {
        return (
            <img className='Dice' src={this.state.imgToDisplay} alt='' onClick={this.changeValue} />
        );
    }
}

export default Dice;