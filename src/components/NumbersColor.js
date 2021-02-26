import React from 'react'
export default function NumbersTable(props) {
    function countNum (limit) {
        const numbers= []
        for(let i=1; i<=limit; i++){
            numbers.push([i])
        }
        return numbers
    }
    return (
        <div>
            {countNum(props.limit).map((elem) => {
                return (
                    <p style={{backgroundColor: `${elem % 2===0 ? 'red' : 'white'}`, border:'1px solid'}}>{elem}</p>
                    )
            })
            }
        </div>
    )
}