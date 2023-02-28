import '../NumbersCard/NumbersCard.css'

const NumbersCard = ({ number }) => {
    let color = number % 2 ? 'red' : 'white'

    const divStyle = {
        backgroundColor: color
    }

    return (
        <div className="NumbersCard" style={divStyle}>
            <h1>{number}</h1>
        </div>
    )
}

export default NumbersCard