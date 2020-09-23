import React from 'react';
// import './Carousel.css';

export default class Carousel extends React.Component {
    constructor(props) {
        super()
        this.imgs = props.imgs
        this.length = props.imgs.length
        this.index = 0
        this.state = {
            picture: this.imgs[this.index]
        }
    }

    moveRight() {
        if (++this.index === this.length) {
            this.index = 0
            this.setState({
                picture: this.imgs[this.index]
            })
        } else {
            this.setState({
                picture: this.imgs[this.index]
            })
        }
    }

    moveLeft() {
        if (--this.index < 0) {
            this.index = this.length - 1
            this.setState({
                picture: this.imgs[this.index]
            })
        } else {
            this.setState({
                picture: this.imgs[this.index]
            })
        }
    }
 
    render() {
        return (
            <div>
                <button className="Carousel" onClick={() => this.moveLeft()}> left </button> 
                <img src={this.state.picture}/>
                <button className="Carousel"onClick={() => this.moveRight()}> right </button> 
            </div>
        );

    }
}