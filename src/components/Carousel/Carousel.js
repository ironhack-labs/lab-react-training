import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = ({
            image: props.imgs[0]
        })
    }

    handleRightClick = () => {
        let currentIndex = this.props.imgs.indexOf(this.state.image);

        if(currentIndex < this.props.imgs.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        this.setState({
            image: this.props.imgs[currentIndex]
        })
    }

    handleLeftClick = () => {
        let currentIndex = this.props.imgs.indexOf(this.state.image);

        if(currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = this.props.imgs.length - 1;
        }

        this.setState({
            image: this.props.imgs[currentIndex]
        })
    }

    render() {
        return (
            <div>
                <button className='carousel-button' onClick={this.handleLeftClick}>Left</button>
                <img className='carousel-img' src={this.state.image} alt='Carousel images' />
                <button className='carousel-button' onClick={this.handleRightClick}>Right</button>
            </div>
        )
    }
}

export {Carousel};