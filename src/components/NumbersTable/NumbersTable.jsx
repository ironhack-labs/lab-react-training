import './NumbersTable'

const NumbersTable = ({ limit }) => {
    let numbers = []
    for (let i = 1; i <= limit; i++) {
        numbers.push(i)
    }

    let rows = []
    for (let i = 0; i < numbers.length; i += 5) {
        rows.push(numbers.slice(i, i + 5))
    }

    return (
        <table className="numbers-table">
            {rows.map((row, i) => (
                <tr>
                    {row.map(num => (
                        <td
                            style={{
                                width: '50px',
                                height: '50px',
                                border: '1px solid black',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: num % 2 === 0 ? 'red' : null,
                            }}
                        >
                            {num}
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    )

    // return (

    // <table>
    //     <tr>
    //         {numbers.map(num => (
    //             <div
    //                 style={{
    //                     width: '50px',
    //                     height: '50px',
    //                     border: '1px solid black',
    //                     display: 'flex',
    //                     justifyContent: 'center',
    //                     alignItems: 'center',
    //                     backgroundColor: num % 2 === 0 ? 'red' : null,
    //                 }}
    //             >
    //                 {num}
    //             </div>
    //         ))}
    //     </tr>
    // </table>





    // <div className="numbers-table">
    //     {numbers.map(num => (
    //         <div
    //             style={{
    //                 width: '50px',
    //                 height: '50px',
    //                 border: '1px solid black',
    //                 display: 'flex',
    //                 justifyContent: 'center',
    //                 alignItems: 'center',
    //                 backgroundColor: num % 2 === 0 ? 'red' : null,
    //             }}
    //         >
    //             {num}
    //         </div>
    //     ))}
    // </div>
    // )
}

export default NumbersTable
