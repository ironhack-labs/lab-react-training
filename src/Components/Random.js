import React,{useState} from "react"

export const Random = (props)=>{
    const {max,min}= props
    const Random = Math.floor(Math.random()*max)
    
    return (
        <div className="Iteration2">
            <div>
                <h1>{`Random value between ${min} and ${max} => ${Random}`}</h1>
            </div>
        </div>
    )

}