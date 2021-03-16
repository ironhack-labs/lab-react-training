import React, { Component } from 'react'
import '../styles/NumbersTable.css'

export class NumbersTable extends Component {

    render() {
        const boxes = []
        for (let i = 1; i < this.props.limit; i++) {
            boxes.push(i);
        }
        return (
            <div>
                <table className="NumbersTable">
                    {boxes.map(box => <td> {box} </td>)}
                </table>
            </div>
        )
    }
}

export default NumbersTable
