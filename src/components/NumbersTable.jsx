import './NumbersTable.css'

const NumbersTable = (props) => {
    const { limit } = props
    const numberList = []
    for (let i = 1; i <= limit; i++) {
        numberList.push(i)
    }
    return (
        <div className="numbers-container">
            {numberList.map(elm => {
                return (
                    <div key={elm} className="number-elm" style={{ backgroundColor: elm && elm % 2 === 0 ? "red" : "white" }}>
                        {elm}
                    </div>
                );
            })}
        </div>
    )

}

export default NumbersTable