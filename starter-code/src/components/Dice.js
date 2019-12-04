import React, { Component } from 'react';
import { Dice } from '../styles/components';

const images = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png', 'dice6.png'];

export default class DiceComponent extends Component {
    state = {
        img: '/img/dice-empty.png',
    };
    
    randomImg = () => {
        let selected = '';
        let randomNum = Math.floor(Math.random() * 6 );
        
        selected = `/img/${images[randomNum]}`;
        this.setState({
            img: selected,
        });

        console.log(this.state)

    }
    

    render() {
        return(
            <Dice onClick={this.randomImg}>
                <img src={this.state.img} alt="Dice"/>
            </Dice>
        )
    }
}