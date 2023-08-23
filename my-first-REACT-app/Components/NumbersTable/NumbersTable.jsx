import './NumbersTable.css'

const NumbersTable = ({ limit }) => {



    let numbersArray = []

    for (let i = 1; i <= limit; i++) {
        i % 2 === 0 ? numbersArray.push(<p key={i} className="evenNumbers">{i}</p>) :
            numbersArray.push(<p key={i} className="oddNumbers">{i}</p>)

    }
    return (
        numbersArray
    )



}

export default NumbersTable