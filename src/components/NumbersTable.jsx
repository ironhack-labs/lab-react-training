import { useState } from 'react'

const NumbersTable = (props) => {
    const { limit } = props

    let numbers = [];
    for (let i = 1; i <= limit; i++) {
        numbers.push(i);
    }

    const listItems = numbers.map((number) => {
        const fontStyle = { color: 'black' }

        if (number % 2 == 0) {
            fontStyle.color = 'red'

        }

        return (
            <p style={fontStyle}>{number}</p>
        )

    }


    );

    return (
        <table className='table'>
            <tbody>
                <tr>
                    <td>{listItems}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default NumbersTable

