import './NumbersTable.css'

const NumbersTable = (props) => {

    const { limit } = props

    const newArr = []
    for (let i = 1; i <= limit; i++) {
        newArr.push(i)
    }

    const color = { background: 'red' }

    function checkPairs(number) {
        if (number % 2 === 0) {
            return <p style={color} key={number} className='number'>{number}</p>
        } else {
            return <p key={number} className='number'>{number}</p>
        }
    }

    return (
        <section className='NumbersTable'>
            {
                newArr.map(number => checkPairs(number))
            }
        </section>
    )
}

export default NumbersTable