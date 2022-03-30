import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import diceempty from '../assets/images/dice-empty.png';
import { Component } from 'react';
import { Button, VStack } from '@chakra-ui/react';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  rollDice = () => {
      this.setState({
          value: 0
      })
      const newValue = Math.ceil(Math.random() * 6);
      setTimeout(() => {
      this.setState({
          value: newValue
      })}, 500);
  }

  render() {
    const button =
      <Button onClick={this.rollDice} colorScheme="blue">
        Roll Dice
      </Button>
    switch (this.state.value) {
      case 0:
        return (
          <VStack>
            <img width="200px" alt="" src={diceempty} />
            {button}
          </VStack>
        );
      case 1:
        return (
          <VStack>
            <img width="200px" alt="" src={dice1} />
            {button}
          </VStack>
        );
      case 2:
        return (
          <VStack>
            <img width="200px" alt="" src={dice2} />
            {button}
          </VStack>
        );
      case 3:
        return (
          <VStack>
            <img width="200px" alt="" src={dice3} />
            {button}
          </VStack>
        );
      case 4:
        return (
          <VStack>
            <img width="200px" alt="" src={dice4} />
            {button}
          </VStack>
        );
      case 5:
        return (
          <VStack>
            <img width="200px" alt="" src={dice5} />
            {button}
          </VStack>
        );
      case 6:
        return (
          <VStack>
            <img width="200px" alt="" src={dice6} />
            {button}
          </VStack>
        );
      default:
        return <></>;
    }
  }
}

export default Dice;
