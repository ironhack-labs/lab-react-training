import React, {Component} from 'react'

class Dice extends Component {

    constructor(props) {
        super(props)
        this.state = { num: this.randomNumber() }
    }


randomNumber = () => { 
    return 1 + Math.floor(Math.random() * 6)
}

handleNumber = () => {
    if (this.state.num) { 
        this.setState({ num: undefined })
    setTimeout(() => { this.setState({ num: this.randomNumber() 
    })
   }, 1000)
  }
}   
render() {
       let image ;
       if (this.state.num)
        image = `/img/dice${this.state.num}.png`
       else 
        image = `/img/dice-empty.png`
    
    return ( <img className="dice" src={image} onClick={this.handleNumber} alt="dice" /> );
  } 
}

export default Dice;
