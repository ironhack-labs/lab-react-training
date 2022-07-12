import { useState } from "react"

function NumbersTable(limit) {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const even = number => number % 2 === 0;

    let result = [];

    for (let number of numbers) {
        if (even(number)) {
            result.push(number);
        }
    }

}


export default NumbersTable