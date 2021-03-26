import React from 'react';
import '../assets/css/Dice.css'

export default class Dice extends React.Component {
    state = {
        img: '/img/dice6.png'
    }

    handleClick = () => {
        this.setState({
            img: '/img/dice-empty.png'
        })
        const num = Math.round(Math.random() * (6 - 1) + 1);
        setTimeout(() => this.setState({
            img: `/img/dice${num}.png`
        }), 1000)
        console.log(this.state.img)
    }

    render() {
        return (
            <button onClick={this.handleClick} className='Dice'>
                <img src={this.state.img} />
            </button>)
    }
}