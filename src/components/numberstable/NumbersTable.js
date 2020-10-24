import React from 'react'
import './NumbersTable.css'

export default function NumbersTable(props) {
    const { limit } = props
    console.log(props)

     const numbersArray = [...Array(limit)]
     console.log(numbersArray)
    return (
        <div>
            {numbersArray.map((number, index) => {
                if(index % 2 === 0) {
                    return (
                        <div
                            key={index}
                            className="square"
                            style={{backgroundColor: 'red'}}
                        >
                            <p>{index + 1}</p>
                        </div>
                    )
                }
                    return (
                        <div
                            key={index}
                            className="square"
                            style={{backgroundColor: 'white'}}
                        >
                            <p>{index + 1}</p>
                        </div>
                    )
            })}
        </div>
    )
}
