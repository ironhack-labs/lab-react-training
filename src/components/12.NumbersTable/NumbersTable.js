import React from 'react'
import Number from './Number'
import './Numbers.scss'

const NumbersTable = ({ limit }) => {
    
    const iteration = (l) => {
        const nums = []
        for (let i = 1; i<= l; i ++) {
           nums.push(i)
        }
        return nums.map((n) => <Number i={n}/>)
    }
    return (
        <div className="NumbersTable">
            {iteration(limit)}
        </div>
    )
}

export default NumbersTable
