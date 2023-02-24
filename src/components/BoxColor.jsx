import React from "react";
import'./styles/BoxColor.css'

export function BoxColor(props){

    function colors(r, g, b) {
        return `rgb(${r},${g},${b})`
    }
   

    return (
        <>
            
            <div className="boxColor" style={{backgroundColor: colors(props.r, props.g, props.b)}}>
                <p>RGB red = ({props.r}), green = ({props.g}), blue = ({props.b}) </p>
            </div>
        </>
    )
}