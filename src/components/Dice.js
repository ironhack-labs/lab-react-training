import React from 'react';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.dices = ["dice-empty", "dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];
    this.state = {
        dice: this.dices[3],
    };
  }

  clickHandler = () => {
      const randDice = Math.floor(Math.random() * 6) + 1;
      setTimeout(() => {
        this.setState(() => ({
            dice: this.dices[0]
        }))
      }, 1)
      setTimeout(() => {
        this.setState(() => ({
            dice: this.dices[randDice]
        }))
      }, 1000)
  }

  render() {
    return (
      <div className="clickablePicture">
        <img
          onClick={this.clickHandler}
          src={`/img/${this.state.dice}.png`}
          alt="dice"
        />
      </div>
    );
  }
}

export default Dice;
