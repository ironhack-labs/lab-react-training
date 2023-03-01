import './NumbersTable.css'

const NumbersTable = (props) => {

    return <div className="squares">
        <div classname="box">{props.limit}</div>
    </div>
}

export default NumbersTable