import React from 'react';

class Dice extends React.Component {

    state = {
        dice: '/img/dice1.png'
    }

    randomDice = () => {
        this.setState({
            dice: `/img/dice${Math.floor(Math.random() * (6 - 1 + 1) + 1)}.png`
        })

    }

    clickHandler = () => {
        setTimeout(() => {
            this.setState({
                dice: '/img/dice-empty.png'
            })
        }, 1)
        setTimeout(() => {
            this.randomDice()
        }, 1000)
    }

    render() {
        return (
            <div>
                <img onClick={this.clickHandler} src={this.state.dice} alt='dice' />
            </div>
        )
    }
}

export default Dice;