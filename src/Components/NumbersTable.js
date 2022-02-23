import "./NumbersTable.css"

function NumbersTable(props) {

    let numArray = []
    for (let i = 1; i <= props.limit; i++) {
        numArray.push(i)
    }


    return (

        <article className="table">

            {numArray.map((elm, idx) =>
                idx % 2 === 0 ? <div key={idx} className="tableSquare red" >{elm}</div> : <div key={idx} className="tableSquare " >{elm}</div>)}

        </article>

    )
}

export default NumbersTable