import React, { Component } from 'react'

export default class Carousel extends Component {
    
    state = {
        img: this.props.imgs[0]
    }
    
    clickHandler = () => {
        this.setState(state => ({
           
        }))
        
    }

    render() {
        return (
            <button onClick={this.clickHandler}>
                <img src={this.props.imgs} alt=''/>
           </button>
           
        )
    }
}



