import React, { Component } from 'react'

export default class Carousel extends Component {

    state = {
        index: 0
    }

    leftClickHandler = () => {
        if (this.state.index > 0) {
            this.setState((state) => ({ 
                index: state.index - 1
           }))
        }
    }

    rightClickHandler = () => {
        if (this.state.index < 3) {
            this.setState((state) => ({ 
                index: state.index + 1
           }))
        }
    }

    render() {
        return (
            <div>
                <button onClick={ this.leftClickHandler }>Left</button>
                <img src={this.props.imgs[this.state.index]} alt="random"/>
                <button onClick={ this.rightClickHandler }>Right</button>
            </div>
        )
    }
}
