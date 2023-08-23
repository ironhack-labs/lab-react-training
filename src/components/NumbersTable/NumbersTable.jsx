import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const numbers = []

    for (let i = 1; i <= limit; i++) {
        numbers.push(i)
    }

    return (
        <div className='NumbersTable'>
            {
                numbers.map(number => {
                    return (
                        <span key={number} className={number % 2 === 0 ? 'even' : 'odd'}>
                            {number}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default NumbersTable