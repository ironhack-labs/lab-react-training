import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const numbers = []

    for (let i = 1; i <= limit; i++) {
        numbers.push(i)
    }


    const styleBox = {
        backgroundColor: 'red'
    }

    return (
        <div className='Box'>
            {
                numbers.map((elm, idx) => {
                    return <div style={elm % 2 === 0 ? styleBox : undefined} className='NumberBox' key={idx}>{elm}</div>
                })
            }
        </div>
    )
}

export default NumbersTable