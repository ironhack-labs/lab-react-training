import React, { Component } from 'react';
import "./Carousel.css";

class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            indexImg: 1,
            currentImg: this.props.imgs[1]
        }
    }
    nextPicture(){
        if(this.state.indexImg + 1 > this.props.imgs.length - 1){
            this.setState({indexImg: 0});
        } else {
            this.setState({indexImg: this.state.indexImg + 1});
        }
        this.setState({currentImg: this.props.imgs[this.state.indexImg]});
    }
    previousPicture(){
        if(this.state.indexImg - 1 < 0){
            this.setState({indexImg: this.props.imgs.length - 1});
        } else {
            this.setState({indexImg: this.state.indexImg - 1});
        }
        this.setState({currentImg: this.props.imgs[this.state.indexImg]});        
    }
    render() {
        return (
            <div className="carousel-container">
                <img src={this.state.currentImg} alt=""/>
                <div className="buttons">
                    <button onClick={() => this.previousPicture()}>Left</button>
                    <button onClick={() => this.nextPicture()}>Right</button>
                </div>
                
            </div>
        );
    }
}

export default Carousel;
