function NumbersTable({ limit }) {
    const arr = []
    for (let i = 1; i <= limit; i++) {
        arr.push(i)
    }

    return (
        <div>
            {
                arr.map((element, index) => {
                    return (
                        <span key={element} style={{ backgroundColor: element % 2 === 0 ? "red" : "white" }} >{element} </span>

                    )

                })
            }
        </div>
    )




}

export default NumbersTable