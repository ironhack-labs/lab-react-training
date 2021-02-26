import React from 'react'

function NumbersTable(props) {

    const arrNum = []
    const color = ['red','white']

    for(let i = 0; i < props.limit; i++){
        arrNum.push(
            <div style={{ backgroundColor: `${color[i % 2]}`, padding: "20px", border:'1px solid black'}}>{i}</div>
        )
    }
    return (
        <div style={{padding:'50px 0px', display: "flex", justifyContent:'center'}}>
            {arrNum}
        </div>
    )
}

export default NumbersTable
