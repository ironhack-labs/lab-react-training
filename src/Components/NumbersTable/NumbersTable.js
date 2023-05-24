import { useState } from "react"

export default function NumbersTable({limit}) {
    let arr = [];

    for(let i=1; i <= limit; i++){
        arr.push(i)
    }

    return(
        arr.map((elem, index)=>{
            let color
            index % 2 === 0 ? color = {backgroundColor: "white"} : color =  {backgroundColor: "red"}
            return(
                <div style={color} key={index}>{elem}</div>
            )
        })
    )

      for(let i = 1; i < limit; i++){
        let newState = [...state]
        newState.push(i)
        setState(newState)
        console.log(state)
    } 

    return(
        <>
        
        </>
    )
}