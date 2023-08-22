import './NumbersTable.css'



const NumberTable = ({ limit }) => {

    const Table = []

    for (let i = 1; i < limit + 1; i++) {
        Table.push(i)
    }

    return (
        <div className='table'>
            {
                Table.map((elm, idx) => {
                    return elm % 2 === 0 ? <p className='numbertableRed' key={idx}>{elm}</p> : <p className='numbertableWhite' key={idx}>{elm} </p>
                })


            }
        </div>
    )


}

export default NumberTable