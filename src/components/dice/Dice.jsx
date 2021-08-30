import React from 'react';
import './Dice.css';

export default class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  onClick = (e) => {
    this.setState({ clicked: true });
    setTimeout(() => this.setState({ clicked: false }), 1000);
  };

  render() {
    const getDice = () => {
      if (this.state.clicked === false) {
        const number = Math.floor(Math.random() * 6 + 1);
        return `/img/dice${number}.png`;
      } else return '/img/dice-empty.png';
    };

    return (
      <div className="Dice">
        <img onClick={this.onClick} src={getDice()} alt="Dice" />
      </div>
    );
  }
}
