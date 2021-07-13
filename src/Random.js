import React from "react"

function Random ({min, max}){

    let random = Math.floor(Math.random() * (max - min + 1) + min)
    
    return(
    <div className="card-box-2">
        <strong>Random value between {min} and {max} => {random} </strong>
    </div>
    )
}
export default Random