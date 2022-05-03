
import './NumbersTable.css'


const NumbersTable = ({ limit }) => {


    const arr = []

    for (let i = 1; i <= limit; i++) {
        arr.push(i)
    }

    const mystyle = {
        backgroundColor: "red",
    }

    return (
        <div className='numbertable' >
            {
                arr.map((elm, idx) => {
                    if (elm % 2 === 0) {
                       return <div key={idx} style={mystyle}>{elm}</div>
                    } else {
                        return <div key={idx}>{elm}</div>
                    }

                })
            }
        </div>
    )
}

export default NumbersTable