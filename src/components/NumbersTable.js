import React, { Component } from 'react'
import "../css/idCard.css"
export default class NumbersTable extends Component {
    
    

    render() {
        const numbers = [...Array(this.props.limit).keys()]
        let color;
        
        return (
            <div>
                {numbers.map(number => {
                    if (number % 2 === 0){
                        color = "red"
                    }else{
                        color = "white"
                    }
                    const styling = {backgroundColor: color, width: "100px", border: "1px solid black", width: "10px", height: "10px"}

                    return(
                        <span style={styling}> {number} </span>
                    )
                })
                }

            </div>

        )}}