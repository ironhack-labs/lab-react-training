function NumbersTable({ limit }) {

    const numbersArray = [];

    for (let i = 1; i <= limit; i++) {
        numbersArray.push(i)
    }



    return (
        <div className="number-box-container">

            {numbersArray.map((value) => {
                return (
                    <div className="number-box" key={value} style={{ backgroundColor: value % 2 === 0 ? "red" : "white" }} >
                        {value}
                    </div>
                );
            })}

        </div>
    )
}

export default NumbersTable;