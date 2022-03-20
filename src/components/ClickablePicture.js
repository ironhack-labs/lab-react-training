import React, { Component } from "react"

class ClickablePicture extends Component {
    state = {
        clicked: false
    }
    toggleState = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        const { img, imgClicked } = this.props
        return (
            <div>
                <img 
                src={this.state.clicked ? img : imgClicked}
                onClick={this.toggleState} 
                alt="img"
                />
            </div>
        )
    }
}

export default ClickablePicture;