import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const arr = []
    for (let i = 1; i <= limit; i++) {
        arr.push(i)
    }

    const divStyle = {
        backgroundColor: 'red'
    }

    return (
        <div className="numbersTable">
            {
                arr.map((elm, idx) => {

                    if (idx % 2 !== 0) {
                        return <p key={idx} style={divStyle}>{elm}</p>
                    } else {
                        return <p key={idx}>{elm}</p>
                    }

                })
            }
        </div>
    )
}

export default NumbersTable