import React, { Component } from 'react'
import './../styles/iteration12.css'

export default class NumbersTable extends Component {
    render() {

        const res = []
        for (let k=1 ; k<=this.props.limit; k++) {
            res.push(
                {
                    value: k,
                    bgColor: k%2 === 0 ? "red" : "white"
                }
            )
        }

        return (
            <div className="iteration12__container">
                {res.map(
                    num => <div style={{backgroundColor: num.bgColor}} key={num.value}>{num.value}</div>
                )
                }
            </div>
        )
    }
}
