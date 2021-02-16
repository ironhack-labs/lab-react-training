import React from 'react';

function NumbersTable({limit}) {
    console.log("limit", limit) 
    let style = {width:'80px', height: '80px', border: '2px solid', display: 'flex', 
    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}

    let tableOfNumbers = []

    for (let i = 1; i <=limit ; i++) {
        tableOfNumbers.push(
            <div style={style}>{i}</div>
        )
    }

    //Falta tema color



    return <div>
        <h1>Numbers Table</h1>
        <p>{tableOfNumbers}</p>
    </div>
}

export default NumbersTable;