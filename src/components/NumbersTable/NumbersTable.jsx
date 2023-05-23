const NumbersTable = ({ limit }) => {


    let array = []
    for (let i = 1; i <= limit; i++) {
        array.push(i)
    }

    return (

        array.map(number => {

            let color = number % 2 === 0 ? 'red' : 'white'

            return <div key={number} className="box" style={{ backgroundColor: color }}> {number} </div >

        })

    )
}

export default NumbersTable