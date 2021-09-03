import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        imgIndex: 0,
    }

    constructor(props){
        super(props);
    }

    clickRight = () => {
        this.setState((state, props) => ({
            imgIndex: (state.imgIndex + 1)% this.props.imgs.length
        }))
    }

    clickLeft = () => {
        this.setState((state, props) => {
            if (state.imgIndex === 0) {
                return {
                    imgIndex: props.imgs.length - 1
                }
            } else {
                return {
                    imgIndex: (state.imgIndex - 1)
                }
            }
            
        })
    }

    render() {
        return (
            <div>
            <button onClick={this.clickLeft} >left</button>
            <img src={this.props.imgs[this.state.imgIndex]} alt={this.props.imgs[this.state.imgIndex]} />
            <button onClick={this.clickRight}>right</button>
                
            </div>
        );
    }
}

export default Carousel;