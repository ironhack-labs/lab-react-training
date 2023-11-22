
import { useState } from "react"

const NumbersTable = ({ limit }) => {

    const num = []
    const [Num, setNum] = useState(num)
    for (let i = 1; i <= limit; i++) {
        num.push(i)
    }



    return (
        num.map((elm, i) => {
            return (
                elm % 2 === 0
                    ?
                    <p style={{ color: 'red' }}>{elm}</p>
                    :
                    <p>{elm}</p>
            )
        })

    )


}

export default NumbersTable