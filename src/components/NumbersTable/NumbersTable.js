import "./NumbersTable.css"
const NumbersTable = ({ limit }) => {



    const paintBoxes = () => {
        let container = []
        for (let i = 1; i <= limit; i++) {
            container.push(i)
        }
        return container
    }

    return (
        <div className="numberBoxTable">{paintBoxes().map((e, index) => {
            return index % 2 === 0 ? <div className="numberBox red" key={index}>{e}</div> : <div className="numberBox" key={index}>{e}</div>
        }
        )}
        </div>
    )
}
export default NumbersTable
