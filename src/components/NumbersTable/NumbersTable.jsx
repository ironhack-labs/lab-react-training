import { useState } from "react"
import "./NumbersTable.css"


const NumbersTable = ({ limit }) => {
    let arr = []
    let count = 0

    for (let i = 1; i <= limit; i++) {
        arr.push(i)
    }

    return (

        arr.map((elem, index) => {
            let color
            index % 2 == 0 ? color = { backgroundColor: "white;" } : color = { backgroundColor: "red" }
            return (
                <div className="dados">
                    <div style={color}>{elem}</div>
                </div>
            )
        })
    )

}



export default NumbersTable   