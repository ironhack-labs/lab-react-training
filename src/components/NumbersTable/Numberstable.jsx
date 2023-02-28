const NumbersTable = ({ limit }) => {

    const table = Array.from({ length: limit }).fill(null).map((_, index) => index + 1)


    return (
        <section className="table separation">
            {
                table.map(num => {
                    let color = 'white'
                    if (num % 2 === 0) color = 'red'
                    return (
                        <p className="numbers" style={{ backgroundColor: color }}>{num}</p>
                    )
                })
            }
        </section >
    )
}

export default NumbersTable