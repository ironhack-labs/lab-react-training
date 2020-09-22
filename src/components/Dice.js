import React, { Component } from 'react'

export default class Dice extends Component {
    
    state = { randomNum: Math.ceil(Math.random() * 5) }

    handleRandom = () => {
        this.setState({ randomNum: '-empty'});

        setTimeout(() => {
            this.setState({ randomNum: Math.ceil(Math.random() * 5)});
        }, 1000)
    }

    render() {
        return (
            <div>
                <div style={{width: '150px', height: '150px'}}  onClick={this.handleRandom}>
                <img 
                    style={{width: '150px', height: '150px'}} 
                    src={`/img/dice${this.state.randomNum}.png`} 
                    alt="dice"
                />
            </div>
            </div>
        )
    }
}
