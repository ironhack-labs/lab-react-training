import React from "react"

const NumbersTable = (props) => {

    const table = []; 
    for(let i = 0; i <props.limit; i++) {
        let color = "white"
        if (i%2 === 0){
            color = "red"
        }
        table.push(<div style={{border:"solid 1px black", width:"100px", height:"100px", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"20px", backgroundColor:`${color}`}}>{i}</div>)
    }

    return (
        <div>
            {table}
        </div>
    )
}


export default NumbersTable; 

