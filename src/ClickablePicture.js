import React, { Component } from "react";

class ClickablePicture extends Component {
    state = {
        glassesOn: false
    };

    handleClick = () => {
        this.setState(prevState => ({
            glassesOn: !prevState.glassesOn
        }));
    }

    render () {
        return (
            <img onClick={this.handleClick} src={this.state.glassesOn ? "./img/persons/maxence-glasses.png" : "./img/persons/maxence.png"} alt="So Fresh" />
        )
    }
}

export default ClickablePicture