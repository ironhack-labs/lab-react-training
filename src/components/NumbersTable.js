const NumbersTable = ({limit}) => {

    let squareArray = [];

    for (let i = 1; i <= limit; i+=1) {
        squareArray.push(i);
    }

    console.log(squareArray);

    const table = squareArray.map(square => {

        let box;

        if (square % 2 === 0) {
            box = "red"
        } else { box = "white"}

        return (
            <div className={box} key={square}>
            <span> {square}</span>
            </div>
        )
    })

    return (
        <div className="table">
        {table}

        </div>

        )
}
export default NumbersTable;