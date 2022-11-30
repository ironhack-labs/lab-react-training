import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const result = [];
    for (let i = 0; i < limit; i++) {
        result.push(<div key={i}>{i + 1}</div>);
    }
    return <div className="numbers-table">{result}</div>;
}
export default NumbersTable
