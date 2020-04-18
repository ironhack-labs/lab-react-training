import React, { Component } from 'react';


class Carousel extends Component {
    
    state = {
        index: 0
    }

    handleClick = (direction) => () => {
        direction === "right" ? 
        this.setState(
            {index : this.state.index < this.props.imgs.length -1 ? this.state.index +1 : 0 }
        )
        : 
        this.setState(
            {index : this.state.index > 0 ? this.state.index -1 : this.props.imgs.length -1 }
        )
    }

    render() {
        return (
            <div className="Carousel">
                <button onClick={this.handleClick("left")}>Left</button>
                <img src={this.props.imgs[this.state.index]} alt="carousel"/>
                <button onClick={this.handleClick("right")}>Right</button>
            </div>
        );
    }
};
    
export default Carousel;