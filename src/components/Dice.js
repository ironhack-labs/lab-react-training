import React, { Component } from 'react';

class Dice extends Component {

    state = {
        dice: this.getRandomDice()
    }

    getRandomDice() {
        return `./img/dice${Math.round(Math.random() * (6 - 1) + 1)}.png`
    }

    render() {

        return (
            <div className='diceCont'>
                <img src={this.state.dice} onClick={
                    (e) => {
                        this.setState({
                            dice: './img/dice-empty.png'
                        });
                        setTimeout(() => {
                            this.setState({
                                dice: this.getRandomDice()
                            });
                        }, 1000);
                    }
                }/>
            </div>
        )

    }

}

export default Dice;