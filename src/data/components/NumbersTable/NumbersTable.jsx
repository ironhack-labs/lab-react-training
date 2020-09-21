import React from 'react';
// import './NumbersTable.css';

export default function NumbersTable(props) {
    const numbersList = [];
    for (let i = 1; i <= props.limit; i++) {
        if (i % 2 === 0) {
            numbersList.push(<div style={{backgroundColor: 'red', width: '100px', height: '100px', border: '2px solid black'}}>{i}</div>)
        } else {
            numbersList.push(<div style={{backgroundColor: 'white', width: '100px', height: '100px', border: '2px solid black'}}>{i}</div>)
        }
        
    }
    return (
        <div style={{display: 'flex', width: '550px', flexDirection: 'row', flexWrap: 'wrap', margin: ' 20px auto'}}>
         {numbersList}
        </div>
    )
}