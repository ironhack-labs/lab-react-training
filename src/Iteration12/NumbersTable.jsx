import './styles.css'

const NumbersTable = ({ limit }) => {

    let numArray = []
    let counter = 0

    while (numArray.length < limit) {
        counter++
        numArray.push(counter)
    }
    console.log(numArray)

    const chess = numArray.map(elm => {

        let bgcolor = (elm % 2 === 0) ? 'red' : 'whites'

        return (
            <div className={bgcolor}>{elm}</div>
        )
    })

    return (
        <div className="wholeChess">
            {chess}
        </div>
    )
}

export default NumbersTable