import './NumbersTable.css';

const NumbersTable = ({ limit }) => {
    const NumbersArray = [];
    let color = "";

    for (let i = 1; i <= limit; i++) {
        NumbersArray[i] = i;
    }

    return (
        <div class="numbertable-container">
            {
                NumbersArray.map(Number => {
                    if (Number % 2 === 0) { color = "red" } else { color = "white" }
                    return (
                        <span style={{ backgroundColor: color }} className="box-table">{Number}</span>
                    );
                })
            }
            <div style={{ clear: 'both' }}></div>
        </div>
    );
}

export default NumbersTable;