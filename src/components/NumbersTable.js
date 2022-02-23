
// Iteration 12 | List and Keys | NumbersTable
function NumbersTable(props) {
    const numArr = []
    for (let i = 0; i < props.limit; i++){
        numArr.push(i+1)
    }

    return (
        <div >
            <span className="numbers-table">{numArr}</span>
        </div>
    );
}

export default NumbersTable;
