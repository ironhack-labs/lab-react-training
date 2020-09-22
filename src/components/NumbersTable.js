import React from 'react'

export default function NumbersTable(props) {
    const array = [];
    for (let i = 1; i <= props.limit; i++){
        if (i % 2 === 0){
            array.push(<div style={{backgroundColor: 'red', width: '70px', height: '70px', border: '2px solid black'}}>{i}</div>)
        } else {
            array.push(<div style={{backgroundColor: 'white', width: '70px', height: '70px', border: '2px solid black'}}>{i}</div>)
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
           {array} 
        </div>
    )
}
