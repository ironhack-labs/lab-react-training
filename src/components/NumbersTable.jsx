import '../styles/NumbersTable.css'

export default function NumbersTable(props) {
    let myNumbers = []
    for (let i=1; i <= props.limit; i++) {
        myNumbers.push(i)
    }

    return (
        <div className='NumbersTable'>
            {myNumbers.map(number => {
                if(number % 2 === 0) {
                    return <div style={{backgroundColor: 'red'}} key={number.toString()}><p>{number}</p></div>
                }
                else {
                    return <div key={number.toString()}><p>{number}</p></div>
                }
            })}
        </div>
    )
}