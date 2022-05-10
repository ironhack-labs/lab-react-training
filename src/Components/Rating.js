import React,{useState} from "react"

export const Rating = (props)=>{
    console.log(props.children)
    const Round = Math.round(props.children)
    let calif;
    switch (Round) {
        case 0:
            calif = "☆☆☆☆☆"
            break;
        case 1:
            calif = "★☆☆☆☆"
            break; 
        case 2:
            calif = "★★☆☆☆"
            break;  
        case 3:
            calif = "★★★☆☆"
            break;  
        case 4:
            calif = "★★★★☆"
            break; 
        case 5:
            calif="★★★★★"
            break;
        default:
            break;
    }
    
    return (
        <div>
            <p style={{
                "fontSize":"80px"
            }}>{calif}</p>
        </div>
    )

}