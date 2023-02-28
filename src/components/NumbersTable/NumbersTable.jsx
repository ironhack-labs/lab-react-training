import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const numList = []
    for (let i = 1; i <= limit; i++) {
        numList.push(i)
    }
    return (
        <div className='Table'>
            {numList.map(elm => {
                return (
                    <div className='Number' style={{ backgroundColor: elm % 2 === 0 ? 'red' : 'white' }}>{elm}</div>
                )
            })

            }
        </div>
    )
}

export default NumbersTable