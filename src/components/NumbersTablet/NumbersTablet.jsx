
const NumbersTable = ({ limit }) => {

    const newArr = []
    let count = 0

    for (let i = 0; i < limit; i++) {
        count++
        newArr.push(count)
    }

    // (newArr % 2 === 0) ? "red" : "white"

    return (
        <div className="colorNumber">
            {newArr}
        </div>
    )

}

export default NumbersTable