import './NumbersTable.css'

const NumbersTable = ({ limit }) => {
    let arrNum = []
    for (let i = 1; i <= limit; i++) {
        arrNum.push(i)
    }

    return (
        <div className='numberTable'>
            {
                arrNum.map(elm => {
                    const difBackground = elm % 2 === 0 ? { backgroundColor: "red" } : { backgroundColor: "white" }
                    return (
                        <div className='numberDiv' style={difBackground} key={elm}>{elm} </div>
                    )
                })
            }

        </div>

    )

}

export default NumbersTable