import React, {Component} from 'react';
import './style.css';

class Dice extends Component {

  state = {
    waiting: false,
  };

  _changeNumber = () => {
    this.setState({
      waiting: true,
    });

    setTimeout(() => {
      this.setState({
        waiting:false,
      })
    },1000);
  };

  _getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <div className={'dice'} onClick={this._changeNumber} style={{'backgroundImage': this.state.waiting ? 'url(./img/dice-empty.png)' : `url(./img/dice${this._getRandomNumber(1,6)}.png) `, 'backgroundSize': 'contain' }}>
      </div>
    );
  }
}

export default Dice;