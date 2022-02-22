import { useState } from 'react'
import './NumbersTable.css'

const NumbersTable = (prop) => {

    const { limit } = prop

    const squaresArr = []

    for (let i = 1; i < limit+2; i++) {
        squaresArr.push(i)
    }

    return (


        <section>
           {

            squaresArr.map((elm, idx) => {

                if (idx%2 === 0){
                    return <div className='square' key={idx}> {idx} </div>
                } else {
                    return <div className='squareRed' key={idx}> {idx} </div>

                }
            })


           }
        </section>

    )
}

export default NumbersTable