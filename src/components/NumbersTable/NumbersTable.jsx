import { useState } from 'react'

const NumbersTable = ({ limit }){

    const array = []
    let counter = 0

    while (counter < limit) {
        counter++
        array.push(counter)
    }

    return (
        array.map(elem => {
            // let backgroundColor1 = red
            // let backgroundColor2 = blue
            elem % 2 === 0 ? elem
        }
        )
    )


}