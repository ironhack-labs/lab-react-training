import './NumbersTable.css'

function NumbersTable({ limit }) {
    let result = [];
    for (let i = 0; i < limit; i++) {
        result.push(<div key={i}>{i + 1}</div>);
    }
    return <div className="numbers-table">{result}</div>;
}
export default NumbersTable