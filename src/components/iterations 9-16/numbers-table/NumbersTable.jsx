import NumberTile from "./number-tile/NumberTile";

function NumbersTable({ limit }) {
    const numbersList = [];
    for (let i = 1; i <= limit; i++) {
        numbersList[i - 1] = i;
    }

    return (
        <div className="d-inline-block m-2">
            <div className="row" style={{ width: "25em" }}>
                {numbersList.map(number => (
                    <NumberTile key={number.toString()} children={number} />
                ))}
            </div>
        </div>
    )
}

export default NumbersTable;
