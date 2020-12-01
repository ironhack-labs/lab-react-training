import React, { Component } from 'react';

class Carousel extends Component {
    state={
        index: 0
    }

    incrementIndex = () => {
        this.setState({index: (this.state.index+1)%this.props.imgs.length})
    }
    decrementIndex = () => {
        let newIndex;
        if(this.state.index === 0){
            newIndex = this.props.imgs.length-1;
        }else{
            newIndex = this.state.index-1;
        }
        this.setState({index: newIndex});
    }
    render({imgs} = this.props) {
        return (
            <div>
                <button onClick={this.decrementIndex}>Left</button>
                <img src={imgs[this.state.index]} alt="Photo"></img>
                <button onClick={this.incrementIndex}>Right</button>
            </div>
        );
    }
}

export default Carousel;