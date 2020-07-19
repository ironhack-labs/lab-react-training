import React from 'react'

const NumbersTable = props => {

    const numberList = props => {
        const numbers = [] 
        for (let i = 1; i <= props.limit; i++){
            numbers.push(
                <div key={i} style={{backgroundColor: i % 2 === 0 ? 'red' : 'white'}}>
                    <p>{i}</p>
                </div>
            )
        }
        return numbers
    }

    return (
        <div>
            {numberList(props)}
        </div>
    )
}


export default NumbersTable
