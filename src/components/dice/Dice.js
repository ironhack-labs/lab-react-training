import React from 'react';
import dice0 from '../../assets/images/dice-empty.png';
import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png';
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png';

const dados = [dice1, dice2, dice3, dice4,dice5, dice6]

class Dice extends React.Component {

    state = {
        currentImage : dice0
    }

    clickImg = ()=> {
        setTimeout(()=>{
            const randomIndex = Math.floor(Math.random() * 5 + 1)
            this.setState({
                currentImage : dados[randomIndex]
              });
              console.log(randomIndex + 1)
        },1000)

    }


  render() {
    return (
      <div 
        style={{
            width: 100,
        }}>
      <img onClick={this.clickImg} src={this.state.currentImage} alt="dice" />
      </div>
    )
  }
}

export default Dice;