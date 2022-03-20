import React, {Component} from "react";
import './Carousel.css';

class Carousel extends Component {
    state = {
        index: 0
    };

    leftImage(){
        if (this.state.index > 0){
            this.setState({
                index: this.state.index - 1
            });
        };
    };

    rightImage(){
        if (this.state.index < 3){
            this.setState({
                index: this.state.index + 1
            });
        };
    };

    render(){
        return (
            <div className="carousel-div">
                <img src={this.props.images[this.state.index]} alt="" />
                <div className="carousel-btns-div mt-1">
                    <button onClick={() => this.leftImage()}>Left</button>
                    <button onClick={() => this.rightImage()}>Right</button>
                </div>
            </div>
        );
    };
};

export default Carousel;