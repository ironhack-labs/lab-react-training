import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    let table = []
    console.log(Number(limit))

    for (let i = 1; i < Number(limit) + 1; i++) {
        // table.push(`<div className="table" key=${i}>${i}</div>`)
        table.push(i)
    }
    return (
        table.map((e, index) => {
            if (e % 2 === 0) {
                return <div key={index} className='tableRed'>{e}</div>
            } else {
                return <div key={index} className='tableWhite'>{e}</div>
            }
        })
    )




}

export default NumbersTable