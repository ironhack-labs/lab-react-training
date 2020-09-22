import React, { Component } from 'react';

export default class Random extends Component {
    render() {
        function random(min, max) {
            return Math.floor(Math.random() * this.props.max) + this.props.min
        }
        return (
            <box>
                <div>
                    <h2>Random value between {this.props.min} and {this.props.max}: {random(this.props.min, this.props.max)}</h2>
                </div>
                <div>
                    <h2>Random value between {this.props.min} and {this.props.max}: {random(this.props.min, this.props.max)}</h2>
                </div>
            </box>
        )
    }
}