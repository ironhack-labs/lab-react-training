import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const list = []
    for (let i = 1; i <= limit; i++) {
        list.push(i)
    }
    return (
        <>
            {list.map(elm => {
                return (
                    <div style={{ backgroundColor: elm % 2 === 0 ? 'red' : 'white' }}>{elm}</div>
                )
            })

            }
        </>
    )
}

export default NumbersTable 