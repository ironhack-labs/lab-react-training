
const NumbersTable = ({ limit }) => {

    const newArr = []
    let count = 0

    for (let i = 0; i < limit; i++) {
        count++
        newArr.push(count)
    }

    let bgColor = newArr.map(elm => {
        let newColor = elm % 2 === 0 ? "red" : "white"
        return (
            <div className="color">{newColor}{elm}</div>
        )
    })

    return (
        <div className="color">
            {newArr}
        </div>
    )

}

export default NumbersTable