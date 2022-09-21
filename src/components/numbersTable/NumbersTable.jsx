const NumbersTable = ((props) => {

    let cellsList = []
    for (let i = 1; i <= props.limit; i++) cellsList.push(i)
    return (
        <div className="numbersTable">
            {cellsList.map(cell => {
                return (<div key={cell} className="numberCell" style={{ backgroundColor: cell & 1 === 1 ? "white" : "red" }}>{cell}</div>);
            })}
        </div>
    )

})

export default NumbersTable