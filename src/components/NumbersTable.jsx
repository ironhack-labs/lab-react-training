import './NumbersTable.css'




const NumbersTable = (props) => {
    const { limit } = props
    const listNumbers = []
    for (let i = 1; i <= limit; i++) {
        listNumbers.push(i)
    }
    const table = listNumbers.map((number) => {
        const isEven = number % 2 === 0
        const cell = isEven ? { backgroundColor: 'red' } : {}

        return (
            <section key={number} className='listNumber' style={cell}>
                {number}
            </section>
        )
    })
    return <div>{table}</div>
}













export default NumbersTable