import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const numbersArray = []

    for (let i = 1; i <= limit; i++) {
        numbersArray.push(i)
    }

    return (

        <table className='NumbersTable'>
            <tbody>
                <tr>
                    {numbersArray.map(num => {
                        return (
                            num % 2 === 0 ? <td className='par'>{num}</td> : <td className='impar'>{num}</td>
                        )
                    })
                    }
                </tr>
            </tbody>
        </table>

    )


}

export default NumbersTable