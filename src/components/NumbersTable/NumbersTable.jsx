

function NumbersTable({ limit }) {
    const arr = []
    for (let i = 1; i <= limit; i++) {
        arr.push(i)
    }
    return (
        <>
            {
                arr.map((el) => {
                    return (
                        el % 2 === 0 ? <li style={{ backgroundColor: "red" }}>{el}</li> : <li style={{ backgroundColor: "white" }}>{el}</li>
                    )
                })
            }</>

    )





}

export default NumbersTable;