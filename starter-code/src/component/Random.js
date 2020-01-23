import React, { Component } from 'react'

export default class Random extends Component {
    render() {

        let min=this.props.min;
        let max=this.props.max;

        let random = Math.floor(Math.random()*(max-min+1)+min)

        return (
            <div id="greetings">
               <h2>Random value between {this.props.min} and {this.props.max} => {random}</h2>
            </div>
        )
    }
}
