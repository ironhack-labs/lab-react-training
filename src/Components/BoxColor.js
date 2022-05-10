import React,{useState} from "react"

export const BoxColor = (props)=>{
    
    return (
        <div style={{
            "backgroundColor":`rgb(${props.r},${props.g},${props.b})`,
            "border":"2px solid",
            "margin":"10px"
        }}>
            <h1 style={{
                "color":"white",
                "textAlign":"center",
                "padding":"20px"
            }}>{`rgb(${props.r},${props.g},${props.b})`}</h1>
        </div>
    )

}