import React from 'react';

export default class Dice extends React.Component {
    constructor(state, props) {
        super(props);
        this.diceLookup = {
            0:"/img/dice-empty.png",
            1:"/img/dice1.png.png",
            2:"/img/dice2.png.png",
            3:"/img/dice3.png.png",
            4:"/img/dice4.png.png",
            5:"/img/dice5.png.png",
            6:"/img/dice6.png.png"
        }
        this.state = {
            dice:0
        }
      }
      clickHandler = () => {
        this.setState({
            dice: diceRoll()
        })
       
      };
      
  render() {
    return (
      <div className="Dice">
        <img onClick={this.clickHandler}  src={this.diceLookup[this.state.dice]} alt="piccy"/>
      </div>
    );
  }
}

function diceRoll(){
    return Math.floor(Math.random() * 6) + 1
}
