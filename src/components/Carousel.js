import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        counter: 0
    }

    clickLeft = () => {
        this.setState((state, props) => {
            if (state.counter === 0) {
                return {
                    counter: props.imgs.length - 1
                }
            }
            else {
                return {
                    counter: state.counter - 1
                }
            }
        })
    }
    clickRight = () => {
        this.setState((state, props) => {
            if (state.counter === props.imgs.length - 1) {
                return {
                    counter: 0
                }
            }
            else {
                return {
                    counter: state.counter + 1
                }
            }
        })
    }

    render() {
        return (
            <>
               <button onClick={this.clickLeft}>Left</button>
               <img id="carousel-img" src={this.props.imgs[this.state.counter]} alt="carousel"/>
               <button onClick={this.clickRight}>Right</button>
            </>
        )
    }
}
