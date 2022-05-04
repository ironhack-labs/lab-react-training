import "../styles/NumbersTable.css"


const NumbersTable = ({ limit }) => {

    const table = []
    for (let i = 1; i < limit + 1; i++) {
        table.push(<tr className={i % 2 == 1 ? "odds" : "pairs"}>{i}</tr>)
    }

    return (
        <table className="numbers">
            {table}
        </table>
    )

}


export default NumbersTable