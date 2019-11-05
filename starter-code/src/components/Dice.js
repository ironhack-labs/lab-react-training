import React, { Component } from 'react';

class Dice extends Component {
    state = {
        diceImg: `./img/dice${Math.floor(Math.random() * 6) + 1}.png`
    }
    
    clickedDice = () => {
        this.setState ({
            diceImg: './img/dice-empty.png'
        })
        setTimeout(() => {
            this.setState({
                diceImg: `./img/dice${Math.floor(Math.random() * 6) + 1}.png`
            })
          }, 1000)
    }

    render () {
        return(
            <img 
                className="m-3"
                style={{width: '100px'}}
                onClick={this.clickedDice}
                src={this.state.diceImg}
                alt={this.state.diceImg}
            />
        )
    }
}

export default Dice;