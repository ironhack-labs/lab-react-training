import './NumbersTableStyle.css'

function NumbersTable(props) {
    let counter = 0;
    const red = {backgroundColor: "red"};

    return (
        <div className="NumbersTable"> 
            {[...Array(props.limit)].map(box => {
                counter++;
                return (counter % 2 === 0)
                ? <div key={counter} className="box" style={red}>{counter}</div>
                : <div key={counter} className="box">{counter}</div>;
            })}
        </div>
    );
}

export default NumbersTable;