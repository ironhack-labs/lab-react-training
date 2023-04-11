function NumbersTable({limit}){
    console.log("limit", typeof (limit));
    const numbers = Array(limit).fill(0).map((_, i) => i + 1);
    console.log("numbers", numbers);
    return (
        <div>
            <h1>Numbers Table</h1>
            <div className="numbers-table">
                {numbers.map((number, index) => {
                    return (
                        <div key={index} className={number % 2 === 0 ? "numbers-table-even" : "numbers-table-odd"}>
                            {number}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NumbersTable;