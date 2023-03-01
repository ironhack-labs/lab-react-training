import './../NumbersTable/NumbersTable.css'

const NumbersTable = ({ limit }) => {

    console.log(limit)

    const squares = []

    const boxStyle = {
        backgroundColor: 'red'
    }

    const isEven = number => {

        if (number % 2 == 0) {
            return <span className="square" style={boxStyle}>{number}</span>
        }
        else {
            return <span className="square"> {number}</span>
        }
    }


    for (let i = 1; i <= limit; i++) {

        squares.push({ i })
    }
    console.log(squares)
    return (
        <section className="NumbersTable">

            <h1>holaaa</h1>
            {

                squares.map(({ i }) => {
                    return (
                        <div key={i}>
                            {isEven(i)}
                        </div>
                    )
                })
            }
        </section>

    )
}

export default NumbersTable