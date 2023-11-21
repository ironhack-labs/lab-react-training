import './NumbersTable.css'

const NumbersTable = ({ limit }) => {
    const arr = []
    for (let i = 1; i <= limit; i++) {
        arr.push(i)
    }

    return (
        <div className='grid'>
            {
                arr.map(elm => {

                    return < span key={elm} className={elm % 2 === 0 ? 'odd' : ''}> {elm}</span>

                })
            }
        </div >
    )
}

export default NumbersTable