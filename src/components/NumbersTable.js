import React from 'react';


const NumbersTable = (props) => {
    let numbersArr = []
    for (let i = 1; i<= props.limit; i++){
        numbersArr.push(i)
    }
    return (
        <div className="numbersTable">
            {numbersArr.map(num => {
                return <div className="square">{num}</div>
            })}
        </div>
    )
}

export default NumbersTable