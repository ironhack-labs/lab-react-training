const NumbersTable = ({ limit }) => {

    const numArr = []

    for (let i = 1; i <= limit; i++) {
        numArr.push(i)
    }

    return (
        <>
            <div className="NumbersTable">
                {
                    numArr.map((elm, ind) => {
                        let print
                        if (elm % 2 === 0) {
                            print = <p key={ind} style={{ backgroundColor: 'red' }} className="number">{elm}</p>
                        }
                        else {
                            print = <p key={ind} className="number">{elm}</p>
                        }
                        return print
                    })
                }
            </div>
        </>
    )
}

export default NumbersTable