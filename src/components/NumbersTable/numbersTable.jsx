import './numbersTable.css'

const NumbersTable = ({ limit }) => {

    let arrlist = []
    for (let i = 1; i <= limit; i++) {
        arrlist.push(i)
    }

    console.log(arrlist)

    return (
        <div className='containerSquare'>
            {
                arrlist.map((elm, idx) => {
                       
                    return <div className={elm % 2 === 0 ? 'back-style-color' : 'back-style-white'} key={idx}>{elm}</div>
                })
            }
        </div>

    )
}


export default NumbersTable


