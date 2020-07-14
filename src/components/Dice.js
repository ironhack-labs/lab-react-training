import React, { Component } from 'react'

export default class Dice extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            pic: "/img/dice5.png",
        }
    }
    rollDice = () => {
        this.setState(({pic}) => ( {pic: "/img/dice-empty.png" } ))
        setTimeout(this.randomPic, 1000)
    }

    randomPic = () => {
        const randomDice = Math.floor(Math.random() * 6) + 1
        this.setState(({pic}) => ( {pic: `/img/dice${randomDice}.png` } ))
    }
    
    render() {
        return (
            <div className="dice">
                <img src={this.state.pic} alt="Dice" onClick={this.rollDice}></img>
            </div>
        )
    }
}
