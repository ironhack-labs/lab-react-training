import React from 'react';

class Dice extends React.Component {
  state = {
    image:'/img/dice-empty.png',
  };

  handleClick = () => {
    this.setState({ image:`/img/dice-empty.png`});
    const newDice = `/img/dice${Math.floor((Math.random() * 6) + 1)}.png`;
    setTimeout(() => {this.setState({
        image: newDice,
    });
}, 1000);
    };

  render() {
    return (
      <div>
        <img style={{width: 200}} src={this.state.image} alt="" onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Dice