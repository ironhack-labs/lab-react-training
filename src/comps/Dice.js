// imports
import React from 'react';

//components
class Dice extends React.Component {
  state = {
    numberImg: 1,
  };
  changeImg = () => {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    this.setState({ numberImg: '-empty' });
    setTimeout(() => {
      this.setState({ numberImg: randomNum });
    }, 500);
  };
  render() {
    return (
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + `/img/dice${this.state.numberImg}.png`}
          alt="DICE"
          onClick={() => this.changeImg()}
        />
      </div>
    );
  }
}

// exports
export default Dice;
