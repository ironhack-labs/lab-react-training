import React, { Component } from 'react'

function divStyle(value) {
    return{
            background: value,
            color: 'white'
        }
}

 class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            currentValue: props.values[Math.floor(Math.random()*props.values.length)],
            values: props.values
        }
        console.log('Ejecutando constructor del counter')
    }

    counter = () => {
        this.setState(({count, currentValue}) => ({count: count+1, currentValue:this.state.values[Math.floor(Math.random()*this.state.values.length)]}))
    }

    render() {
        console.log('counter render')
     
        return (
            <button type="button" style={divStyle(this.state.currentValue)} onClick={this.counter}>{this.state.count} Likes</button>
        )
    }
}

export default Counter