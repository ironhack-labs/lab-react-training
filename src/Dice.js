import React, { Component } from 'react'

function getRandomInt(max) {
    return Math.floor(Math.random() * max) //The maximum is exclusive and the minimum is inclusive
  }

export class Dice extends Component {
    state = {
        dice:`/img/dice${getRandomInt(5)}.png`
    }
    handleClick = ()=>{
        this.setState({dice:'/img/dice-empty.png'});
        setTimeout(()=>this.setState({dice:`/img/dice${getRandomInt(5)}.png`}), 1000);
    }
    render() {
        return (
            <div>
                <img onClick={()=>this.handleClick()} style={{width: '200px'}} src={this.state.dice} alt='dice' />
            </div>
        )
    }
}

export default Dice
