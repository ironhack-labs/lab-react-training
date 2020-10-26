import React, { Component } from 'react'

let dice = [
    './img/dice1.png',
    './img/dice2.png',
    './img/dice3.png',
    './img/dice4.png',
    './img/dice5.png',
    './img/dice6.png'
]
export default class Dice extends Component {
    
  
    
    state  = {
        imgsrc:dice[Math.ceil(Math.random()*dice.length)]
    }

    handleRandom = () => {
      
        this.setState({
            imgsrc:'./img/dice-empty.png'
        })

        

        setTimeout(()=>{
            this.setState({
                imgsrc:dice[Math.ceil(Math.random()*dice.length)]
            },1000)
        })
        
    }
    render() {
        return (
            <div>
              <img src={this.state.imgsrc}  onClick={this.handleRandom}width='100px' alt='Dice'/>  
            </div>
        )
    }
}

