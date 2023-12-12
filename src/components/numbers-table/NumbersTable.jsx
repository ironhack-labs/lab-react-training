import "./number-table.css"

function NumbersTable({ limit }) {
    let table = [];
    for (let i = 1; i < limit + 1; i++) {
        table.push(i);
    }
    return (
        <div className="table">
            {
                table.map((num, i) => {
                    return (
                        num % 2 == 0 ? <div key={i} className="red">{num}</div> : <div key={i} className="white">{num}</div>
                    )
                })
            }
        </div>
    )
}

export default NumbersTable


