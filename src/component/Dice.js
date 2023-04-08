/*

import React, { useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState('dice-empty');

  const handleClick = () => {
    setDiceValue('dice-empty');
    setTimeout(() => {
      const randomValue = Math.ceil(Math.random() * 6);
      setDiceValue(`dice${randomValue}`);
    }, 1000);
  };

  return (
    <img
      src={require(`../assets/images/${diceValue}.png`).default}
      alt={`Dice value: ${diceValue}`}
      onClick={handleClick}
      style={{ width: '200px', height: '200px' }}
    />
  );
};

export default Dice;





import React, { useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(0);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      setRolling(false);
    }, 1000);
  };

  return (
    <div>
      <img
        src={rolling ? '../assets/images/dice-empty.png' : `../assets/images/dice${diceValue}.png`}
        alt={`Dice value: ${diceValue}`}
        style={{ width: '200px', height: '200px' }}
        onClick={rollDice}
      />
    </div>
  );
};

export default Dice;
*/



import React from 'react';

class Dice extends React.Component {
  state = {
    src: require('../assets/images/dice-empty.png'),
  };

  handleClick = () => {
    this.setState({
      src: require(`../assets/images/dice${Math.floor(Math.random() * 5) + 1}.png`),
    });
  };

  render() {
    return (
      <div>
        <img
          className="dice-image"
          src={this.state.src}
          onClick={this.handleClick}
          alt="dice"
        />
      </div>
    );
  }
}

export default Dice;

