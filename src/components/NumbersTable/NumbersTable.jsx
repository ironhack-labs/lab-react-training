import "./NumbersTable.css"

const NumbersTable = ({ limit }) => {

    let arrNumber = [...Array(limit).keys()]
    let divStyle = { backgroundColor: 'red' }

    return (<div className="tableNumbers">{

        arrNumber.map((elm, index) => {
            return (
                index % 2 === 0 ? <div key={elm} style={divStyle} className="numberCell">{elm}</div> : <div key={elm} className="numberCell">{elm}</div>
            )
        }
        )}
    </div>
    )
}
export default NumbersTable