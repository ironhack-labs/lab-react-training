import React from 'react';

class Dice extends React.Component {
  state = {
    imgToDisplay: Math.floor(Math.random() * (6 - 1 + 1)) + 1
  }

  rollDice = () => {
    setTimeout(() => {
      this.setState({
        imgToDisplay: '-empty'
      }, () => {
        setTimeout(() => {
          this.setState({
            imgToDisplay: Math.floor(Math.random() * (6 - 1 + 1)) + 1
          })
        },1000);
      })
    },1);
  }

  render() {
    return(
      <div>
        <img width={150} src={`/img/dice${this.state.imgToDisplay}.png`} alt="bla" onClick={this.rollDice} />
      </div>
    );
  }
}

export default Dice;
