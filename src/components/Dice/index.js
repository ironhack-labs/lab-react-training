import React from 'react';
import './index.css';
import diceEmpty from '../../assets/images/dice-empty.png';
import diceOne from '../../assets/images/dice1.png';
import diceTwo from '../../assets/images/dice2.png';
import diceThree from '../../assets/images/dice3.png';
import diceFour from '../../assets/images/dice4.png';
import diceFive from '../../assets/images/dice5.png';
import diceSix from '../../assets/images/dice6.png';

class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: diceThree
        }
    }

    handleRandomFace = () => {
        const diceFaces = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]
        const randomIndexFace = Math.floor(Math.random() * diceFaces.length)
        this.setState({
            image: diceEmpty
        })
        setTimeout(() => {
            this.setState({
                image: diceFaces[randomIndexFace]
            })
        }, 1000)
    }

    render() {
        return (
            <div className='Dice'>
                <button onClick={this.handleRandomFace}>
                    <img src={this.state.image} />
                </button>
            </div>
        )
    }
}

export default Dice;