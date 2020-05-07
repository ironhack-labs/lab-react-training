import React, { Component } from 'react'

export default class Dice extends Component {
    state = {
        img: `/img/dice${Math.floor(Math.random() * 6 +1)}.png`
    }

    randomImage = () => {
        let randomNum = Math.floor(Math.random() * 6 +1)
        this.setState({
            img: `/img/dice-empty.png`
        })
        setTimeout(() => {
            this.setState({
                img: `/img/dice${randomNum}.png`
            })
          }, 500);
    }

    render() {
        return (
            <div>
                <img className="wigth-100" src={this.state.img} alt="" onClick={this.randomImage} />
            </div>
        )
    }
}
