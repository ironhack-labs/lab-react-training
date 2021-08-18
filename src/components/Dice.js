import React from 'react';

class Dice extends React.Component {
  state = {
    diceImg: '/img/dice3.png',
     status: true
  };

  randomDiceHandler = () => {

    this.setState({
        status: !this.state.status,
        diceImg: '/img/dice-empty.png'
    })

    setTimeout(() => {
      this.setState({status:true})  
      let randomNum = Math.floor(Math.random()*6)+1
      this.setState({
          diceImg: `img/dice${randomNum}.png`
      })
  },1000)
}

  render() {
    return (
        <img
          className="diceImg"
          onClick={this.randomDiceHandler}
          src={this.state.diceImg}
          alt="dice pic"
        />
    );
  }
}

export default Dice