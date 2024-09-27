import { useState } from "react"

const NumbersTable = ({ limit }) => {

    const box = []

    for (let i = 1; i <= limit; i++) {

        const color = i % 2 === 0 ? 'red' : 'yellow'

        box.push(
            <p style={{ background: color }}>{i}</p>
        )

    }
    return (
        <>{box}</>
    )
}

export default NumbersTable