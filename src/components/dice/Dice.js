import React, {Component} from 'react'
import '../dice/Dice.css'


class Dice extends Component {
  state = {
    image : '/img/dice1.png',
    newDice : ''
  }

  changeDice = () => {
    let number = Math.floor(Math.random() * 6) +1;
    this.setState({
      image : '/img/dice-empty.png',
    })
    setTimeout(()=>{
      this.setState({
        newDice : `/img/dice${number}.png`
      })
    }, 1000);
  }

  componentDidUpdate(){
    setTimeout(function(){
      console.log("Carta cambiada");
    }, 1000);
  }

  render(){
    const {image, newDice} = this.state;
    let showDice = <img className="dice" src={image} alt="First time" onClick={this.changeDice} />
    if(newDice){
      showDice = <img className="dice" src={newDice} alt="New dice" onClick={this.changeDice} />
    }
    return(
      <div>
        {showDice}
      </div>

    )
  }
}

export default Dice