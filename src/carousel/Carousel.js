import React, { Component } from 'react'

export default class Carousel extends Component {

    state = {
        img: this.props.imgs,
        imgIndex: 0
    }

    handler = event => {
        console.log(event.target.value)
        if(event.target.value === "left"){
            this.setState((state, props) => ({
                imgIndex: state.imgIndex === 0? 3 : (state.imgIndex - 1) % this.state.img.length
            }))
        } else if (event.target.value === "right") {
            this.setState((state, props) => ({
                imgIndex: (state.imgIndex + 1) % this.state.img.length
            }))
        }
    }


    render() {
        return (
            <div>
                <button onClick={this.handler} name="left" value="left">Left</button>
                <img src={this.state.img[this.state.imgIndex]} alt=""/>
                <button onClick={this.handler} name="right" value="right">Right</button>
            </div>
        )
    }
}
