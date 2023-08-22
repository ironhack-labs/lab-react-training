import './NumbersTable.css'

const NumbersTable = ({ limit }) => {
    let numbersArray = []
    for (let i = 0; i <= limit; i++) {
        numbersArray.push(i)
    }

    return (
        <>
            {
                numbersArray.map(number => {
                    return (
                        <div key={number} className={`numbers ${number % 2 === 0 && 'red'}`} >
                            {number}
                        </div>
                    )
                })
            }
        </>
    )
}

export default NumbersTable