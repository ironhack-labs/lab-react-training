import React, { Component } from 'react'

export default class Carousel extends React.Component {

    state = {
        clicked: true,
        // number: Math.floor(Math.random()*6)
    }

    clickHandler = () => {
        this.setState((state,props) => ({
            rolled: false
        }))
        console.log(`clicked!`)
    }


    render() {
        return (
            <div>
                
                <button onClick = {this.clickHandler}>
                    left
                </button>

                <img src= {this.props.imgs[0]} alt="random people"/>
                
                <button onClick = {this.clickHandler}>
                    right
                </button>
            </div>
        )
    }
}
