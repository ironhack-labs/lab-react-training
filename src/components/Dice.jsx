import React, { Component } from 'react'
import './../styles/iteration10.css'

export default class Dice extends Component {

    randomValue = () => {
        return Math.floor(Math.random() * 6+1)
    }

    state = {
        value: this.randomValue()
    }

    nextValue = () => {
        this.setState({value: this.randomValue()})
    }

    render() {
        console.log(this.state.value)
        return (
            <div onClick={this.nextValue} className="Dice__dice">
                <img src={"./img/dice"+this.state.value+".png"} alt="dice"/>
            </div>
        )
    }
}
