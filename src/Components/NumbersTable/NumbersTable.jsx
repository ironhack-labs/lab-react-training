import { useState } from 'react'


const NumbersTable = ({ limit }) => {

    const [NumbersTableValue, setNumbersTable] = useState(0);


    const table = [...Array(limit + 1)];

    let color = {

        backgroundColor: `red`,
        padding: "20px",
        border: "1px solid black",
        width: "100px"

    }
    let color2 = {

        padding: "20px",
        border: "1px solid black",
        width: "100px"
    }

    return (
        <div>
            {table.map((elem, idx) => {

                if (idx % 2 === 0 && idx !== 0) {

                    return <div style={color}> {idx}</div>

                } else if (idx !== 0) {

                    return <div style={color2}> {idx}</div>
                }
            })}
        </div>
    )
}

export default NumbersTable