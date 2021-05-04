import React from 'react';

class Dice extends React.Component {

  state = {
    dice: 1,
  };

  setDice() {
    this.setState({dice: `-empty`})
    setTimeout(() => {
    this.setState({dice:Math.floor(Math.random() * 6 + 1)}); 
    }, 1000);
  }

  render() {
    return (
      <div className="dice">
        <img
          src={process.env.PUBLIC_URL + `/img/dice${this.state.dice}.png`}
          alt=""
          onClick={()=>this.setDice()}
        />
      </div>
    );
  }
}

export default Dice;
