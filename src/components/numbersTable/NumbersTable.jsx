import './NumbersTable.css'
import { useState } from 'react'


function NumbersTable({ limit }) {

    const [carouselIdx, setCarouselIdx] = useState(0)
    const tableArr = []
    for (let i = 1; i < limit+1; i++) tableArr.push(<div className={i% 2 == 1 ? "redSquare" : "whiteSquare"}>{i}</div>)


    return (
        <div className = "tableArr">
            {tableArr}
        </div>
    )

}


export default NumbersTable