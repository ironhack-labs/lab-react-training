import React, { Component } from "react";

//Iteration 10
class Dice extends Component {
    state = {
        counter: 0
    }
    
    handleClick = () => {
        this.setState(({ clicked }) => ({ clicked: !clicked }))
      }

    render() {

    let number = Math.floor(Math.random() * (6 - 1) + 1);
    let imgsrc = `/img/dice${number}.png`;
              return (
                  <img onClick={this.handleClick} src={imgsrc} style={{ width: `50px`}}></img>
              )
          }
}

export default Dice;
