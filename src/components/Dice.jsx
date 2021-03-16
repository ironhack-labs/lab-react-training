import React, { Component } from 'react'
import './../styles/iteration10.css'

export default class Dice extends Component {

    state = {
        value: this.randomValue()
    }

    randomValue() {
        return Math.floor(Math.random() * 6+1)
    }

    nextValue = () => {
        this.setState({value: '-empty'})
        setTimeout(() => this.setState({value: this.randomValue()}), 1000)
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
