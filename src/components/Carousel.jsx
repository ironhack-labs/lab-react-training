import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        counter :0
    }
    goLeft = () => {
        this.setState({counter: (this.state.counter -1 +4)%4})
    }
    goRight = () => {
        this.setState({counter: (this.state.counter +1)%4})
    }
    render() {
        return (
            <div>
                <button onClick={this.goLeft}>Left</button>
                <img src={this.props.imgs[this.state.counter]} alt=""/>
                <button onClick={this.goRight}>Right</button>
            </div>
        )
    }
}
