import React from 'react'

export default class Dice extends React.Component {

    state = {
        rolled: true,
        number: Math.floor(Math.random()*6)
    }
    
    clickHandler = () => {
        this.setState((state,props) => ({
            rolled: false
        }))

        setTimeout(() => {
            this.setState((state,props) => ({
                rolled: true,
                number: Math.floor(Math.random()*6)
            }))    
        }, 1000)
    };


    render() {
        return (
            <div className="dice">
                <img onClick = {this.clickHandler} alt="dice"
                src={this.state.rolled 
                ? `/img/dice${this.state.number}.png` 
                : '/img/dice-empty.png' }/>
            </div>
        )
    }
}


