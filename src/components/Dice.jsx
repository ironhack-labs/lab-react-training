import React from 'react';
import './Dice.css';

class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.imgs = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png', '/img/dice-empty.png']
        this.state = {
            picture: this.imgs[Math.floor(Math.random() * 5)]
        }
    }

    getRandomPicture() {
        const randomNum = Math.floor(Math.random() * 5);
        setTimeout(() => {
            this.setState({
                picture: this.imgs[randomNum]
            });
        }, 1000);
        this.setState({
            picture: this.imgs[6]
        });
    }

    render() {
        return (
            <div className="diceImg" onClick={() => this.getRandomPicture()}><img src={this.state.picture}></img></div>
        );
    }
}

export default Dice