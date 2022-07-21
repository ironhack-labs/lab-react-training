import { useState } from 'react'
import './NumbersTable.css'

function NumbersTable({ limit }) {
    const newArr = []
    let counter = 0

    while (counter < limit) {
        counter++
        newArr.push(counter)
    }

    


    const [currentNum, setCurrentNum] = useState(1)

return(
    <div>{newArr}</div>
)


}

export default NumbersTable