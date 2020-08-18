import React from 'react';


const NumbersTable = (props) => {
    let numbersArr = []
    for (let i = 1; i<= props.limit; i++){
        numbersArr.push(i)
    }
    return (
        <div className="numbersTable">
            {numbersArr.map((num, i) => {
                return <div key={i} className="square" style={num%2 === 0? {backgroundColor: "red"} : {backgroundColor: "white"}}>{num}</div>
            })}
        </div>
    )
}

export default NumbersTable