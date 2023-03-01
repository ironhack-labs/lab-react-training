import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const allNumbers = []

    for (let i = 1; i <= limit; i++) {
        allNumbers.push(i)
    }

    const tableStyle = {
        backgroundColor: 'red'
    }

    return (
        <div className='Table'>
            {
                allNumbers.map((elm, idx) => {
                    return (
                        <div
                            key={idx}
                            style={elm % 2 === 0 ? tableStyle : undefined}
                            className='TableSquare'
                        >
                            {elm}</div>
                    )
                })
            }
        </div>
    )
}

export default NumbersTable