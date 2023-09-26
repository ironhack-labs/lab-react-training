function NumberTile({ children }) {
    const divStyle = { width: "5em", height: "5em"};
    children % 2 === 0 ? divStyle.backgroundColor = "red" : divStyle.backgroundColor = "white";
    children % 2 === 0 ? divStyle.color = "white" : divStyle.color = "black";
    return (
        <div className="border border-dark border-2 fw-bold d-flex justify-content-center align-items-center" style={ divStyle }>{ children }</div>
    )

}

function NumbersTable({ limit }) {
    const numbersList = [];
    for (let i = 1; i <= limit; i++) {
        numbersList[i - 1] = i;
    }

    return (
        <div className="d-inline-block m-2">
            <div className="text-center row" style={{ width: "25em" }}>
                {numbersList.map(number => (
                    <NumberTile key={number.toString()} children={number} />
                ))}
            </div>
        </div>
    )
}
export default NumbersTable;