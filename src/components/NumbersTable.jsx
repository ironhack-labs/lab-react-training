import React from 'react'

let boxArr = []

const NumbersTable = (props) => {

    for (let i = 1; i <= props.limit; i++) {
        boxArr.push(i)
    }


    const renderBoxes = boxArr.map((number, i) => <div className={`${number % 2 === 0 ? 'red' : ''} col-1`} key={i}>{number}</div>)

    return (
        <div className="box row justify-content-around">
            {renderBoxes}
        </div>
    )
}
export default NumbersTable




