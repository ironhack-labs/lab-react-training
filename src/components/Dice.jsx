import React from 'react';
import './Dice.css';

export default class Dice extends React.Component {
    constructor() {
        super()
        this.imgs = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png', '/img/dice-empty.png']
        this.state = {
            pic: this.imgs[0]
        }
    }

    getRandomPic() {
        const randomNum = Math.floor(Math.random() * 5);
        setTimeout(() => {
            this.setState({
                pic: this.imgs[randomNum]
            });
        }, 1000);
        this.setState({
            pic: this.imgs[6]
        });
    }

    render() {
        return (
            <button className="diceImg" onClick={() => this.getRandomPic()}><img src={this.state.pic}></img></button>
        );
    }
}