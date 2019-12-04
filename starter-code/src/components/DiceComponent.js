import React, { Component } from 'react';
import { Dices } from '../styles/components';

const arrDices = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png', 'dice6.png'];


export default class DiceComponent extends Component {
    state = {
        imgE: './../../img/dice-empty.png',
    };

    randomImg = () => {
        let selected = '';
        let randomNum = Math.floor(Math.random() * 6 );

        selected = `./../../img/${arrDices[randomNum]}`;
        this.setState({
            imgE: selected,
        });

    }


    render() {
        return(
            <Dices onClick={this.randomImg}>
                <img src={this.state.img} alt="Dice"/>
            </Dices>
        )
    }
} 