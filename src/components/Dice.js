import React from 'react'

class Dice extends React.Component{
  constructor (props){
    super (props)
    this.state= {
      picture: `./img/dice${Math.floor(Math.random() * (6 - 1 + 1)) + 1}`
    }
  }

  ThrowDice=()=>{
    setTimeout(()=>{this.setState({picture: `./img/dice-empty`})}, 1)
    setTimeout(()=>{this.setState({picture: `./img/dice${Math.floor(Math.random() * (6 - 1 + 1)) + 1}`})}, 1000)
  }



  render(){
    return(
      <button onClick={this.ThrowDice}><img src={this.state.picture} alt='' width='200'/></button>

    )
  }
}

export default Dice