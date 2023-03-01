import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    for (let i = 1; i <= limit; i++)
        numbers.push(i)

    return (
        <div className='NumbersTable'>
            {numbers.map((number) => (
                <li style={{ color: number % 2 === 0 ? 'red' : 'white' }}>
                    {{ number }}
                </li>))}


        </div>


    )
}

export default NumbersTable