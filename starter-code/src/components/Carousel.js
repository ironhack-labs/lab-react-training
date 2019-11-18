import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div className="carousel">
                <button onClick={this.left}>Left</button>
                <img src={this.props.imgs[1]} alt={this.props.imgs[1]} />

                <button onClick={this.right}>Right</button>
            </div>
        )
    }
}
