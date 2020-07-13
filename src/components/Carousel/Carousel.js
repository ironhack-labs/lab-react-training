import React, { Component } from 'react'
import "./Carousel.css"

export class Carousel extends Component {
    constructor(props) {
        super(props)
       this.state = {
           imgs: props.imgs,
           position : 0
            
        }   
    }
    right = () => {
        if (this.state.position === 3) {
        this.setState((state) => ({position: state.position = 0}))
        } else {
        this.setState((state) => ({position: state.position +1}))
    }
 }
    left = () => {
        if (this.state.position === 0) {
        this.setState((state) => ({position: state.position = 3}))
        } else {
            this.setState((state) => ({position: state.position -1}))
        }
    }
  
    render() {
        return (
            <div>
            <button onClick={this.left}>Left</button>
            <img  src={this.state.imgs[this.state.position]} alt="" ></img>
            <button onClick={this.right}>Right</button>    
            </div>
        )
    }
}

export default Carousel
