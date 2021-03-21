import React from 'react'

function NumbersTable(props) {
    let list = [];
    for (let i=1; i<=props.limit; i++) {
        list.push(i)
    }
    return (
        <div>
            <ul style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                {list.map((number,i)=>
                    <li key={i} style={{
                        listStyle: "none",
                        width: 60,
                        height: 60,
                        border: "1px solid black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: i%2===0 ? "white" : "red"
                    }}>{number}</li>  )}
            </ul>
        </div>
    )
}

export default NumbersTable
