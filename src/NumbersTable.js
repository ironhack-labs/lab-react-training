import React, { Component } from 'react'

export class NumbersTable extends Component {
    render() {
        let limit = 1
        let arr = []
        while (limit<=this.props.limit) {
            arr.push(limit);
            limit++;
        }
        return (
            <div className='num-table-wrapper'>
                {
                    arr.map(box=> {
                        return <div className='num-table' style={{background:box%2===0?'red':null}}><p>{box}</p></div>
                    })
                }
            </div>
        )
    }
}

export default NumbersTable
