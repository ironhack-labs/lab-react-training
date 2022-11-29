
import './NumbersTable.css';

const NumbersTable = (props) => {
    const { limit } = props
    const cellsList = []
    for (let i = 1; i <= limit; i++) {
        cellsList.push(i)
    }
    return (
        <div className="numbers-container">
            {cellsList.map(ele => {
                return (
                    <div key={ele} className="number-cell"
                        style={{ backgroundColor: ele % 2 === 0 ? "red" : "white" }}>
                        {ele}
                    </div>);
            })}
        </div>
    )
}

export default NumbersTable


