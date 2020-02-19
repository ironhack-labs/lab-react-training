import React, { Component } from 'react'

export default class Random extends Component {
    GetRandom=(x)=>{
        const {min,max}=x;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    render() {
        return (
                <div className="Random">
                <h3>
                Random value between {this.props.min} and {this.props.max} => {this.GetRandom(this.props)}  
                </h3>
                </div>
        )
    }
}
