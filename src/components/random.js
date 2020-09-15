import React, { Component } from 'react'

class Random extends Component {
    render(){
        let randomNumber = Math.floor(Math.random()*(this.props.max - this.props.min + this.props.min))
        return (
            <div className="box">
                <p>Random value between {this.props.min} and {this.props.max} => {randomNumber}</p>
            </div>
        )
    }
}

export default Random