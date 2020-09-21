import React from 'react'


export default class Dice extends React.Component {

    setInitDice = () => {
        return `/img/dice${Math.floor(Math.random() * (6) + 1)}.png`
    }

    state = {
        backPic: this.setInitDice()
    }

    changeDice = () => {
        this.setState({backPic: `/img/dice-empty.png`})

        setTimeout(() => {
            this.setState({backPic: this.setInitDice()})
        }, 1000)
        
    }

    render() {
        return (
            <div className="avatar" style={{background: `url(${this.state.backPic}) no-repeat center center / cover`}} onClick={this.changeDice}></div>
        )
    }

}