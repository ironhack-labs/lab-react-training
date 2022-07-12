import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    let numArr = []
    let counter = 0

    while (numArr.length < limit) {
        counter++
        numArr.push(counter)
    }

    const table = numArr.map(elm => {
        let bgColor = (elm % 2 === 0) ? 'red' : 'white'
        return (
            <div className={bgColor}>{elm}</div>
        )
    })

    return (
        <div className="table">{table}</div>
    )
}

export default NumbersTable