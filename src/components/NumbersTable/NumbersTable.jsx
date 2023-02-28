import NumbersCard from "../NumbersCard/NumbersCard"
import '../NumbersTable/NumbersTable.css'

const NumbersTable = ({ limit }) => {
    const numbersArr = []
    for (let i = 1; i <= limit; i++) {
        numbersArr.push(i)
    }

    return (
        <div className="NumbersTable">
            {
                numbersArr.map(elm => {
                    return <NumbersCard key={elm} number={elm} />
                })
            }
        </div>
    )

}

export default NumbersTable 