import "./NumbersTable.css"

const NumbersTable = ({ limit }) => {

    const arr = Array.apply(null, Array(limit)).map((element, i) => i + 1)

    const red = { backgroundColor: "red" }
    const white = { backgroundColor: "white" }


    return (
        <div className="grid">
            {arr.map((e, i) => {
                return <p key={i} className="cell" style={e % 2 === 0 ? red : white}>{e}</p>
            })}
        </div >
    )

}

export default NumbersTable