import { useState } from "react";

const NumbersTable = ({ limit }) => {

    const sacoDePutos = []

    for (let i = 1; i <= limit; i++) {
        const color = i % 2 === 0 ? "red" : "white"

        sacoDePutos.push(
            <p style={{ background: color }}>{i}</p>
        )
    }
    return (
        <div>{sacoDePutos}</div>
    )



}

export default NumbersTable



