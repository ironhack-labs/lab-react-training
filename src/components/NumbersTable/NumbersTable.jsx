import { useState } from "react"
import './NumbersTable.css'
function NumbersTable({ limit }) {
    const [color, setColor] = useState()
    const divList = []
    for (let i = 1; i <= limit; i++) {
        divList.push(<div className="tab">{i}</div>)

    }
    const evenColor = () => {
        divList.forEach(elem => {
            elem % 2 === 0 ? 'white' : 'red'
        })
    }
    return (
        <>
            {
                divList.map((elm, idx) => {
                    return <div key={idx}>{elm}</div>
                })
            }


        </>
    )
}

export default NumbersTable