import React, { Component } from "react"

class Carousel extends Component {
    state = {
        index: 0
    }

    addIndex = () => {
        if(this.state.index !== 3) {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    removeIndex = () => {
        if(this.state.index !== 0) {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    render() {
        const { images } = this.props
        return (
            <div>
                <button onClick={this.removeIndex}>Left</button>
                <img src={images[this.state.index]} alt="center-img" />
                <button onClick={this.addIndex}>Right</button>
            </div>
        )
    }
}

export default Carousel;