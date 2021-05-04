import React from 'react'

export default function NumbersTable(props) {

    const numbers = [];
    for (let i = 1; i <= props.limit; i++){
        numbers.push(i);
    }
    const createTiles = numbers.map(tile => {
        if (tile % 2 === 0) {
            return (
                <div style={{backgroundColor: 'red'}} className="NumberTile">{tile}</div>
            )
        } else {
            return (
                <div style={{backgroundColor: 'white'}} className="NumberTile">{tile}</div>
            ) 
        }
        
    })

    return (
        <div>
            <div className="Numbers">
                   {createTiles}
            </div>
        </div>
    )
}


// map over array