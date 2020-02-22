import React, { Component } from 'react'

class Dice extends Component {
    state = {
        click: 'false' 
    }

    handleChange = (e) => { 
        this.setState({click: Math.floor(Math.random()*6)})
    }


    render() {
        return (
            <div className="Dice">
                {
                    this.state.click == 1 ?
                    <img alt="Dice" src="./img/dice1.png" height="100px" onClick={this.handleChange}/>  
                    :
                    this.state.click == 2 ?
                    <img alt="Dice" src="./img/dice2.png" height="100px" onClick={this.handleChange}/> 
                    :
                    this.state.click == 3 ?
                    <img alt="Dice" src="./img/dice3.png" height="100px" onClick={this.handleChange}/>
                    :
                    this.state.click == 4 ?
                    <img alt="Dice" src="./img/dice4.png" height="100px"onClick={this.handleChange}/>
                    :
                    this.state.click == 5 ?
                    <img alt="Dice" src="./img/dice5.png" height="100px" onClick={this.handleChange}/>
                    :
                    <img alt="Dice" src="./img/dice6.png" height="100px" onClick={this.handleChange}/>
                }
            </div>
        )
    }
}

export default Dice;