import React from 'react'

export default function NumbersTable(props) {
    const arr = [];
    for(let i = 1; i < props.limit + 1; i++) {
        let color = "white"
        if(i%2===0){
            color = "red"
        }
        arr.push(<div style={{border:"solid 1px black", width:"100px", height:"100px", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"20px", backgroundColor:`${color}`}}>{i}</div>)
    }

    return (
        <div style={{display:"flex", width:"600px", flexWrap:"wrap", margin:"10px", padding:"10px", border:"solid 2px"}}>
            {arr}
        </div>
    )
}
