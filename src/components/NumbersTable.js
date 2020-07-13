import React from 'react'

function NumbersTable(props) {

    const cases = [] 
    
    for (let i=0; i<props.limit; i++) {
        cases.push(<div key={i} className="case" style={{backgroundColor:(i%2 === 0) ? "white" : "red"}}><span>{i+1}</span></div>)
    }

    return (
        <div className="table-container">
            {cases}
        </div>
    )
}

export default NumbersTable

