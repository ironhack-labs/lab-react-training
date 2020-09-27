import React from 'react';

 
  class Carousel extends React.Component {
    state = {
        index: 0,
        source: this.props.imgs[0]
    }

 
    handleClick = (side) => {
        let newIndex;
        if(side === "right") {
            this.state.index < this.props.imgs.length-1 ? newIndex = this.state.index + 1 : newIndex = 0
        }
        if(side === "left"){
            this.state.index > 0 ? newIndex = this.state.index - 1 : newIndex = this.props.imgs.length-1
        }
        let newSource = this.props.imgs[newIndex]
        this.setState({
            index: newIndex,
            source: newSource
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick("left")}>Left</button>
                <img src={this.state.source} alt="carousel"/>
                <button onClick={() => this.handleClick("right")}>Right</button>
            </div>
        )
    }
}

export default Carousel 