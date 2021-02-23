import React from 'react'
import './NumbersTable.css'
export default function NumbersTable(props) {

    let boxlist = []
    let length = props.limit;
    for(let i = 1; i < length+1; i++) {
        if(i %2 == 0) {
            boxlist.push(<div className='redBox' key={i}>{i}</div>);
        }
         else {
            boxlist.push(<div className='whiteBox' key={i}>{i}</div>)
        }
    }
    return (
        <div className='numbersBoxes'>
            {boxlist}
        </div>
    )
}