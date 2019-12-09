import React, { Component } from 'react'
import './styles.css'

export class Random extends Component {
    randomN = (min,max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
    } 
    
    render() {

        return (
            <div className = "box">
            Random value between {this.props.min} and {this.props.max} => {this.randomN(this.props.min,this.props.max)}
            </div>
        )
    }
}

export default Random