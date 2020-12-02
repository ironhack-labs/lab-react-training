import React, { Component } from 'react'

export default class Carousel extends Component {

    state = {
        image: [...this.props.imgs],
        imageNumber: 0
    }

    pictureHandlerRight = () => {
        // console.log('clicked')
        if (this.state.imageNumber !== this.state.image.length -1){
            this.setState((state, props) => ({
                imageNumber : this.state.imageNumber + 1
             }))
        } 
    }
    pictureHandlerLeft = () => {
        // console.log('clicked')
        if (this.state.imageNumber > 0 ){
            this.setState((state, props) => ({
                imageNumber : this.state.imageNumber -1
             }))
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.image[this.state.imageNumber]} alt=""/>
                <button onClick={this.pictureHandlerLeft}>Left</button>
                <button onClick={this.pictureHandlerRight}>Right</button>
            </div>
        )
    }
}




