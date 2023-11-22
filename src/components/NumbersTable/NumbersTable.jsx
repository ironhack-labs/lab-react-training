import './NumbersTable.css'




const NumbersTable = ({ limit }) => {

    let table = []
    for (let i = 1; i < limit + 1; i++) {
        table.push(i)
    }
    console.log(table)

    return (
        <div>{
            table.map((elm, i) => {
                return (
                    elm % 2 == 0
                        ?
                        <div key={i} className='tableRed'>{elm}</div>
                        :
                        <div key={i} className='tableBlack'>{elm}</div>
                )
            })
        }</div>

    )
}

export default NumbersTable



