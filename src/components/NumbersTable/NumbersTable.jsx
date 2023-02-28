import '../App.css'
import { useState } from "react"

const NumbersTable = ({ limit }) => {

    const numbersList = []

    for (let i = 1; i <= limit; i++) {
        numbersList.push(i)
    }

    return (
        <>
            {numbersList.map(elm => {
                return (
                    <div style={{ backgroundColor: elm % 2 === 0 ? "red" : "white" }}>
                        {elm}
                    </div>
                )
            })}
        </>
    )
}


export default NumbersTable