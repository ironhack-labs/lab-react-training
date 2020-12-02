import React, { Component } from 'react'
import './NumbersTable.css'

export default class NumbersTable extends Component {
    state = {
        arr: Array.from(Array(this.props.limit).keys())
    }
    
    render() {
        return (
            <div className="numbers-table">
                {this.state.arr.map(el => {
                    return (
                        <div className="numbers-box" style={{backgroundColor: (el+1) % 2 === 0 ? "red": "white" }}>
                            <p>{el + 1}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

