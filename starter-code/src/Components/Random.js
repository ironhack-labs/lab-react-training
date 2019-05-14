import React, { Component } from 'react';



class Random extends Component {

    state = {
        min: this.props.min,
        max: this.props.max,
        random: this.props.random,
    }

    render() {
        return (
            <p>Random value between {this.state.min} and {this.state.max} => {this.state.random}</p>
        )
    }

}


export default Random;