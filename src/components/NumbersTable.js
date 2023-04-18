

function NumbersTable(props) {

    const { limit } = props

    const numbers = Array.from({ length: limit }, (_, i) => i + 1);

   
    return (
        <div className="number-container">

        {numbers.map(number => {
            return <div key={number} className="number">
                {number}
            </div>
        })}

    </div>
    )

}

export default NumbersTable