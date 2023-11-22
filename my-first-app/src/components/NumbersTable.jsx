const NumbersTable = ({ limit }) => {


    const blocks = []

    for (let i = 1; i <= limit; i++) {
        blocks.push(i)
    }

    const white = {
        backgroundColor: 'white'
    }

    const red = {
        backgroundColor: 'red'
    }


    return (
        <div className="NumbersTable">
            {
                blocks.map((elm, i) => {
                    return <div key={i} style={elm % 2 == 0 ? red : white}>{elm}</div>
                })
            }
        </div>
    )

}

export default NumbersTable