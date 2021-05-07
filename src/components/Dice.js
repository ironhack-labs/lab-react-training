import React from 'react'

 class Dice extends React.Component {
    state = {
        count: 0,
    }
    diceImg = {
        0: '/img/dice-empty.png',
        1: '/img/dice1.png',
        2: '/img/dice2.png',
        3: '/img/dice3.png',
        4: '/img/dice4.png',
        5: '/img/dice5.png',
        6: '/img/dice6.png',
    }
    rollDice = () => {
        const randomNum = (min, max) => {
            return Math.round(Math.random() * (max - min) + min);
        }
        this.setState((state) => {
            return {
                count: 0
            }
        })
        setTimeout(() => {
            this.setState((state) => {
                return {
                    count: randomNum(1, 6)
                }
            })
        }, 1000)
    }
    render() {
        return (
            <img style={{width: '20%'}} onClick={this.rollDice} src={this.diceImg[this.state.count]} alt="dice"/>

        )
    }
}

export default Dice;