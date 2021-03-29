import React, { Component } from 'react'
import '../assets/css/NumbersTable.css'

class NumbersTable extends Component {
    render() {
        let arr = []
        for (let i = 0; i <= this.props.limit; i++){
            arr.push(i)
        }

        let numberArr = arr.map((number, index) => {
            if (number % 2 === 0) {
                return <div key={index} className='numbers' style={{ backgroundColor:'red' }}>{number}</div>
            } else {
                return <div key={index} className='numbers'>{number}</div>
            }
        })

        return (
            <div className="NumbersTable">
                <div className='d-flex flex-wrap'>{numberArr}</div>
            </div>
        )
    }
}

export default NumbersTable