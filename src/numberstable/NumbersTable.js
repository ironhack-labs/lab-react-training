import React, { Component } from 'react'

export default class NumbersTable extends Component {

    generateNumbers = () => {
        let numbers = []
        for (let i = 1; i <= this.props.limit; i++) {
            numbers.push(<div style={{ border: '1px solid black', width: '100px', height: '100px', backgroundColor: i % 2 === 0 ? 'red' : 'white' }} key={i}><h1>{i}</h1></div>)
        }
        return numbers
    }

    render() {
        return (
            <div>
                {this.generateNumbers()}
            </div>
        )
    }
}
