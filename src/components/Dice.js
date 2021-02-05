import React from 'react';
import './Dice.css';
// import dice from '../imgs/dice-empty.png';

class Dice extends React.Component {
  state = {
    faces: [
      require('../imgs/dice1.png'),
      require('../imgs/dice2.png'),
      require('../imgs/dice3.png'),
      require('../imgs/dice4.png'),
      require('../imgs/dice5.png'),
      require('../imgs/dice6.png'),
    ],
    selectedFace: require('../imgs/dice-empty.png'),
  };

  setFace = () => {
    var newFace = this.state.faces[
      Math.floor(Math.random() * this.state.faces.length)
    ];
    this.setState({ selectedFace: newFace });
  };

  render() {
    return (
      <div className="dice" style={{ margin: '1rem' }}>
        <button>
          <img
            src={this.state.selectedFace}
            alt="dice"
            onClick={this.setFace}
          />
        </button>
      </div>
    );
  }
}

export default Dice;
