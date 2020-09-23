import React, { Component } from 'react'

export default class Dice extends Component {
    
    state = { 
        randomNum: Math.ceil(Math.random() * 5),
        click: false
    }

    handleRandom = () => {
        this.setState({ 
            randomNum: '-empty',
            click: !this.state.click
        });

        setTimeout(() => {
            this.setState({ randomNum: Math.ceil(Math.random() * 5)});
        }, 1000)
    }

    render() {
        return (
            <div className="dice">
                <div style={{width: '150px', height: '150px'}}  >
                <img 
                    src={!this.state.click ? this.props.img : `/img/dice${this.state.randomNum}.png`} 
                    alt=""
                    onClick={this.handleRandom}
                />
            </div>
            </div>
        )
    }
}
