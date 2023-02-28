import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const arr = []

    for (let i = 1; i <= limit; i++) {
        arr.push(i)
    }

    const styleOdd = {
        border: '1px solid black',
        backgroundColor: 'white',
        display: 'flex',
        width: '10%',
        aspectRatio: '1/1',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const stylePair = {
        border: '1px solid black',
        backgroundColor: 'red',
        display: 'flex',
        width: '10%',
        aspectRatio: '1/1',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div className='numTable'>
            {arr.map(elm => {
                return <div style={elm % 2 === 0 ? stylePair : styleOdd}>{elm}</div>
            })}
        </div>
    )
}

export default NumbersTable