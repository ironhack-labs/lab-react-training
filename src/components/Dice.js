import React from 'react';

export default class Dice extends React.Component {
    state = {
      diceNum: Math.floor(Math.random() * 6) + 1
    }
  
    throwDice = () => {
      this.setState({ diceNum: '-empty' })
  
      setTimeout(() => {
        this.setState({ 
          diceNum: Math.floor(Math.random() * 6) + 1 
        })
      }, 1000);
    }
  
    render() {
      return (
        <div className="box">
            <div className="dice" onClick={this.throwDice}>
                <img src={`/img/dice${this.state.diceNum}.png`} alt="dice pic" width="150px" heigh="150px"/>
            </div>
        </div>
      )
    }
  }