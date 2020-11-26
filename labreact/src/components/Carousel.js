import React, { Component } from 'react';


class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    handleClick(index) {
        let length = this.props.imgs.length
        this.setState({
            index: (index + length) % length
        })
    }
    render() {
        let src = this.props.imgs[this.state.index]
        return (
            <div>
                <button onClick={() => this.handleClick(-1)}>Left</button>
                <img
                    src={src}
                    alt="carousel" />
                <button onClick={() => this.handleClick(1)}>Right</button>
            </div>
        );
    }
}

export default Carousel; 