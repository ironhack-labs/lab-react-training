import React from 'react'

export default function NumbersTable({limit}) {
    let table = [];

    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            table.push(
                <div style={{backgroundColor: "red", width: "15vh", height: "15vh"}}>{i}</div>
            )
        } else {
            table.push(
                <div style={{width: "15vh", height: "15vh"}}>{i}</div>
            )
        }
    }
    return (
        <div>
            {table}
        </div>
    )
}
