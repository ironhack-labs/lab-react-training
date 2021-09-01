import React from 'react';
import "./Dice.css";

export default class Dice extends React.Component {
    state = {
        diceImg: '/img/dice3.png',
         status: true
      };
    
      onRandom = () => {
        this.setState({
            status: !this.state.status,
            diceImg: '/img/dice-empty.png'
        })
    
        setTimeout(() => {
          this.setState({status: true})  
          let randomNumber = Math.floor(Math.random()*6)+1
          this.setState({
              diceImg: `img/dice${randomNumber}.png`
          })
      },1000)
    }
    
      render() {
        return (
            <img
              className="Dice"
              onClick={this.onRandom}
              src={this.state.diceImg}
              alt="Dice picture"
            />
        );
      }
}