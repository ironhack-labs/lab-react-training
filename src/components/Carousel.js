import React, { Component } from 'react'
import '../assets/css/Carousel.css'

class Carousel extends Component {
    state = {
        counter: 0
    }

    left = () => {
        this.setState({ counter: (this.state.counter - 1 + 4) % 4 })
    }
    right = () => {
        this.setState({ counter: (this.state.counter + 1) % 4 })
    }


    render() {
        return (
            <div className="carousel">
                <button onClick={this.left}>Left</button>
                <img src={this.props.imgs[this.state.counter]} alt="" />
                <button onClick={this.right}>Right</button>
            </div>
        )
    }
}

export default Carousel