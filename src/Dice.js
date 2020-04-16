import React, { Component } from "react";

class Dice extends Component {
    state = {
        face: "-empty"
    }

    handleClick = () => {
        let randomFace = Math.floor(Math.random() * 6) + 1 
        this.setState({face: "-empty"})
        setTimeout(() => {this.setState({face: randomFace})}, 1000)
    }

    render () {
        return (
            <img onClick={this.handleClick} src={"./img/dice" + this.state.face + ".png"} alt="Dice" className="img-sm" />
        )
    }
}

export default Dice